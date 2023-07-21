import User from "../entities/user.js";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import crypto from "crypto"

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};


// #region addUser
export function addUser(req, res) {
  if (validationResult(req).isEmpty()) {
    const user = new User({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      pwd: req.body.pwd,
      token: req.body.token,
      langitude: req.body.langitude,
      latitude: req.body.latitude,
      role:req.body.role
    });



   
    user
      .save()
      .then((newuser) => {
        //sendVerificationCode(newuser.phone, verificationCode);
        const emailDest = newuser.email
        sendConfirmationEmail(newuser,emailDest);
        //console.log(user)
        res.status(201).json({
          name: newuser.name,
          surname: newuser.surname,
          phone: newuser.phone,
          email: newuser.email,
          pwd: newuser.pwd,
          token: newuser.token,
          langitude: newuser.langitude,
          latitude: newuser.latitude,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "email was used try another one" });
      });
  } else {
    res.status(400).json({ message: "phone must be 8 digit" });
  }
}
//#endregion

// #region sendConfirmationEmail
function sendConfirmationEmail(newuser, emailDest) {
  // Configuration de l'API de messagerie
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
 
  auth: {
    user: "solutionewaste1@gmail.com", 
    pass: "jmqyonhfljspelcz", 
  }
});
  const mailOptions = {
    from: "solutionewaste1@gmail.com", 
    to:  emailDest,
    subject: "Confirmation d'inscription",
    text: `Cher ${newuser.name},\n\nMerci de vous être inscrit. Votre inscription a été confirmée.`,
    html: `
         <p style="color: green; font-size: 20px;">Cher ${newuser.name},</p>
    <p style="color: #333; font-size: 16px;">Merci de vous être inscrit. Votre inscription a été confirmée.</p>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail de notification:', error);
    } else {
      console.log('E-mail de notification envoyé:', info.response);
    }
  });
}


export function getUser(req, res) {
  
  User.findById( req.params.id )
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
//getAll
export function getAllUsers(req, res) {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

// signIn
export async function signIn(req, res) {
  const { email, pwd } = req.body;

  try {
    const user = await User.login(email, pwd);
    console.log(user)
    const token = createToken(user._id);
    
    res.cookie('jwt', token, { httpOnly: true, maxAge });
   res.status(200).json({ token: token ,role:user.role,id:user._id });
  } catch (err) {
    res.status(500).json({ err });
  }
}


//patchUser

export function patchUser(req, res) {
  const userId = req.params.id;
  const { name, surname, phone, email, pwd, longitude, latitude ,role } = req.body; // Fix variable names here

  User.findByIdAndUpdate(
    userId,
    { name, surname, phone, email, pwd, latitude, longitude,role }, // Fix variable names here
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return user.save();
    })
    .then((updated) => {
      res.status(200).json(updated);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}



//deleteUser
export async function deleteUser(req, res) {
  User.findOneAndRemove({ _id: req.params.id })
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}


// logoutUser
export async function logoutUser(req, res) {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Déconnexion réussie' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
function generateVerificationCode() {
  return crypto.randomBytes(3).toString('hex').toUpperCase();
}

async function saveVerificationCode(userId, verificationCode) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found.');
    }
    user.verificationCode = verificationCode;
    user.verificationCodeExpiresAt = Date.now() + 3600000;
    await user.save();
  } catch (err) {
    console.error('Error saving verification code:', err);
    throw err;
  }
}

export async function sendForgotPasswordEmail(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const verificationCode = generateVerificationCode();
    await saveVerificationCode(user._id, verificationCode);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "solutionewaste1@gmail.com",
        pass: "jmqyonhfljspelcz",
      }
    });
    const mailOptions = {
      from: "solutionewaste1@gmail.com",
      to: user.email,
      subject: 'Password Reset',
      text: `Your verification code is: ${verificationCode}. Use this code to reset your password.`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'An email has been sent to your address. Please check your inbox.' });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
}

export async function verifyVerificationCode(req, res) {
  const { email, verificationCode, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (user.verificationCode !== verificationCode || user.verificationCodeExpiresAt < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired verification code.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.pwd = hashedPassword;
    user.verificationCode = undefined;
    user.verificationCodeExpiresAt = undefined;
    await user.save();

    return res.status(200).json({ message: 'Your password has been reset successfully.' });
  } catch (err) {
    console.error('Error resetting password:', err);
    return res.status(500).json({ message: 'An error occurred while resetting the password.' });
  }
}

