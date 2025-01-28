import { Inject, Injectable } from '@nestjs/common';
import { IWorkerRepo } from './workers.interface';

@Injectable()
export class WorkersService {
  constructor(@Inject('IWorkerRepo') private readonly db: IWorkerRepo) {}
  async addWorker(body: any): Promise<any> {
    return await this.db.addWorker(body);
  }
  async getWorkerById(id: any) {
    return await this.db.getWorkerById(id);
  }
  async getWorkers() {
    return await this.db.getWorkers();
  }
}
