import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get("/")
    async getProducts():Promise<any>{
        return this.productsService.getProducts();
    }
    @Post("/")
        async addProduct(@Body() body:any):Promise<any> {
            return await this.productsService.addProduct(body);
        }
}
