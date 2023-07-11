import mongoose from "mongoose";

const paymentStatusEnum = Object.freeze({
  None: "None",
  Pending: "Pending",
  Success: "Success",
  Cancelled: "Cancelled",
  Failed: "Failed",
});

const { Schema, model } = mongoose;

const memberShipPaymentSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    require: true
  },
  thirdPartyPayment:{
    type: String, 
    require: false
  }, 
  thirdPartyWalletID:{
    type: String, 
    require: false
  }, 
  paymentURI:{
    type: String, 
    require: true
  }, 
  paymentRef:{
    type: String, 
    require: false
  }, 
  paymentUsedType:{
    type: String, 
    require: false
  }, 
  paymentUsedMethod:{
    type: String, 
    require: false
  }, 
  status: {
    type: String,
    enum: Object.values(paymentStatusEnum),
    default: paymentStatusEnum.None,
  },
  membershipId: {
    type: Schema.Types.ObjectId,
    ref: 'Membership',
    required: true
  },
  invoiceId: {
    type: Schema.Types.ObjectId,
    ref: 'InvoiceServiceProvided',
    required: false
  },
});

export default model("MemberShipPayment", memberShipPaymentSchema);
