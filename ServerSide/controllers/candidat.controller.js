import Candidat from "../entities/candidat.js";
import User from "../entities/user.js"
import nodemailer from "nodemailer";

//#region createCandidat
export function createCandidat(req, res) {
  const { nom, email, numero, idAppelOffre, idUser, statut} = req.body;

  Candidat.findOne({ user: idUser })
    .then((existingCandidat) => {
      if (existingCandidat) {
        return res.status(400).json({ error: 'Le candidat existe déjà' });
      }

      const candidat = new Candidat({
        nom,
        email,
        numero,
        offres: [idAppelOffre],
        user: [idUser], 
        statut,       
      });

      candidat
        .save()
        .then((candidat) => {
          const emailDestinataire = candidat.email;
          sendNotificationEmail(candidat, emailDestinataire);
          res.status(201).json(candidat);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region sendNotificationEmail
// Fonction pour envoyer un e-mail de notification
function sendNotificationEmail(candidat, emailDestinataire) {
  // Configurer le transporteur de messagerie
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "solutionewaste1@gmail.com",
      pass: "jmqyonhfljspelcz",
    },
  });

  // Préparer le contenu de l'e-mail
  const mailOptions = {
    from: "solutionewaste1@gmail.com",
    to: emailDestinataire,
    subject: "Confirmation de candidature",
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
        <h1 style="color: red">Bonjour ${candidat.nom},</h1>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          Nous avons bien reçu votre candidature. Merci de votre intérêt.
        </p>
      </div> 
    `,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(
        "Erreur lors de l'envoi de l'e-mail de notification:",
        error
      );
    } else {
      console.log("E-mail de notification envoyé:", info.response);
    }
  });
}
//#endregion


export function getAllCandidats(req, res) {  
  Candidat
    .find()    
    .select("nom email numero offres user statut")
    .populate('offres')
    .then((candidats) => {
      res.json(candidats);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region getCandidatureByRecycleur
export function getCandidatByRecycleur(req, res) {
  const userId = req.params.userId;

  Candidat.find({ user: userId })
    .select("nom email numero offres user statut")
    .then((candidat) => {
      /*if (!candidat) {
        return res.status(404).json({ error: "Candidat not found" });
      }*/
      res.json(candidat);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region updateCandidatureByRecycleur
export function updateCandidat(req, res) {
  const candidatId = req.params.id;
  const { nom, email, numero, statut } = req.body;

  Candidat.findByIdAndUpdate(candidatId, { nom, email, numero, statut }, { new: true })
    .then((candidat) => {
      if (candidat) {
        res.status(200).json(candidat);
      } else {
        res.status(404).json({ error: "Candidat non trouvé" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region deleteCandidatureByRecycleur
export function deleteCandidat(req, res) {
  const candidatId = req.params.id;

  Candidat.findByIdAndDelete(candidatId)
    .then((candidat) => {
      if (candidat) {
        res.status(200).json({ message: "Candidat supprimé avec succès" });
      } else {
        res.status(404).json({ error: "Candidat non trouvé" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion
