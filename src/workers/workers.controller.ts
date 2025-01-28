import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { WorkersService } from './workers.service';

@Controller('workers')
export class WorkersController {
    constructor(private readonly workersService: WorkersService) {}
   @Get('/')
     async getAllUsers() {
       return await this.workersService.getWorkers();
     }
     @Get('/:userId')
     async getUserById(@Param('userId',ParseIntPipe) userId: any) {
       return await this.workersService.getWorkerById(userId);
     }
     @Post('/')
     async addUser(@Body() body: any): Promise<any> {
       return await this.workersService.addWorker(body);
     }
}
