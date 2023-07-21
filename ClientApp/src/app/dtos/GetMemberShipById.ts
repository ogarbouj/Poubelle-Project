export interface getMembershipByIdItem {
  id: string,
  // createdAt: Date,
  finalPrice: number
}

export interface getUserByMembership {
  id: string,
  name: string,
  surname: string,
  phone: string,
  email: string
}

export interface getRecycleOfferByMembership {
  id: string,
  title: string,
  type: string,
  price: number,
}

export interface getMembershipById {
  membership: getMembershipByIdItem,
  user: getUserByMembership,
  recycleOffer: getRecycleOfferByMembership
}
