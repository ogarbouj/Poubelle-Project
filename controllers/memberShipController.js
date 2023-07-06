import User from "../entities/user.js";
import Membership from "../entities/Membership.js";
import MembershipPayment from "../entities/MemberShipPayment.js";
import OffreRecyclage from "../entities/OffreRecyclage.js";

//#region PostAsync
export async function PostAsync(req, res) {
  try {
    const { userId, recycleOfferId } = req.body;

    //#region Check Availibilities
    const user = await User.findById(userId).exec();
    if (!user) return res.status(404).send("User does not exist!");

    const recycleOffer = await OffreRecyclage.findById(recycleOfferId).exec();
    if (!recycleOffer)
      return res.status(404).send("Recycle offer does not exist!");
    //#endregion

    // adding fee transfer

    //#region Init Entitiy
    let membershipTemp = new Membership({
      finalPrice: (recycleOffer.price / 100) * 10 + recycleOffer.price,
      userId: userId,
      offreRecyclagId: recycleOfferId,
    });
    //#endregion

    membershipTemp
      .save()
      .then((memberShip) => {
        const response = {
          id: memberShip.id,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
          },
          recycleOffer: {
            id: recycleOffer.id,
            title: recycleOffer.title,
            type: recycleOffer.type,
            price: recycleOffer.price,
          },
          finalPrice: memberShip.finalPrice,
          date: memberShip.date,
        };

        res.status(201).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } catch (err) {
    res.status(500).send(err);
  }
}
//#endregion

//#region GetAllAsync
export async function GetAllAsync(req, res) {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to a page size of 10 if not provided

    const totalCount = await Membership.countDocuments();

    let totalPages = Math.ceil(totalCount / pageSize);

    const memberships = await Membership.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .exec();

    // Cast memberships to DTO or custom format
    const castedMemberships = memberships.map((membership) => {
      return {
        id: membership.id,
        finalPrice: membership.finalPrice,
        date: membership.date,
      };
    });

    res.status(201).send({
      memberships: castedMemberships,
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
    const membershipId = req.params.id;

    const membership = await Membership.findById(membershipId).exec();
    if (!membership) return res.status(404).send("Membership not found");

    const user = await User.findById(membership.userId).exec();
    if (!user) return res.status(404).send("User not found");

    const recycleOffer = await OffreRecyclage.findById(membership.offreRecyclagId).exec();
    if (!recycleOffer) return res.status(404).send("Recycle Offer not found");

    res.json({
      membership: {
        id: membership.id,
        createdAt: membership.createdAt,
        finalPrice: membership.finalPrice,
      },
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        email: user.email,
      },
      recycleOffer: {
        id: recycleOffer.id,
        title: recycleOffer.title,
        type: recycleOffer.type,
        price: recycleOffer.price,
      },
    });
  } catch (err) {
    res.status(500).send(err);
  }
}
//#endregion
