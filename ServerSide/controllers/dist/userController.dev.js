"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = addUser;
exports.getUser = getUser;
exports.getAllUsers = getAllUsers;
exports.signIn = signIn;
exports.patchUser = patchUser;
exports.deleteUser = deleteUser;
exports.logoutUser = logoutUser;
exports.sendForgotPasswordEmail = sendForgotPasswordEmail;
exports.verifyVerificationCode = verifyVerificationCode;

var _user = _interopRequireDefault(require("../entities/user.js"));

var _expressValidator = require("express-validator");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var maxAge = 3 * 24 * 60 * 60 * 1000;

var createToken = function createToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  });
}; // #region addUser


function addUser(req, res) {
  if ((0, _expressValidator.validationResult)(req).isEmpty()) {
    var user = new _user["default"]({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      pwd: req.body.pwd,
      token: req.body.token,
      langitude: req.body.langitude,
      latitude: req.body.latitude,
      role: req.body.role
    });
    user.save().then(function (newuser) {
      //sendVerificationCode(newuser.phone, verificationCode);
      var emailDest = newuser.email;
      sendConfirmationEmail(newuser, emailDest); //console.log(user)

      res.status(201).json({
        name: newuser.name,
        surname: newuser.surname,
        phone: newuser.phone,
        email: newuser.email,
        pwd: newuser.pwd,
        token: newuser.token,
        langitude: newuser.langitude,
        latitude: newuser.latitude
      });
    })["catch"](function (err) {
      res.status(500).json({
        message: "email was used try another one"
      });
    });
  } else {
    res.status(400).json({
      message: "phone must be 8 digit"
    });
  }
} //#endregion
// #region sendConfirmationEmail


function sendConfirmationEmail(newuser, emailDest) {
  // Configuration de l'API de messagerie
  var transporter = _nodemailer["default"].createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "solutionewaste1@gmail.com",
      pass: "jmqyonhfljspelcz"
    }
  });

  var mailOptions = {
    from: "solutionewaste1@gmail.com",
    to: emailDest,
    subject: "Confirmation d'inscription",
    text: "Cher ".concat(newuser.name, ",\n\nMerci de vous \xEAtre inscrit. Votre inscription a \xE9t\xE9 confirm\xE9e."),
    html: "\n         <p style=\"color: green; font-size: 20px;\">Cher ".concat(newuser.name, ",</p>\n    <p style=\"color: #333; font-size: 16px;\">Merci de vous \xEAtre inscrit. Votre inscription a \xE9t\xE9 confirm\xE9e.</p>\n  ")
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail de notification:', error);
    } else {
      console.log('E-mail de notification envoyé:', info.response);
    }
  });
}

function getUser(req, res) {
  _user["default"].findById(req.params.id).then(function (users) {
    res.status(200).json(users);
  })["catch"](function (err) {
    res.status(500).json(err);
  });
} //getAll


function getAllUsers(req, res) {
  _user["default"].find().then(function (users) {
    res.status(200).json(users);
  })["catch"](function (err) {
    res.status(500).json(err);
  });
} // signIn


