import MemberShipInvoice from "../entities/MemberShipInvoice.js";

//#region GetAllAsync
export async function GetAllAsync(req, res) {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to a page size of 10 if not provided

    const totalCount = await MemberShipInvoice.countDocuments();

    let totalPages = Math.ceil(totalCount / pageSize);

    const invoices = await MemberShipInvoice.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .exec();

    const castedInvoices = invoices.map((invoice) => {
      return {
        id: invoice.id,
        invoiceNumber: invoice.invoiceNumber,
        totalPrice: invoice.totalPrice,
        clientName: invoice.clientName,
        createdAt: invoice.createdAt,
      };
    });


    res.status(200).send({
        invoices: castedInvoices,
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
    const invoiceId = req.params.id;

    const invoice = await MemberShipInvoice.findById(invoiceId).exec();
    if (!invoice) return res.status(404).send("Membership payment not found");

    res.json({
      id: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      description: invoice.description,
      tvaPerPercent: invoice.tvaPerPercent,
      transferFee: invoice.transferFee,
      tax: invoice.tax,
      totalPrice: invoice.totalPrice,
      clientName: invoice.clientName,
      createdAt: invoice.createdAt,
    });


  } catch (err) {
    console.log(err); 
    res.status(500).send(err);
  }
}
//#endregion
