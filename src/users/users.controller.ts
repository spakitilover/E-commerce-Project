import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtLocalGuard } from 'src/auth/jwt-local.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LocalGoogleGuard } from 'src/startegy/local-google.guard';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { GetUser } from './decorator/user.decorator';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  ///////////////////////////////////// LOCAL AUTH .../////////////////////////////////
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@GetUser() user) {
    return this.authService.login(user);
  }

  @UseGuards(JwtLocalGuard)
  @Get('pro')
  proc(@GetUser() user) {
    return user;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////// GOOGLE AUTH ...///////////////////////////
  @Get('auth/google')
  @UseGuards(LocalGoogleGuard)
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(LocalGoogleGuard)
  async googleAuthRedirect(@Req() req) {
    return await this.usersService.googleLogin(req);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////

  /////////////// USER ROUTES  CRUD ////////////////////////////////////////////////////////////////////
  @Get()
  fillAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() users: UsersDto) {
    return await this.usersService.create(users);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usersService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.usersService.delete(id);
  }
}
