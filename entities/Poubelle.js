import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PoubelleSchema = new Schema({
  idType: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
    required: true,
  },
  idZone: {
    type: Schema.Types.ObjectId,
    ref: 'Zone',
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  capacite: {
    type: Number,
    required: true,
  },
  taille: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: true,
  },
});

export default model('Poubelle', PoubelleSchema);
