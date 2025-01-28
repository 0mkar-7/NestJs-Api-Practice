export interface IOrderRepo{
    getOrders():Promise<any>
    addOrder(body:any):Promise<any>;
}