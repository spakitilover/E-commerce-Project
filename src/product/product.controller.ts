import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CategoryDto } from 'src/category/dto/category.dto';
import { Category } from 'src/category/entity/category.entity';
import { ProductsDto } from './dto/product.dto';
import { Products } from './entity/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAll(): Promise<Products[]> {
    return await this.productService.findAll();
  }

  @Post()
  async createProduct(@Body() body: ProductsDto, @Body() cate: CategoryDto) {
    return await this.productService.createProduct(body, cate);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const product = await this.productService.removeProduct(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }
}
