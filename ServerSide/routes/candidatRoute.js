import express from 'express'
import {createCandidat,getAllCandidats,updateCandidat,deleteCandidat, getCandidatByRecycleur} from '../controllers/candidat.controller.js'

const router = express.Router()

router
  .route('/')
  .post(createCandidat)
  .get(getAllCandidats)

router
  .route('/:userId')
  .get(getCandidatByRecycleur)// Route pour obtenir une candidature par son identifiant et le recycleur
  /*.put(updateCandidatureByRecycleur)// Route pour mettre à jour une candidature par son identifiant et le recycleur
  .delete(deleteCandidatureByRecycleur)// Route pour supprimer une candidature par son identifiant et le recycleur

router
  .route('/:recycleurId')
  .get(getAllCandidaturesByRecycleur)// Route pour obtenir toutes les candidatures par recycleur
  router
  .route('/users/:id/candidats')
  .get(getCandidatByRecycleur)*/
  router
  .route('/:id')
  .put(updateCandidat)
  .delete(deleteCandidat)

export default router;