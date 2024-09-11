export class Product {
  id?: number;
  productName?: string;
  price?: number;

  constructor([id, productName, price]) {
    this.id = id;
    this.productName = productName;
    this.price = price;
  }
}
