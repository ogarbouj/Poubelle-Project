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
  numéro: {
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
},
{
  timestamps: true
});

const Candidat = model('Candidat', candidatSchema);

export default Candidat;