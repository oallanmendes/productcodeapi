// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import scrappeCodeInfos from "../../../src/services/scrappeCodeInfos";
import { InsertProduct, GetProduct } from "../../../src/services/productService";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { productCode } = request.query;

    let product = await GetProduct(String(productCode));
    if (!product) {
        product = await scrappeCodeInfos({ productCode });
        await InsertProduct(product);
        product = await GetProduct(String(productCode))
    }

    response.statusCode = 200
    return response.json( product )
}