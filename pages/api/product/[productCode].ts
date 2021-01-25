// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import scrappeCodeInfos from "../../../src/services/scrappeCodeInfos";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { productCode } = request.query;

    const product = await scrappeCodeInfos({productCode});

    response.statusCode = 200
    return response.json(product)
}