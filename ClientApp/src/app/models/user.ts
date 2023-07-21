export interface User {
  _id: string;
  name: string;
  surname: string;
  phone: number;
  email: string;
  pwd: string;
  token: string;
  role: string;
  verified: boolean;
  langitude: number;
  latitude: number;
  createdAt: Date;
  updatedAt: Date;
}
