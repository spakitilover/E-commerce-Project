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
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(JwtLocalGuard)
  @Get(':id')
  async getOrderById(@Param('id') id: number, @Req() req) {
    return this.orderService.getOrderById(id);
  }

  @Get()
  async findAll() {
    return await this.orderService.findAll();
  }

  @Post()
  async createOrder(@Body() orderDto: OrderDto) {
    return await this.orderService.createOrder(orderDto);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number) {
    return await this.orderService.deleteOrder(id);
  }
}
