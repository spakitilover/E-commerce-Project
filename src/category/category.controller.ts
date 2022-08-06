import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { Category } from './entity/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get('name')
  async findByCategoryName(@Body() body: CategoryDto) {
    return await this.categoryService.findByCategoryName(body.categoryName);
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.categoryService.findOnes(id);
  }

  @Post()
  async create(@Body() body: CategoryDto) {
    const category = await this.categoryService.create(body);

    if (!category) {
      throw new BadRequestException();
    }
    return category;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.categoryService.delete(id);
  }
}
