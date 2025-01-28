import { Inject, Injectable } from '@nestjs/common';
import { IUserRepo } from './users.interface';

@Injectable()
export class UsersService {
  async updateUser(userId: any, body: any) : Promise<any> {
      return await this.db.updateUserById(userId ,body);
  }
  constructor(@Inject('IUserRepo') private readonly db: IUserRepo) {}
  async addUser(body: any): Promise<any> {
    return await this.db.addUser(body);
  }
  async getUserById(userId: any): Promise<any> {
    return await this.db.getUserById(userId);
  }
  async getAllUsers(): Promise<any> {
    return await this.db.getAllUsers();
  }
}
