import imgurAPI from '../api/imgurApi';
import FormData from 'form-data';

// const imgurClientId = process.env.IMGUR_CLIENT_ID;

interface IUploadImageToImgurDTO {
  url: string;
  name: string;
  productCode: string;
}

export default async function uploadImageToImgur({ url, name, productCode }: IUploadImageToImgurDTO) {
  let imageUrl = url;

  const form = new FormData();
  form.append('image', url);
  form.append('type', 'url');
  form.append('name', `${productCode}_${name}`);
  form.append('title', name);
  form.append('description', `Product image of code '${productCode}' from productcodeapi. Find more on www.productcodeapi.com.br/api/product/${productCode}`);

  const response = await imgurAPI.post(
    '/upload',
    form,
    // TODO -> Descobrir como enviar o imgurClientId dentro desse post request.
    { headers: form.getHeaders()}
  );

  const {status, success, data } = response.data;

  if(status === 200 && success === true && data) {
    imageUrl = data.link;
  }

  return imageUrl
}