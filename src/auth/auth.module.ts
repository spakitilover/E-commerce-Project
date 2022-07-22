import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Contact } from 'src/contact/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Contact])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
