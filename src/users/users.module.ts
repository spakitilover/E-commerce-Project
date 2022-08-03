import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { GoogleStrategy } from 'src/startegy/google.startegy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [UsersService, AuthService, GoogleStrategy],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
