export interface ITripsRepo {
  getTrips(): Promise<any>;
  addTrip(body: any): Promise<any>;
  updateTrip(tripId: any, body: any): Promise<any>;
  getTripById(tripId:any):Promise<any>;
}
