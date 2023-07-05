import mongoose from "mongoose";

const { Schema, model } = mongoose;

const memberShipPaymentSchema = new Schema({
  date: {
    type: Date,
    required: true,
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
  statut: {
    type: String,
    enum: [ 'None', 'Pending', 'Success', 'Cancelled', 'Failed' ],
    default: 'None'
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
