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
  priceHT: {
    type: Number,
    require: true,
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
  date: {
    type: Date,
    require: false,
  },
});

export default model("MemberShipInvoice", memberShipInvoiceSchema);
