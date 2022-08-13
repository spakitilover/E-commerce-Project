import { IsNumber, IsString } from 'class-validator';

export class OrderDto {
  @IsString()
  message: string;
}
