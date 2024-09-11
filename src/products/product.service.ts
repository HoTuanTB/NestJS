import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.models';

export class ProductService {
  private products: Product[] = [
    { id: 1, productName: 'tuan', price: 123123 },
    { id: 2, productName: 't123uan', price: 515 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
  createProduct(productDto): ProductDto {
    return productDto;
  }
  detailProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }
  updateProduct(): string {
    return 'update Product';
  }
  deleteProduct(): string {
    return 'delete Product';
  }
}
