import express from 'express'
import {createCandidat, getAllCandidaturesByRecycleur,getCandidatureByRecycleur,updateCandidatureByRecycleur,deleteCandidatureByRecycleur} from '../controllers/candidat.controller.js'

const router = express.Router()

router
  .route('/')
  .post(createCandidat)

router
  .route('/:id')
  .get(getCandidatureByRecycleur)// Route pour obtenir une candidature par son identifiant et le recycleur
  .put(updateCandidatureByRecycleur)// Route pour mettre à jour une candidature par son identifiant et le recycleur
  .delete(deleteCandidatureByRecycleur)// Route pour supprimer une candidature par son identifiant et le recycleur

router
  .route('/:recycleurId')
  .get(getAllCandidaturesByRecycleur)// Route pour obtenir toutes les candidatures par recycleur


export default router;