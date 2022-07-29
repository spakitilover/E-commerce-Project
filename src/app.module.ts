import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UsersModule, ProductModule, AuthModule, OrderModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
