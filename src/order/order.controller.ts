import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtLocalGuard } from 'src/auth/jwt-local.guard';
import { GetUser } from 'src/users/decorator/user.decorator';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get(':id')
  async getOrderById(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll();
  }

  @UseGuards(JwtLocalGuard)
  @Post()
  async createOrder(@Body() orderDto: OrderDto, @GetUser() user) {
    return await this.orderService.createOrder(orderDto, user);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number) {
    return await this.orderService.deleteOrder(id);
  }
}
