// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import cheerio from 'cheerio';
import BlueSoft from "../../../src/api/bluesoft";

export default async (request:NextApiRequest, response:NextApiResponse) => {
  const { productCode } = request.query;

  const { data } = await BlueSoft.get(`/${productCode}`);

  const selector = cheerio.load(data);

  const name = selector("body")
      .find("#product_description")
      .text()
  
  let source = selector("body")
      .find('li > a[href="/licenses"]')
      .text()
      .split('\n')[0]

  if(!source) source = 'Não informado'

  const manufacturer = selector("body")
      .find('.owner-name > a')
      .text()   

  const brand = selector("body")
      .find('#dados-gerais > div.col-xs-12.col-md-9 > dl > dd')
      .text()
      .split('\n')[7]

  const manufacturerProducts = selector("body")
      .find('.owner-name > a')
      .attr('href')
  
  const manufacturerCatalog = `https://cosmos.bluesoft.com.br${manufacturerProducts}`


  response.statusCode = 200
  return response.json({
    productCode,
    name,
    brand,
    source,
    manufacturer,
    manufacturerCatalog,
  })
}