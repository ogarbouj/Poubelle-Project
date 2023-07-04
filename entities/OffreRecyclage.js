import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const  offrerecyclageSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        
        price: {
            type: Number,
            required: true
        },

       ListePoublelle: [{ type: mongoose.Types.ObjectId, ref: "Poubelle"}] 
     
    },
    {
        timestamps: true
    }
);

export default model('offrerecyclage',  offrerecyclageSchema);