import { IsNumber } from 'class-validator';

export class OrderDto {
  @IsNumber()
  id: number;
  @IsNumber()
  total: number;
}
