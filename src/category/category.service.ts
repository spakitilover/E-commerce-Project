import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/product/entity/product.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(Products) private productsRepo: Repository<Products>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepo.find();
  }

  async findOnes(id: number) {
    const category = await this.categoryRepo.findOne({
      relations: { products: true },
      where: { id: id },
    });
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }

  async create(categoryDto: CategoryDto) {
    const category = await this.categoryRepo.create(categoryDto);

    return await this.categoryRepo.save(category);
  }

  async delete(id: number) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException();
    }
    return await this.categoryRepo.remove(category);
  }
}
