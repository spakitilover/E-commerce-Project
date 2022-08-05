import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entity/product.entity';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Category])],
  providers: [ProductService, CategoryService],
  controllers: [ProductController],
})
export class ProductModule {}
