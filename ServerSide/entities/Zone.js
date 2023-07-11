import mongoose from "mongoose";


const { Schema, model } = mongoose;

const ZoneSchema = new Schema({


    nom: {
        type: String,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
})

export default model('Zone', ZoneSchema);
 
 /*
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ZoneSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

// Création de l'index géospatial pour le champ location
ZoneSchema.index({ location: "2dsphere" });

export default model("Zone", ZoneSchema);*/
