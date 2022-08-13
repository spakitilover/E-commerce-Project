import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/product/entity/product.entity';
import { Users } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { OrderDto } from './dto/order.dto';
import { Orders } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders) private ordersRepo: Repository<Orders>,
    @InjectRepository(Users) private usersRepo: Repository<Users>,
    @InjectRepository(Products) private productRepo: Repository<Products>,
    private usersService: UsersService,
  ) {}

  async findAll() {
    return await this.ordersRepo.find();
  }

  async getOrderById(id: number) {
    const found = await this.ordersRepo.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!found) {
      throw new NotFoundException('no order with this id given');
    }
    return found;
  }

  async createOrder(user: Users) {
    const order = await this.ordersRepo.create({ message: 'order created' });

    const users = await this.usersRepo.findOne({ where: { id: user.id } });

    await this.usersRepo.save(users);

    order.user = users;

    return await this.ordersRepo.save(order);
  }

  async deleteOrder(id: number) {
    const order = await this.ordersRepo.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException();
    }
    return await this.ordersRepo.remove(order);
  }
}
