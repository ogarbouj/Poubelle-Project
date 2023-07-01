import express from 'express'
import mongoose from 'mongoose'
import appelOffre from './routes/appelOffre.route.js'
import candidat from './routes/candidat.route.js'
import { notFoundError, errorHandler } from './middlewares/error-handler.js'


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