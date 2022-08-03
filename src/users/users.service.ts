import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
import { Orders } from 'src/order/entity/order.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './dto/users.dto';
import { Users } from './entity/users.entity';
import { User } from './interface/users-interface';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepo: Repository<Users>) {}

  async findOneByEmail(username: string): Promise<User | undefined> {
    return await this.usersRepo.findOne({
      where: { username: username },
    });
  }

  /// GOOGLE AUTH

  async googleLogin(req) {
    if (!req.user) {
      return 'no user from google';
    }
    return {
      message: 'user from google',
      user: req.user,
    };
  }

  ///

  async findAll() {
    return await this.usersRepo.find({ relations: { orders: true } });
  }

  async create(users: UsersDto) {
    const user = await this.usersRepo.create(users);

    return await this.usersRepo.save(user);
  }

  async findById(id: number) {
    const user = await this.usersRepo.findOne({
      relations: { orders: true },
      where: { id },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async delete(id: number) {
    const user = await this.usersRepo.findOne({ where: { id: id } });

    if (!user) {
      throw new NotFoundException('user is not exist');
    }
    return this.usersRepo.remove(user);
  }
}
