import { Inject, Injectable } from '@nestjs/common';
import { IProductRepo } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(@Inject('IProductRepo') private readonly db: IProductRepo) {}
  async addProduct(body: any): Promise<any> {
    return await this.db.addProduct(body);
  }
  async getProducts(): Promise<any> {
    return await this.db.getProducts();
  }
}
