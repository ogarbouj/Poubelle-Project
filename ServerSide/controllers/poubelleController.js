import Poubelle from "../entities/Poubelle.js";


import Zone from "../entities/Zone.js";
import Type from "../entities/Type.js";


export function createPoubelle(req, res) {
    const { idType, idZone, nom, capacite, taille, statut } = req.body;
  
    // Vérifier si les clés étrangères existent
    Promise.all([
      Type.exists({ _id: idType }),
      Zone.exists({ _id: idZone })
    ])
      .then(([typeExists, zoneExists]) => {
        if (!typeExists) {
          return res.status(404).json({ message: 'Type not found' });
        }
        if (!zoneExists) {
          return res.status(404).json({ message: 'Zone not found' });
        }
  
        const nouvellePoubelle = new Poubelle({
          idType,
          idZone,
          nom,
          capacite,
          taille,
          statut
        });
  
        nouvellePoubelle.save()
          .then((poubelle) => {
            res.status(201).json(poubelle);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }


  export function getPoubelleById(req, res) {
    const poubelleId = req.params.id;
  
    Poubelle.findById(poubelleId)
      .populate('idType', '_id nom')  // Include _id and nom
      .populate('idZone', '_id nom')  // Include _id and nom
      .lean()
      .exec()
      .then((poubelle) => {
        if (!poubelle) {
          return res.status(404).json({ message: 'Poubelle not found' });
        }
  
        const { _id, idType, idZone, ...rest } = poubelle;
        const transformedPoubelle = {
          ...rest,
          idType: idType,
          idZone: idZone,
        };
  
        res.status(200).json(transformedPoubelle);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
  
  

  export function updatePoubelle(req, res) {
    const poubelleId = req.params.id;
    const { nom, capacite, taille, statut } = req.body;
  
    Poubelle.findById(poubelleId)
      .then((poubelle) => {
        if (!poubelle) {
          return res.status(404).json({ message: 'Poubelle not found' });
        }
  
        poubelle.nom = nom;
        poubelle.capacite = capacite;
        poubelle.taille = taille;
        poubelle.statut = statut;
  
        return poubelle.save();
      })
      .then((updatedPoubelle) => {
        res.status(200).json(updatedPoubelle);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
  
  export function deletePoubelle(req, res) {
    const poubelleId = req.params.id;
  
    Poubelle.findByIdAndRemove(poubelleId)
      .then((poubelle) => {
        if (!poubelle) {
          return res.status(404).json({ message: 'Poubelle not found' });
        }
        res.status(200).json({ message: 'Poubelle deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });


      
  }


  export function getAllPoubelles(req, res) {
    Poubelle.find()
      .populate({
        path: 'idType',
        select: { _id: 0, nom: 1 }
      })
      .populate({
        path: 'idZone',
        select: { _id: 0, nom: 1 }
      })
      .select('-__v')
      .exec()
      .then((poubelles) => {
        const formattedPoubelles = poubelles.map((poubelle) => ({
          _id: poubelle._id,
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          type: poubelle.idType,
          zone: poubelle.idZone,
        }));
        res.status(200).json(formattedPoubelles);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }


  export function getPoubellesByType(req, res) {
    const typeId = req.params.typeId;
  
    Poubelle.find({ idType: typeId })
      .populate({
        path: 'idType',
        select: { _id: 0, nom: 1 },
      })
      .populate({
        path: 'idZone',
        select: { _id: 0, nom: 1 },
      })
      .select('-__v')
      .exec()
      .then((poubelles) => {
        const formattedPoubelles = poubelles.map((poubelle) => ({
          _id: poubelle._id,
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          type: poubelle.idType,
          zone: poubelle.idZone,
        }));
        res.status(200).json(formattedPoubelles);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
  

  export function getPoubellesByZone(req, res) {
    const zoneId = req.params.zoneId;
  
    Poubelle.find({ idZone: zoneId })
      .populate({
        path: 'idType',
        select: { _id: 0, nom: 1 },
      })
      .populate({
        path: 'idZone',
        select: { _id: 0, nom: 1 },
      })
      .select('-__v')
      .exec()
      .then((poubelles) => {
        const formattedPoubelles = poubelles.map((poubelle) => ({
          _id: poubelle._id,
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          type: poubelle.idType,
          zone: poubelle.idZone,
        }));
        res.status(200).json(formattedPoubelles);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
  

  export function sortPoubellesByTaille(req, res) {
    const sortBy = req.query.sortBy; // Paramètre de tri
  
    let sortOption;
    if (sortBy === 'asc') {
      sortOption = { capacite: 1 }; // Tri ascendant
    } else if (sortBy === 'desc') {
      sortOption = { capacite: -1 }; // Tri descendant
    } else {
      return res.status(400).json({ message: 'Invalid sort option' });
    }
  
    Poubelle.find()
      .populate({
        path: 'idType',
        select: { _id: 0, nom: 1 },
      })
      .populate({
        path: 'idZone',
        select: { _id: 0, nom: 1 },
      })
      .select('-__v')
      .sort(sortOption)
      .exec()
      .then((poubelles) => {
        const formattedPoubelles = poubelles.map((poubelle) => ({
          _id: poubelle._id,
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          type: poubelle.idType,
          zone: poubelle.idZone,
        }));
        res.status(200).json(formattedPoubelles);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }

  export function searchPoubelles(req, res) {
    const { nom, capacite, taille, statut } = req.query;
    
    const searchCriteria = {};
  
    // Vérification des critères de recherche et ajout des filtres
    if (nom) {
      searchCriteria.nom = { $regex: new RegExp(nom, 'i') };
    }
    if (capacite) {
      searchCriteria.capacite = capacite;
    }
    if (taille) {
      searchCriteria.taille = { $regex: new RegExp(taille, 'i') };
    }
    if (statut) {
      searchCriteria.statut = { $regex: new RegExp(statut, 'i') };
    }
  
    Poubelle.find(searchCriteria)
      .populate({
        path: 'idType',
        select: { _id: 0, nom: 1 },
      })
      .populate({
        path: 'idZone',
        select: { _id: 0, nom: 1 },
      })
      .select('-__v')
      .exec()
      .then((poubelles) => {
        const formattedPoubelles = poubelles.map((poubelle) => ({
          _id: poubelle._id,
          nom: poubelle.nom,
          capacite: poubelle.capacite,
          taille: poubelle.taille,
          statut: poubelle.statut,
          type: poubelle.idType,
          zone: poubelle.idZone,
        }));
        res.status(200).json(formattedPoubelles);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
  

  
  
  