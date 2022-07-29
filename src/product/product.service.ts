import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsDto } from './dto/product.dto';
import { Products } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products) private productRepo: Repository<Products>,
  ) {}

  async findAll() {
    return await this.productRepo.find();
  }

  async findById(id: number) {
    const product = await this.productRepo.findOne({ where: { id: id } });
    if (!product) {
      throw new NotFoundException('product with this id is not exist');
    }
    return product;
  }

  async createProduct(productDto: ProductsDto) {
    const product = await this.productRepo.create(productDto);

    return await this.productRepo.save(product);
  }

  async removeProduct(id: number) {
    const product = await this.productRepo.findOne({ where: { id: id } });

    if (!product) {
      throw new NotFoundException('this id is not exist');
    }
    return await this.productRepo.remove(product);
  }
}
