import { Inject, Injectable } from '@nestjs/common';
import { ITripsRepo } from './trips.interface';
import { tripsRepository } from './trips.repository';


@Injectable()
export class TripsService {
  constructor(@Inject('ITripsRepo') private readonly db: ITripsRepo) {}
  async getTrips(): Promise<any> {
    return await this.db.getTrips();
  }
  async addTrip(body): Promise<any> {
    return await this.db.addTrip(body);
  }
  async updateTrip(tripId: any, body: any):Promise<any> {
    return await this.db.updateTrip(tripId, body);
  }
  async getTripById(tripId: any): Promise<any> {
    return await this.db.getTripById(tripId);
  }
}
