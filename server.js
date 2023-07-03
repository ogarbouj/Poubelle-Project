/*
 * you can run the project by simply typing this command below!
 * nodemon server.js
 */

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

//#region middlewares
app.use(express.json());
app.use(express.static("public"));

if (app.get("env") === "development") {
  // morgan is a loggin middleware
  app.use(morgan("dev"));
  debug("Morgan Enabled");
}

//#endregion

// custom middlewares
// if you have any custome middlewares, please put it here



mongoose
  .connect(config.get('DatabaseConnectionString'))
  .then(() => debug('Connected to MongoDB database'))
  .catch((err) => debug(`Could not connect to the database`, err));

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App Name: ${config.get("API_Name")}`);
  console.log(`Listening on port ${port}`);
});
