import { IsNumber, IsString } from 'class-validator';

export class ProductsDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;

  @IsString()
  desc: string;
}
