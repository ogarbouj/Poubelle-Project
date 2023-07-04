import Offre from "../models/appelOffre.model.js";
import Candidat from "../models/candidat.model.js";


export function createOffre(req, res) {
    const { titre, description, dateDebut, dateFin } = req.body;
    const { entreprise } = req.user;
    
    const nouvelleOffre = new Offre({
      titre,
      description,
      dateDebut,
      dateFin,
      entreprise // Associer l'ID de l'entreprise à l'appel d'offre
    });
  
    nouvelleOffre.save()
      .then((offreCreee) => {
        res.status(201).json(offreCreee);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Erreur lors de la création de l\'offre' });
      });
  }
  export function getAllOffresByEntreprise(req, res) {
    const { entreprise } = req.user;
  Offre
    .find({ entreprise })
    .select('titre description dateDebut dateFin')
    .then((offres) => {
      res.status(200).json(offres);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Erreur lors de la récupération des offres' });
    });
}
export function getOffreByEntreprise(req, res) {
  const { id } = req.params;
  const { entreprise } = req.user; // Récupérer l'ID de l'entreprise à partir de l'utilisateur authentifié


  Offre
    .findById({ _id: id, entreprise })
    .select('titre description dateDebut dateFin')
    .then((offre) => {
      if (!offre) {
        return res.status(404).json({ error: 'Offre not found' });
      }
      res.json(offre);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
export function updateOffreByEntreprise(req, res) {
  const { entreprise } = req.user;
  const { id } = req.params;
  const { titre, description, dateDebut, dateFin } = req.body;

  // Vérifier si l'entreprise est autorisée à mettre à jour cette offre
 Offre.findOneAndUpdate(
  { _id: id, entreprise }, // Ajouter la condition de recherche pour l'entreprise
  { titre, description, dateDebut, dateFin, statut },
  { new: true }
)
  .then((updatedOffre) => {
    if (!updatedOffre) {
      return res.status(404).json({ error: 'Offre not found' });
    }
    res.json(updatedOffre);
  })
  .catch((error) => {
    res.status(500).json({ error: error.message });
  });
}
export function deleteOffreByEntreprise(req, res) {
  const { id } = req.params;
  const { entreprise } = req.user;

  Offre.findByIdAndDelete({_id: id, entreprise})
    .then((deletedOffre) => {
      if (!deletedOffre) {
        return res.status(404).json({ error: 'Offre not found' });
      }
      res.json({ message: 'Offre deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
export const getCandidatsSouscrits = async (req, res) => {
    try {
      const { id } = req.params;
      const offre = await Offre.findById(id);
      
      if (!offre) {
        return res.status(404).json({ message: 'Offre non trouvée' });
      }
      
      const candidats = await Candidat.find({ offres: id });
      if (candidats.length === 0) {
        return res.json({ message: 'Aucun candidat inscrit à cette offre' });
      }
      res.json(candidats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };