import { validationResult } from "express-validator";
import offrepromotionelle from "../entities/OffrePromotionelle.js";

//#region getAll
export function getAll(req, res) {
  offrepromotionelle
    .find({})
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          id: docs[i]._id,
          title: docs[i].title,
          pourcentageReduction: docs[i].pourcentageReduction,
          type: docs[i].type,
          user: docs[i].user,
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
    offrepromotionelle
      .create({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        pourcentageReduction: req.body.pourcentageReduction,
        user: req.body.iduser,
      })
      .then((newGame) => {
        res.status(200).json({
          title: newGame.title,
          description: newGame.description,
          type: newGame.type,
          pourcentageReduction: newGame.pourcentageReduction,
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
  offrepromotionelle
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
  offrepromotionelle
  .findOneAndRemove({ _id: req.params.id })
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
  console.log("req.params.id")
    let newGame = {
    title: req.body.title,
    description: req.body.description,
    pourcentageReduction: req.body.pourcentageReduction,
    type: req.body.type,
    user: req.body.iduser,
  };

  offrepromotionelle
    .findByIdAndUpdate(req.params.id, newGame)
    .then((doc1) => {
      offrepromotionelle
        .findById(req.params.id)
        .then((doc2) => {
         return res.status(200).json(doc2);
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
