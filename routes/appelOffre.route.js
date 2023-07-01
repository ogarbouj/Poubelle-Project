import express from 'express'
import {createOffre, getAllOffresByEntreprise,getOffreByEntreprise, updateOffreByEntreprise,deleteOffreByEntreprise,getCandidatsSouscrits} from '../controllers/appelOffre.controller.js'
const router = express.Router()

 router
    .route('/')
    .post(createOffre)  
    .get(getAllOffresByEntreprise)

    router
    .route('/:id')
    .get(getOffreByEntreprise)
    .put(updateOffreByEntreprise)
    .delete(deleteOffreByEntreprise)

router
    .route('/:id/candidats')
    .get(getCandidatsSouscrits)
export default router;