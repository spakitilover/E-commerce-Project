import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private product: Repository<Product>,
  ) {}

  async createProduct(createProduct: CreateProductDto) {
    const products = await this.product.create(createProduct);
    await this.product.save(products);
  }
}
