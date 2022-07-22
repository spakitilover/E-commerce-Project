import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CateGory } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CateGory])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
