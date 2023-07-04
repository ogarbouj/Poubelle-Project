import mongoose from "mongoose";

const { Schema, model } = mongoose;

const memberShipSchema = new Schema({
  date: {
    type: Date,
    require: false,
    default: Date.UTC
  },
  finalPrice: {
    type: Number,
    require: false,
  },
  membership: {
    type: Schema.Types.ObjectId,
    ref: "MemberShipPayment",
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Membership", memberShipSchema);
