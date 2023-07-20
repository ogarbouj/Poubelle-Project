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
        userid: invoice.userId
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

//#region GetAllByUserIdAsync
export async function GetAllByUserIdAsync(req, res) {
  try {

    const userId = req.params.userId;
    
    const pageNumber = parseInt(req.query.pageNumber) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to a page size of 10 if not provided

    const totalCount = await MemberShipInvoice.countDocuments();

    let totalPages = Math.ceil(totalCount / pageSize);

    const invoices = await MemberShipInvoice.find({ userId })
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
        userid: invoice.userId
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
      userId: invoice.userId
    });


  } catch (err) {
    console.log(err); 
    res.status(500).send(err);
  }
}
//#endregion
