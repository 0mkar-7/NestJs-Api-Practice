import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IProductRepo } from './products.interface';

@Injectable()
export class productRepository implements IProductRepo {
  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }
  async getProducts(): Promise<any> {
    const db = await this.getdb();
    const products = await db.collection('products').find({}).toArray();
    return products;
  }
  async addProduct(body: any): Promise<any> {
      const db = await this.getdb();
      const product = await db
        .collection('products')
        .findOne({ product: body.product });
      if (product) {
        return { message: 'product already exists ' };
      }
      const result = await db.collection('products').insertOne(body);
      return result;
  }
}