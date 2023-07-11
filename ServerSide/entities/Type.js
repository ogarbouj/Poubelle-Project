import mongoose from "mongoose";


const { Schema, model } = mongoose;

const TypeSchema = new Schema({

    nom: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

})

export default model('Type', TypeSchema);