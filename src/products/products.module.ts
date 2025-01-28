import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { productRepository } from './products.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'IProductRepo',
      useClass: productRepository,
    },
  ],
})
export class ProductsModule {}
