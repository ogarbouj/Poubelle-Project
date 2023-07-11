import User from "../entities/user.js";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
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
        res.status(500).json({ Message: "Internal server error" });
      });
  } else {
    res.status(400).json(validationResult(req).array());
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
// #endregion

// #region getUser
export function getUser(req, res) {
  User.find({ name: req.params.name })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
//#endregion

//#region signIn
export async function signIn(req, res) {
  const { email, pwd } = req.body;

  try {
    const user = await User.login(email, pwd);
    console.log(user)
    const token = createToken(user._id);
    
    res.cookie('jwt', token, { httpOnly: true, maxAge });
   res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ err });
  }
}
//#endregion

//#region patchUser
export function patchUser(req, res) {
  const userId = req.params.id;
  const { name, surname, phone, email, pwd, langitude, latitude } = req.body;

  User.findByIdAndUpdate(
    userId, { name, surname, phone, email, pwd, latitude, langitude },
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
//#endregion

//#region deleteUser
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
//#endregion

//#region logoutUser
export async function logoutUser(req, res) {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Déconnexion réussie' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//#endregion
