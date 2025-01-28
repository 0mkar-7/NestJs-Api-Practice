import { Injectable } from '@nestjs/common';
import { MongoClient, ObjectId } from 'mongodb';
import { ITruckRepo } from './trucks.interface';



@Injectable()
export class trucksRepository implements ITruckRepo {
  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }
  async getAllTrucks(): Promise<any> {
      const db = await this.getdb();
      const trucks = db.collection('trucks').find().toArray();
      return trucks;
  }
  async addTruck(body: any): Promise<any> {
      const db = await this.getdb();
      const truck = await db
        .collection('trucks')
        .findOne({ truckNumber: body.truckNumber });
      if (truck) {
        return { message: 'order already exists with the truckNumber' };
      }
      const result = await db.collection('trucks').insertOne(body);
      return result;
  }
}