function signIn(req, res) {
  var _req$body, email, pwd, user, token;

  return regeneratorRuntime.async(function signIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, pwd = _req$body.pwd;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_user["default"].login(email, pwd));

        case 4:
          user = _context.sent;
          console.log(user);
          token = createToken(user._id);
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge
          });
          res.status(200).json({
            token: token,
            role: user.role
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            err: _context.t0
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
} //patchUser


function patchUser(req, res) {
  var userId = req.params.id;
  var _req$body2 = req.body,
      name = _req$body2.name,
      surname = _req$body2.surname,
      phone = _req$body2.phone,
      email = _req$body2.email,
      pwd = _req$body2.pwd,
      longitude = _req$body2.longitude,
      latitude = _req$body2.latitude,
      role = _req$body2.role; // Fix variable names here

  _user["default"].findByIdAndUpdate(userId, {
    name: name,
    surname: surname,
    phone: phone,
    email: email,
    pwd: pwd,
    latitude: latitude,
    longitude: longitude,
    role: role
  }, // Fix variable names here
  {
    "new": true
  }).then(function (user) {
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    return user.save();
  }).then(function (updated) {
    res.status(200).json(updated);
  })["catch"](function (error) {
    res.status(500).json({
      error: error.message
    });
  });
} //deleteUser


function deleteUser(req, res) {
  return regeneratorRuntime.async(function deleteUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _user["default"].findOneAndRemove({
            _id: req.params.id
          }).then(function (doc) {
            if (!doc) {
              return res.status(404).json({
                message: 'User not found'
              });
            }

            res.status(200).json(doc);
          })["catch"](function (err) {
            res.status(500).json({
              error: err
            });
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
} // logoutUser


function logoutUser(req, res) {
  return regeneratorRuntime.async(function logoutUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            res.clearCookie('jwt');
            res.status(200).json({
              message: 'Déconnexion réussie'
            });
          } catch (error) {
            res.status(500).json({
              error: error.message
            });
          }

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function generateVerificationCode() {
  return _crypto["default"].randomBytes(3).toString('hex').toUpperCase();
}

function saveVerificationCode(userId, verificationCode) {
  var user;
  return regeneratorRuntime.async(function saveVerificationCode$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_user["default"].findById(userId));

        case 3:
          user = _context4.sent;

          if (user) {
            _context4.next = 6;
            break;
          }

          throw new Error('User not found.');

        case 6:
          user.verificationCode = verificationCode;
          user.verificationCodeExpiresAt = Date.now() + 3600000;
          _context4.next = 10;
          return regeneratorRuntime.awrap(user.save());

        case 10:
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error('Error saving verification code:', _context4.t0);
          throw _context4.t0;

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function sendForgotPasswordEmail(req, res) {
  var email, user, verificationCode, transporter, mailOptions, info;
  return regeneratorRuntime.async(function sendForgotPasswordEmail$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          email = req.body.email;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: email
          }));

        case 4:
          user = _context5.sent;

          if (user) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'User not found.'
          }));

        case 7:
          verificationCode = generateVerificationCode();
          _context5.next = 10;
          return regeneratorRuntime.awrap(saveVerificationCode(user._id, verificationCode));

        case 10:
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            auth: {
              user: "solutionewaste1@gmail.com",
              pass: "jmqyonhfljspelcz"
            }
          });
          mailOptions = {
            from: "solutionewaste1@gmail.com",
            to: user.email,
            subject: 'Password Reset',
            text: "Your verification code is: ".concat(verificationCode, ". Use this code to reset your password.")
          };
          _context5.next = 14;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 14:
          info = _context5.sent;
          console.log('Email sent:', info.response);
          return _context5.abrupt("return", res.status(200).json({
            message: 'An email has been sent to your address. Please check your inbox.'
          }));

        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](1);
          console.error('Error sending email:', _context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            message: 'An error occurred while sending the email.'
          }));

        case 23:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 19]]);
}

function verifyVerificationCode(req, res) {
  var _req$body3, email, verificationCode, newPassword, user, hashedPassword;

  return regeneratorRuntime.async(function verifyVerificationCode$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, verificationCode = _req$body3.verificationCode, newPassword = _req$body3.newPassword;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: email
          }));

        case 4:
          user = _context6.sent;

          if (user) {
            _context6.next = 7;
            break;
          }

          return _context6.abrupt("return", res.status(404).json({
            message: 'User not found.'
          }));

        case 7:
          if (!(user.verificationCode !== verificationCode || user.verificationCodeExpiresAt < Date.now())) {
            _context6.next = 9;
            break;
          }

          return _context6.abrupt("return", res.status(400).json({
            message: 'Invalid or expired verification code.'
          }));

        case 9:
          _context6.next = 11;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(newPassword, 10));

        case 11:
          hashedPassword = _context6.sent;
          user.pwd = hashedPassword;
          user.verificationCode = undefined;
          user.verificationCodeExpiresAt = undefined;
          _context6.next = 17;
          return regeneratorRuntime.awrap(user.save());

        case 17:
          return _context6.abrupt("return", res.status(200).json({
            message: 'Your password has been reset successfully.'
          }));

        case 20:
          _context6.prev = 20;
          _context6.t0 = _context6["catch"](1);
          console.error('Error resetting password:', _context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            message: 'An error occurred while resetting the password.'
          }));

        case 24:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 20]]);
}