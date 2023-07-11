import { validationResult } from "express-validator";

import offrerecyclage from "../entities/OffreRecyclage.js";
import nodemailer from "nodemailer";

//#region getAll
export function getAll(req, res) {
  let list = offrerecyclage
    .find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          id: docs[i]._id,
          title: docs[i].title,
          type: docs[i].type,
          price: docs[i].price,
          ListePoublelle: docs[i].ListePoublelle,
        });
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
//#endregion

//#region addOnce
export function addOnce(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json({ errors: validationResult(req).array() });
  } else {
    offrerecyclage
      .create({
        title: req.body.title,
        type: req.body.type,
        price: req.body.price,
        ListePoublelle: req.body.ListePoublelle,
      })
      .then((newGame) => {
        res.status(200).json({
          title: newGame.title,
          type: newGame.type,
          price: newGame.price,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
}
//#endregion

//#region getOnce
export function getOnce(req, res) {
  offrerecyclage
    .findById(req.params.id)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
//#endregion

//#region deleteOnce
export function deleteOnce(req, res) {
  offrerecyclage
    .findOneAndRemove({ id: req.params.id })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
//#endregion

//#region putOnce
export function putOnce(req, res) {
  let newGame = {
    title: req.body.title,
    price: req.body.price,
    type: req.body.type,
    ListePoublelle: req.body.ListePoublelle,
  };
  offrerecyclage
    .findByIdAndUpdate(req.params.id, newGame)
    .then((doc1) => {
      offrerecyclage
        .findById(req.params.id)
        .then((doc2) => {
          res.status(200).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
//#endregion

//#region rechercherMot2
export function rechercherMot2(req, res) {
  const motRecherche = req.params.mot;

  let list = offrerecyclage
    .find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        if (
          docs[i].title.indexOf(motRecherche + "") >= 0 ||
          docs[i].type.indexOf(motRecherche + "") >= 0 ||
          docs[i].price.toString().indexOf(motRecherche + "") >= 0
        ) {
          list.push({
            id: docs[i]._id,
            title: docs[i].title,
            type: docs[i].type,
            price: docs[i].price,
            ListePoublelle: docs[i].ListePoublelle,
          });
        }
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
//#endregion

//#region addOnceMail
export function addOnceMail(req, res) {
  offrerecyclage
    .create({
      title: req.body.title,
      type: req.body.type,
      price: req.body.price,
      ListePoublelle: req.body.ListePoublelle,
    })
    .then((newGame) => {
      const recipient = ["najarmohamed@live.fr"];
      const subject = "New Product Added";
      const body = `A new product has been added`;
      sendEmail(recipient, subject, body);
      res.status(200).json({
        title: newGame.title,
        type: newGame.type,
        price: newGame.price,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
//#endregion

//#region sendEmail
function sendEmail(recipient, subject, body) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //
    port: 587,
    auth: {
      user: "mhamed.najar@esprit.tn", // Your Ethereal Email address
      pass: "212SMT2576", // Your Ethereal Email password
    },
  });
  const mailOptions = {
    from: "mhamed.najar@esprit.tn",
    to: recipient,
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
//#endregion
