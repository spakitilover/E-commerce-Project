import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';

import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),

    ProductModule,
    OrderModule,

    CategoryModule,

    AuthModule,

    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
