import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  @IsOptional()
  @IsNumber()
  category_id: number;

  @IsOptional()
  @IsString()
  categoryName: string;
}
