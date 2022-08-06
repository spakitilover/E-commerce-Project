import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entity/order.entity';
import { Users } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Users])],
  providers: [OrderService, UsersService],
  controllers: [OrderController],
})
export class OrderModule {}
