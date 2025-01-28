import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { orderRepository } from './orders.repository';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService,
    {
      provide: 'IOrderRepo',
      useClass: orderRepository,
    }
  ]
})
export class OrdersModule {}
