import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { order } from './orders';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService : OrdersService){}
    @Get("/")
    async getAllOrders(): Promise<any> {
        return await this.orderService.getAllOrders();
    }
    @Post("/")
    async createOrder(@Body()body:order): Promise<any> {
        return await this.orderService.createOrder(body);
    }
}
