import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
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

  async findAll() {
    return await this.usersRepo.find();
  }

  async create(users: UsersDto) {
    const user = await this.usersRepo.create(users);

    return await this.usersRepo.save(user);
  }

  async findById(id: number) {
    const user = await this.usersRepo.findOne({ where: { id: id } });
    if (!id) {
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
