import BlueSoft from "../api/bluesoft";
import cheerio from 'cheerio';
import IProduct from "../interfaces/IProduct";
import uploadImageToImgur from "./uploadImageToImgur";

export default async function scrappeCodeInfos({productCode}):Promise<IProduct>{
  const { data } = await BlueSoft.get(`/${productCode}`);

    const selector = cheerio.load(data);

    const name = selector("body")
        .find("#product_description")
        .text()

    let source = selector("body")
        .find('li > a[href="/licenses"]')
        .text()
        .split('\n')[0]

    if (!source) source = 'Não informado'

    const manufacturer = selector("body")
        .find('.owner-name > a')
        .text()

    const brand = selector("body")
        .find('#dados-gerais > div.col-xs-12.col-md-9 > dl > dd')
        .text()
        .split('\n')[7]

    let imageUrl = selector("body")
        .find('#product-gallery > div.thumbnail.product-thumbnail > img')
        .attr('src')

    if ( imageUrl ) {
        imageUrl = await uploadImageToImgur({name, productCode, url: imageUrl})
    }

    return {
      productCode,
      name,
      brand,
      source,
      manufacturer,
      imageUrl,
    }
}