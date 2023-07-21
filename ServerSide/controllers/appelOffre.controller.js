import Offre from "../entities/appelOffre.js";
import Candidat from "../entities/candidat.js";
import User from "../entities/user.js";

export   function createOffre(req, res) {  
  const { titre, description, dateDebut, dateFin, idUser,statut } = req.body;
  const nouvelleOffre = new Offre({
    titre,
    description,
    dateDebut,
    dateFin,
    user: [idUser],
    statut
  });

  nouvelleOffre
    .save()
    .then((offre) => {
      res.status(201).json(offre);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });     
}
export function getAllOffre(req,res){
  Offre.find()
    .select("titre description dateDebut dateFin statut")
    .then((offres) => {
      res.status(200).json(offres);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des offres" });
    });
}
export function getOffresByEntreprise(req, res) {
  const userId = req.params.idUser;

  Offre.find({ user: userId })
    .select("titre description dateDebut dateFin statut")    
    .then((offres) => {
      res.status(200).json(offres);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
export function updateOffreByUser(req, res) {
  const userId = req.params.userId;
  const offreId = req.params.offreId;
  const { titre, description, dateDebut, dateFin, statut } = req.body;

  Offre.findOneAndUpdate(
    { _id: offreId },
    { titre, description, dateDebut, dateFin, statut },
    { new: true }
  )
    .then((offre) => {
      if (offre) {
        res.status(200).json(offre);
      } else {
        res.status(404).json({ error: "Offre non trouvée" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

//#region updateOffreByEntreprise
export function updateOffre(req, res) {
  const { id } = req.params;;
  const { titre, description, dateDebut, dateFin, statut } = req.body;

  Offre.findByIdAndUpdate({_id: id}, {
    titre,
    description,
    dateDebut,
    dateFin,
    statut
  }, { new: true })
    .then((offre) => {
      if (offre) {
        res.status(200).json(offre);
      } else {
        res.status(404).json({ error: "Offre non trouvée" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region deleteOffreByEntreprise
export function deleteOffre(req, res) {
  const { id } = req.params;

  Offre.findByIdAndDelete({ _id: id})
    .then((deletedOffre) => {
      if (!deletedOffre) {
        return res.status(404).json({ error: "Offre not found" });
      }
      res.json({ message: "Offre deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
//#endregion

//#region getCandidatsSouscrits
export const getCandidatsByOffre = async (req, res) => {
  try {
    
    const offre = await Offre.findById(req.params.id);
    
    if (!offre) {
      return res.status(404).json({ message: 'Offre non trouvée' });
    }
    
    const candidats = await Candidat.find({ offres: req.params.id });
    if (candidats.length === 0) {
      return res.json({ message: 'Aucun candidat inscrit à cette offre' });
    }
    res.json(candidats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//#endregion
export function findById(req,res){
  const { id } = req.params;

  Offre.findById(id)
    
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({ message: 'AppelOffre non trouvé' });
      }

      // Obtention des candidats souscrits à l'appelOffre
      const candidats = doc.candidats;

      res.status(200).json({ appelOffre: doc, candidats });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });}