import {
  BadRequestException,
  Body,
  Delete,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { CategoryDto } from 'src/category/dto/category.dto';
import { Category } from 'src/category/entity/category.entity';
import { Repository } from 'typeorm';
import { ProductsDto } from './dto/product.dto';
import { Products } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products) private productRepo: Repository<Products>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    private categoryService: CategoryService,
  ) {}

  async findAll() {
    return await this.productRepo.find();
  }

  async findById(id: number) {
    const product = await this.productRepo.findOne({
      where: { id: id },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundException('product with this id is not exist');
    }
    return product;
  }

  async createProduct(productDto: ProductsDto, categorys: CategoryDto) {
    const productss = await this.productRepo.create(productDto);

    const category = await this.categoryRepo.create({
      id: categorys.category_id,
    });

    await this.categoryRepo.save(category);

    productss.category = category;

    return await this.productRepo.save(productss);
  }

  async removeProduct(id: number) {
    const product = await this.productRepo.findOne({ where: { id: id } });

    if (!product) {
      throw new NotFoundException('this id is not exist');
    }
    return await this.productRepo.remove(product);
  }
}
