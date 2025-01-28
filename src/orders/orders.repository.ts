import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IOrderRepo } from './orders.interface';

@Injectable()
export class orderRepository implements IOrderRepo {
  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }
  async getOrders(): Promise<any> {
      const db = await this.getdb();
      const orders = await db.collection('orders').find({}).toArray();
      return orders;
  }
  async addOrder(body: any): Promise<any> {
      const db = await this.getdb();
      const order = await db
        .collection('orders')
        .findOne({ orderNo: body.orderNo });
        if (order) {
          return { message: 'order already exists with the orderNo' };
        }
      const result = await db.collection('orders').insertOne(body);
      return result;
  }
}
