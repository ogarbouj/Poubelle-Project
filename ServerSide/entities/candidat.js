import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const candidatSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  offres: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Offre',
    },
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],  
  statut: {
    type: String,
    enum: ['En attente', 'Approuvé', 'Rejeté'],
    default: 'En attente'
  }
},
{
  timestamps: true
});

const Candidat = model('Candidat', candidatSchema);

export default Candidat;