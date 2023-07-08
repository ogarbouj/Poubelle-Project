import mongoose from "mongoose";

const { Schema, model } = mongoose;

const memberShipSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: false
  },
  finalPrice: {
    type: Number,
    require: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  offreRecyclagId: {
    type: Schema.Types.ObjectId,
    ref: "offrerecyclage",
    required: true,
  },
});

export default model("Membership", memberShipSchema);
