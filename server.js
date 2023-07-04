import express from 'express'
import mongoose from 'mongoose'
import appelOffre from './routes/appelOffre.route.js'
import candidat from './routes/candidat.route.js'
import { notFoundError, errorHandler } from './middlewares/error-handler.js'

//#region Declaration packages
const debug = require("debug");
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const config = require("config");
const app = express();

import TypeRoutes from './routes/Type.js';
import PoubelleRoute from './routes/Poubelle.js';
import ZoneRoutes from './routes/Zone.js';



// Préfixe de route et débit pour les routes Type
app.use('/types', TypeRoutes);

// Préfixe de route et débit pour les routes Zone
app.use('/zones', ZoneRoutes);

// Préfixe de route et débit pour les routes Poubelle
app.use('/poubelles', PoubelleRoute);
//#endregion


const app = express()
const hostname = '127.0.0.1'
const port = process.env.PORT||9090
const dataBase = "newProject"



mongoose
 .connect(`mongodb://127.0.0.1:27017/${dataBase}`)
 .then(()=>{
    console.log(`Connected to Database ${dataBase}`)
 })
 .catch(err=>{
    console.log(err)
 })

 app.use(express.json());
 app.use('/appelOffre',appelOffre)
 app.use('/candidat',candidat)
 // Utiliser le middleware de routes introuvables
app.use(notFoundError);
// Utiliser le middleware gestionnaire d'erreurs
app.use(errorHandler);

 

 app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})