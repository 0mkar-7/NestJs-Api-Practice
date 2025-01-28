import { Injectable } from '@nestjs/common';
import { MongoClient, ObjectId } from 'mongodb';
import { IWorkerRepo } from './workers.interface';






@Injectable()
export class workersRepository implements IWorkerRepo {
  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }
  async getWorkers(): Promise<any> {
    const db = await this.getdb();
    const users = await db.collection('workers').find().toArray();
    return users;
  }
  async addWorker(body: any): Promise<any> {
    const db = await this.getdb();
    const worker = await db
      .collection('workers')
      .findOne({ workerId: body.workerId });
    if (worker) {
      return { message: 'worker already exists ' };
    }
    const result = await db.collection('workers').insertOne(body);
    return result;
  }
  async getWorkerById(id: any): Promise<any> {
    const db = await this.getdb();
    const worker = await db
      .collection('workers')
      .findOne({ workerId: id });
    if (worker) {
      return worker;
    } else return { msg: 'User Not Found' };
  }
}