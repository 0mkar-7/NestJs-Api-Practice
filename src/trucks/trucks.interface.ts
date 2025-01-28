export interface ITruckRepo {
  getAllTrucks(): Promise<any>;
  addTruck(body: any): Promise<any>;
  
}