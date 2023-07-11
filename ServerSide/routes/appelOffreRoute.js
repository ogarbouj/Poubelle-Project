import express from 'express'

import {createOffre,getAllOffre,getOffresByEntreprise,updateOffre,deleteOffre,getCandidatsByOffre,findById} from '../controllers/appelOffre.controller.js'
const router = express.Router()

 router
    .route('/')
    .post(createOffre)  
    .get(getAllOffre)

   

router
    .route('/:id/candidats')
    .get(getCandidatsByOffre)
router
    .route('/users/:id/offres')
    .get(getOffresByEntreprise)
router
    .route('/:id')
    .put(updateOffre)
    .delete(deleteOffre)
    //.get(findById)
router
 .route('/:id')
 .get(findById)
export default router;