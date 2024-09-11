import { IsNotEmpty, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  id?: number;
  @MinLength(5, { message: 'loiroi' })
  productName?: string;
  price?: number;
}
