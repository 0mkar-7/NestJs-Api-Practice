import { Injectable } from '@nestjs/common';
import { MongoClient, ObjectId } from 'mongodb';
import { ITruckRepo } from 'src/trucks/trucks.interface';
import { IUserRepo } from './users.interface';




@Injectable()
export class usersRepository implements IUserRepo {

  async getdb() {
    const client = new MongoClient('mongodb://localhost:27017/');
    const connecction = await client.connect();
    const db = connecction.db('mydb');
    return db;
  }

  async getAllUsers(): Promise<any> {
      const db = await this.getdb();
      const users = await db.collection('users').find().toArray();
      return users;
  }
  async addUser(body: any): Promise<any> {
      const db = await this.getdb();
      const user = await db
        .collection('users')
        .findOne({ username: body.username });
      if (user) {
        return { message: 'username already exists ' };
      }
      const result = await db.collection('users').insertOne(body);
      return result;
  }
  async getUserById(id: any): Promise<any> {
      const db = await this.getdb();
      const user = await db.collection('users').findOne({ _id: new ObjectId(id) });
      if(user){
        return user; 
      }
      else return {msg : "User Not Found"}
  }
  async updateUserById(userId:any , body:any){
    const db = await this.getdb();
    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(userId)  });
    if(!user){
        return {msg : "User Not Found"}
    }
    const result = await db
      .collection('users')
      .updateOne({ _id: new ObjectId(userId) }, { $set: { ...body } });
    return result;
  }
}