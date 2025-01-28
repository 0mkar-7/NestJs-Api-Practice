import { Module } from '@nestjs/common';
import { TrucksController } from './trucks.controller';
import { TrucksService } from './trucks.service';
import { trucksRepository } from './trucks.repository';

@Module({
  controllers: [TrucksController],
  providers: [TrucksService,
    {
      provide:"ITruckRepo",
      useClass: trucksRepository
    }
  ]
})
export class TrucksModule {}
