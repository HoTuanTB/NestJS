import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.findAll();
  }
  createProduct(productDto): ProductDto {
    return productDto;
  }
  // detailProduct(id: number): string {
  //   return '123123';
  // }
  updateProduct(): string {
    return 'update Product';
  }
  deleteProduct(): string {
    return 'delete Product';
  }
}
