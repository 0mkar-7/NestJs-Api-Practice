import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IUserRepo',
      useClass : usersRepository
    },
  ],
})
export class UsersModule {}
