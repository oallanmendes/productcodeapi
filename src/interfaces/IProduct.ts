import { ObjectID } from 'mongodb';
export default interface IProduct {
  _id?: ObjectID;
  productCode: string;
  name: string;
  brand: string;
  source: string;
  manufacturer: string;
  imageUrl?: string;
}