import {
  Body,
  Controller,
  Delete,
  Get,
  // Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): ProductDto {
    return this.productService.createProduct(productDto);
  }

  // @Get('/:id')
  // detailProduct(@Param('id') id: number): Product {
  //   return this.productService.detailProduct(id);
  // }

  @Put('/:id')
  updateProduct(): string {
    return this.productService.updateProduct();
  }

  @Delete('/:id')
  deleteProduct(): string {
    return this.productService.deleteProduct();
  }
}
