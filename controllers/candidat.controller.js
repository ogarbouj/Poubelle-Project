import Candidat from "../entities/candidat.js";
import nodemailer from "nodemailer";

//#region createCandidat
export function createCandidat(req, res) {
  const { nom, email, numéro, idAppelOffre, idRecycleur } = req.body;
  const candidat = new Candidat({
    nom,
    email,
    numéro,
    offres: [idAppelOffre],
    recycleur: idRecycleur,
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

//#region getAllCandidaturesByRecycleur
export function getAllCandidaturesByRecycleur(req, res) {
  const recycleurId = req.params.recycleurId;
  Candidat.find({ recycleur: recycleurId })
    .populate("offres")
    .select("nom email numéro offres")
    .then((candidats) => {
      res.json(candidats);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region getCandidatureByRecycleur
export function getCandidatureByRecycleur(req, res) {
  const { id } = req.params;
  const { recycleur } = req.user;
  Candidat.findById({ _id: id, recycleur })
    .select("nom email numéro offres")
    .then((candidat) => {
      if (!candidat) {
        return res.status(404).json({ error: "Candidat not found" });
      }
      res.json(candidat);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region updateCandidatureByRecycleur
export function updateCandidatureByRecycleur(req, res) {
  const { recycleur } = req.user;
  const { id } = req.params;
  const { nom, email, numéro } = req.body;

  Candidat.findByIdAndUpdate(
    { _id: id, recycleur },
    { nom, email, numéro },
    { new: true }
  )
    .then((updatedCandidat) => {
      if (!updatedCandidat) {
        return res.status(404).json({ error: "Candidat not found" });
      }
      res.json(updatedCandidat);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region deleteCandidatureByRecycleur
export function deleteCandidatureByRecycleur(req, res) {
  const { id } = req.params;
  const { recycleur } = req.user;

  Candidat.findByIdAndDelete({ _id: id, recycleur })
    .then((deletedCandidat) => {
      if (!deletedCandidat) {
        return res.status(404).json({ error: "Candidat not found" });
      }
      res.json({ message: "Candidat deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion
