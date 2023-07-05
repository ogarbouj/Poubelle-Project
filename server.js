/*
 * you can run the project by simply typing this command below!
 * nodemon server.js
 */

//#region Import Packages Section
import express from "express";
import mongoose from "mongoose";
import appelOffre from "./routes/appelOffreRoute.js";
import candidat from "./routes/candidatRoute.js";
import { notFoundError, errorHandler } from "./middlewares/error-handler.js";
import TypeRoutes from "./routes/typeRoute.js";
import PoubelleRoute from "./routes/poubelleRoute.js";
import ZoneRoutes from "./routes/zoneRoute.js";
import config from "config";
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from "./routes/userRoute.js"
import OffrePromotionelleRoutes from './routes/offrePromotionelleRoute.js';
import OffrerecyclageRoutes from './routes/offreRecyclageRoute.js';
import dotenv from "dotenv";

//#endregion

dotenv.config({path : "./config/.env"});

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

 
//#region Init DataBase Connection Section
mongoose
  .connect(config.get('DatabaseConnectionString'))
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log(`Could not connect to the database`, err);
  });
//#endregion

//#region Init Routes Section
app.use("/types", TypeRoutes);
app.use("/zones", ZoneRoutes);
app.use("/poubelles", PoubelleRoute);

app.use("/appelOffre", appelOffre);
app.use("/candidat", candidat);

app.use('/OffrePromotionelle', OffrePromotionelleRoutes);
app.use('/Offrerecyclage', OffrerecyclageRoutes );
app.use("/user",userRoutes);
//#endregion

app.use(notFoundError);
app.use(errorHandler);

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Name: ${config.get('API_Name')}`);
  console.log(`Listening on port ${port}`);
});