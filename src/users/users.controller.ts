import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtLocalGuard } from 'src/auth/jwt-local.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtLocalGuard)
  @Get('pro')
  proc(@Request() req) {
    return req.user;
  }

  @Get()
  fillAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() users: UsersDto) {
    return await this.usersService.create(users);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.usersService.delete(id);
  }
}
