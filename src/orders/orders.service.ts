import { Inject, Injectable } from '@nestjs/common';
import { IOrderRepo } from './orders.interface';
import { orderRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(@Inject('IOrderRepo') private readonly IOrderRepo: IOrderRepo) {}
  async getAllOrders(): Promise<any> {
    return this.IOrderRepo.getOrders();
  }
  async createOrder(body:any): Promise<any> {
    return this.IOrderRepo.addOrder(body)
  }
}
