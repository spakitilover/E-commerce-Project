import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';
import { UsersDto } from './dto/create-users.dto';
import { Contact } from 'src/contact/contact.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private users: Repository<Users>,
    @InjectRepository(Contact) private contact: Repository<Contact>,
  ) {}

  async createUser(usersDto: UsersDto) {
    const user = await this.users.create(usersDto);
    await this.users.save(user);

    const contacts = await this.contact.create({ email: 'email@email.com' });

    contacts.user = user;
    await this.contact.save(contacts);
  }
}
