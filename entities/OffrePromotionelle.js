import mongoose from "mongoose";
const { Schema, model } = mongoose;

const offrepromotionelleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    pourcentageReduction: {
      type: Number,
      required: true,
    },

    user: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default model("offrepromotionelle", offrepromotionelleSchema);
