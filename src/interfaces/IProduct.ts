export default interface IProduct {
  productCode: string;
  name: string;
  brand: string;
  source: string;
  manufacturer: string;
  manufacturerCatalog?: string;
  imageUrl?: string;
}