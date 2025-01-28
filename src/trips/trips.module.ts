import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { tripsRepository } from './trips.repository';

@Module({
  controllers: [TripsController],
  providers: [
    TripsService,
    {
      provide: 'ITripsRepo',
      useClass: tripsRepository,
    },
  ],
})
export class TripsModule {}
