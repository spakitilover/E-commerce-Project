import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Products } from 'src/product/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Products])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
