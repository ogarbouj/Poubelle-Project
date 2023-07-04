import Zone from "../entities/Zone.js";

import mongoose from 'mongoose';

import axios from 'axios';

import googlemaps from 'googlemaps';











// Create a new zone
export function createZone(req, res) {
  const { nom, latitude, longitude } = req.body;

  const nouvelleZone = new Zone({
    nom,
    latitude,
    longitude,
  });

  nouvelleZone.save()
    .then((zone) => {
      res.status(201).json(zone);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Get all zones
export function getAllZones(req, res) {
  Zone.find()
    .then((zones) => {
      res.status(200).json(zones);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Get a zone by ID
export function getZoneById(req, res) {
  const zoneId = req.params.id;

  Zone.findById(zoneId)
    .then((zone) => {
      if (!zone) {
        return res.status(404).json({ message: 'Zone not found' });
      }
      res.status(200).json(zone);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

// Update a zone
export function updateZone(req, res) {
  const zoneId = req.params.id;
  const { nom, latitude, longitude } = req.body;

  Zone.findByIdAndUpdate(zoneId, { nom, latitude, longitude }, { new: true })
    .then((zone) => {
      if (!zone) {
        return res.status(404).json({ message: 'Zone not found' });
      }
      // Renvoyer le document mis à jour à la base de données
      return zone.save();
    })
    .then((updatedZone) => {
      res.status(200).json(updatedZone);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}


// Delete a zone
export function deleteZone(req, res) {
  const zoneId = req.params.id;

  Zone.findByIdAndRemove(zoneId)
    .then((zone) => {
      if (!zone) {
        return res.status(404).json({ message: 'Zone not found' });
      }
      res.status(200).json({ message: 'Zone deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}





/*

export function findZonesNearby(req, res) {
  const { latitude, longitude, radius } = req.query;

  // Vérification des paramètres requis
  if (!latitude || !longitude || !radius) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }
  // Conversion des valeurs en nombres
  const lat = parseFloat(latitude); // Conserver en tant que float
  const lng = parseFloat(longitude);
  const rad = parseFloat(radius);

  // Requête de recherche des zones à proximité
  Zone.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: [lng, lat], // L'ordre est [longitude, latitude]
        },
        $maxDistance: rad, // En mètres
      },
    },
  })
    .then((zones) => {
      res.json(zones);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}*/

export function findZonesNearby(req, res) {
  const { latitude, longitude, radius } = req.query;

  // Vérification des paramètres requis
  if (!latitude || !longitude || !radius) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }

  // Conversion des valeurs en nombres
  const lat = parseFloat(latitude); // Convertir en nombre à virgule flottante
  const lng = parseFloat(longitude);
  const rad = parseFloat(radius);

  // Requête de recherche des zones à proximité
  Zone.find({
    latitude: { $ne: null }, // S'assurer que la latitude n'est pas nulle
    longitude: { $ne: null }, // S'assurer que la longitude n'est pas nulle
    location: {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: [lng, lat], // L'ordre est [longitude, latitude]
        },
        $maxDistance: rad, // En mètres
      },
    },
  })
    .then((zones) => {
      res.json(zones);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}









export function addZoneWithCoordinates(req, res) {
  const { nom, adresse } = req.body;

  // Utilisez l'API de géocodage pour obtenir les coordonnées de latitude et de longitude
  const geocodingUrl = `https://api.service-de-geocodage.com/geocode?address=${adresse}`;
  
  axios.get(geocodingUrl)
    .then((response) => {
      const { latitude, longitude } = response.data;

      // Créez une nouvelle zone avec les coordonnées obtenues
      const nouvelleZone = new Zone({
        nom,
        latitude,
        longitude,
      });

      // Enregistrez la zone dans la base de données
      nouvelleZone.save()
        .then((zone) => {
          res.status(201).json(zone);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

