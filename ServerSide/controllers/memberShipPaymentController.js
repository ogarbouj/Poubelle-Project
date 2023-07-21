import Membership from "../entities/Membership.js";
import User from "../entities/user.js";
import config from "config";
import MemberShipPayment from "../entities/MemberShipPayment.js";
import MemberShipInvoice from "../entities/MemberShipInvoice.js";
import OffreRecyclage from "../entities/OffreRecyclage.js";
import axios from "axios";
import InitKonnectPaymentRequest from "../dtos/InitKonnectPaymentRequest.js";

//#region PayAsync
export async function PayAsync(req, res) {
  try {
    const membershipId = req.query.membershipId;

    const membership = await Membership.findById(membershipId).exec();
    if (!membership) return res.status(404).send("Membership not found");

    const user = await User.findById(membership.userId).exec();
    if (!user) return res.status(404).send("User not found");

    let memberShipPayment = new MemberShipPayment({
      thirdPartyPayment: "Konnect-Network",
      ThirdPartyWalletID: config.get("KonnectWalletIdKey"),
      status: "Pending",
      membershipId: membershipId,
    });

    memberShipPayment = await memberShipPayment.save();

    const paymentRequest = new InitKonnectPaymentRequest(
      config.get("KonnectWalletIdKey"),
      memberShipPayment.id,
      "Pay for recycle offer",
      membership.finalPrice,
      user.name,
      user.phone
    );

    const headers = {
      "x-api-key": config.get("KonnectApiKey"),
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      config.get("KonnectInitPaymentURI"),
      paymentRequest,
      {
        headers,
      }
    );

    const { payUrl, paymentRef } = response.data;

    console.log(`payment uri: ${payUrl}`);
    console.log(`payment ref: ${paymentRef}`);

    memberShipPayment.paymentRef = paymentRef;
    memberShipPayment.paymentURI = payUrl;

    await memberShipPayment.save();

    res.status(201).json({
      id: memberShipPayment.id,
      paymentURI: payUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
//#endregion

//#region InitPaymentAsync
export async function InitPaymentAsync(req, res) {
  try {
    const { paymentAction, paymentId } = req.body;
    let invoiceNumber = 0; 
    const membershipPayment = await MemberShipPayment.findById(
      paymentId
    ).exec();

    if (!membershipPayment)
      return res.status(404).send("Membership Payment not found");

    if (paymentAction === "Cancelled") membershipPayment.status = "Cancelled";

    const response = await axios.get(
      `${config.get("KonnectGetPaymentURIProd")}${membershipPayment.paymentRef}`
    );

    let paymentStatus = response.data.payment.status;

    // this line is only to add a fake invoice
    paymentStatus = "success";

    membershipPayment.paymentUsedMethod = response.data.payment.method;
    membershipPayment.paymentUsedType = response.data.payment.type;

    if (paymentStatus === "failed_payment") {
      membershipPayment.status = "Failed";
      await membershipPayment.save();
    } else if (paymentStatus === "success") {
      membershipPayment.status = "Success";
      membershipPayment.date = Date.now();

      const membership = await Membership.findById(
        membershipPayment.membershipId
      ).exec();
      if (!membership) return res.status(404).send("Membership not found");

      const tvaPerPercent = 19;
      const tax = (membership.finalPrice / 100) * tvaPerPercent;

      const lastInvoice = await MemberShipInvoice.findOne()
        .sort({ invoiceNumber: "desc" }) // Use "desc" instead of "asc"
        .exec();

      let tranferFee = 0;

      const recycleOffer = await OffreRecyclage.findById(
        membership.offreRecyclagId
      ).exec();
      if (!recycleOffer) return res.status(404).send("Recycle Offer not found");

      const user = await User.findById(membership.userId).exec();
      if (!user) return res.status(404).send("User not found");

      tranferFee = membership.finalPrice - recycleOffer.price;

      invoiceNumber = lastInvoice ? lastInvoice.invoiceNumber + 1 : 1;

      const invoice = new MemberShipInvoice({
        description: "Payment of recycle offer",
        tvaPerPercent: tvaPerPercent,
        transferFee: tranferFee,
        tax: tax,
        totalPrice: membership.finalPrice,
        clientName: user.name,
        invoiceNumber: invoiceNumber,
        userId: membership.userId,
      });

      await invoice.save();

      await membershipPayment.save();
    } else {
      await membershipPayment.save();
    }

    res.status(200).json({
      id: membershipPayment.id,
      date: membershipPayment.date,
      status: membershipPayment.status,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
//#endregion

//#region GetAllAsync
export async function GetAllAsync(req, res) {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to a page size of 10 if not provided

    const totalCount = await MemberShipPayment.countDocuments();

    let totalPages = Math.ceil(totalCount / pageSize);

    const payments = await MemberShipPayment.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .exec();

    // Cast memberships to DTO or custom format
    const castedPayments = payments.map((payment) => {
      return {
        id: payment.id,
        thirdPartyPayment: payment.thirdPartyPayment,
        thirdPartyWalletID: payment.thirdPartyWalletID,
        paymentUsedType: payment.paymentUsedType,
        paymentUsedMethod: payment.paymentUsedMethod,
        status: payment.status,
      };
    });

    res.status(200).send({
      payments: castedPayments,
      pageNumber,
      pageSize,
      totalCount,
      totalPages,
    });
  } catch (err) {
    res.status(500).send(err);
  }
}
//#endregion

//#region GetByIdAsync
export async function GetByIdAsync(req, res) {
  try {
    const paymentId = req.params.id;

    const payment = await MemberShipPayment.findById(paymentId).exec();
    if (!payment) return res.status(404).send("Membership payment not found");

    const membership = await Membership.findById(payment.membershipId).exec();
    if (!membership) return res.status(404).send("Membership not found");

    const invoice = await MemberShipInvoice.findById(payment.invoiceId).exec();

    res.json({
      payment: {
        id: payment.id,
        createdAt: payment.createdAt,
        thirdPartyPayment: payment.thirdPartyPayment,
        thirdPartyWalletID: payment.thirdPartyWalletID,
        paymentURI: payment.paymentURI,
        paymentRef: payment.paymentRef,
        paymentUsedType: payment.paymentUsedType,
        paymentUsedMethod: payment.paymentUsedMethod,
        status: payment.status,
        invoiceId: payment.invoiceId,
        isInvoiceExist: !invoice,
      },
      membership: {
        id: payment.membershipId,
        createdAt: membership.createdAt,
        finalPrice: membership.finalPrice,
      },
    });
  } catch (err) {
    res.status(500).send(err);
  }
}
//#endregion
