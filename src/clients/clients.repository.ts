import { Injectable } from '@nestjs/common';
import { IClientsRepo } from './clients.interface';
import { MongoClient } from 'mongodb';

@Injectable()
export class clientRepository implements IClientsRepo {
  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }
  async getClients(): Promise<any> {
    const db = await this.getdb();
    const clients = db.collection('clients').find().toArray();
    return clients;
  }

  async addClient(body: any): Promise<any> {
    const db = await this.getdb();
    const client = await db
      .collection('clients')
      .findOne({ clientName: body.clientName });
    if (client) {
      return { message: 'Client already exists' };
    }
    const result = db.collection('clients').insertOne({ ...body });
    return result;
  }
}
