import { Injectable } from '@nestjs/common';
import { MongoClient, ObjectId } from 'mongodb';
import { ITripsRepo } from './trips.interface';


@Injectable()
export class tripsRepository implements ITripsRepo {
  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }
  async getTrips(): Promise<any> {
    const db = await this.getdb();
    const trips = await db.collection('trips').find().toArray();
    return trips;
  }
  async addTrip(body: any): Promise<any> {
    const db = await this.getdb();
    const result = await db.collection('trips').insertOne(body);
    return result;
  }
  async updateTrip(tripId: any, body: any): Promise<any> {
    const db = await this.getdb();
    const trip = await db.collection('trips').findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      return { message: 'trip does not exist' };
    }
    const result = await db
      .collection('trips')
      .updateOne({ _id: new ObjectId(tripId) }, { $set: { ...body } });
    return result;
  }
  async getTripById(tripId: any): Promise<any> {
    const db = await this.getdb();
    const trip = await db
      .collection('trips')
      .findOne({ _id: new ObjectId(tripId) });
    if (trip) {
      return trip;
    } else return { msg: 'Trip Not Found' };
  }
}
