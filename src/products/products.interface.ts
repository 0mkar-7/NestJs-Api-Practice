export interface IProductRepo{
    getProducts():Promise<any>
    addProduct(body:any):Promise<any>
}