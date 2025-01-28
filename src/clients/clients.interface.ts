export interface IClientsRepo {
  getClients(): Promise<any>;
  addClient(body: any): Promise<any>;
}
