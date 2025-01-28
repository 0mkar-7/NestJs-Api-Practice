import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import { workersRepository } from './worker.repository';

@Module({
  controllers: [WorkersController],
  providers: [
    WorkersService,
    {
      provide: 'IWorkerRepo',
      useClass: workersRepository
    },
  ],
})
export class WorkersModule {}
