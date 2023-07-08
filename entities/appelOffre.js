import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const offreSchema = new Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateDebut: {
    type: Date,
    required: true
  },
  dateFin: {
    type: Date,
    required: true
  },
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
}

);

const Offre = model('Offre', offreSchema);

export default Offre;