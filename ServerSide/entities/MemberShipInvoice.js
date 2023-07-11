import mongoose from "mongoose";

const { Schema, model } = mongoose;

const memberShipInvoiceSchema = new Schema({
  invoiceNumber: {
    type: Number,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },
  tvaPerPercent: {
    type: Number,
    require: false,
  },
  transferFee: {
    type: Number,
    require: true,
  },
  tax: {
    type: Number,
    require: false,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  clientName: {
    type: String,
    require: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    require: false
  },
});

export default model("MemberShipInvoice", memberShipInvoiceSchema);
