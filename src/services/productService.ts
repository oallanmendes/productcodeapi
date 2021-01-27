import IProduct from "../interfaces/IProduct";
import { Insert, Get } from "./mongo/mongoServices";
const collectionName = "products"

export const InsertProduct = async (product: IProduct): Promise<String> => {
    const id = await Insert(collectionName, product);
    return id;
}

export const GetProduct = async (productCode: string): Promise<IProduct> => {
    return await Get(collectionName, { productCode });
}