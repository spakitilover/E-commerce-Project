import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
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
  async createProduct(@Body() body: ProductsDto) {
    return await this.productService.createProduct(body);
  }
}
