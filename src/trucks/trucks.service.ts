import { Inject, Injectable } from '@nestjs/common';
import { ITruckRepo } from './trucks.interface';

@Injectable()
export class TrucksService {
    constructor(@Inject('ITruckRepo') private readonly db:ITruckRepo){}
    async addTruck(body: any): Promise<any> {
       return await  this.db.addTruck(body);
    }
    async getTrucks() {
        return await this.db.getAllTrucks();
    }
}
