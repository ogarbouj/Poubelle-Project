
class InitKonnectPaymentRequest {
  constructor(konnectWalletId, paymentId, description, amount, name, phoneNumber) {
    this.receiverWalletId = konnectWalletId;
    this.description = description;
    this.amount = amount * 1000;
    this.type = "immediate";
    this.lifespan = 30;
    this.token = "TND";
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = "test@test.test";
    this.orderId = paymentId.toString();

    this.acceptedPaymentMethods = [
      "bank_card",
      "wallet",
      "e-DINAR",
      //"wire_transfer",
      "flouci"
    ];
  }
}

export default InitKonnectPaymentRequest;