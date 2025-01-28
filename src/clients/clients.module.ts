import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { clientRepository } from './clients.repository';

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService,
    {
      provide: 'IClientsRepo',
      useClass: clientRepository,
    },
  ],
})
export class ClientsModule {}
