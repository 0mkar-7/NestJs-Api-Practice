import { Inject, Injectable } from '@nestjs/common';
import { clientRepository } from './clients.repository';
import { client } from './client';
import { IClientsRepo } from './clients.interface';

@Injectable()
export class ClientsService {
  constructor(@Inject('IClientsRepo') private readonly db: IClientsRepo) {}

  async getAllClients(): Promise<any> {
    return await this.db.getClients();
  }
  async addClient(body: client): Promise<any> {
    return await this.db.addClient(body);
  }
}
