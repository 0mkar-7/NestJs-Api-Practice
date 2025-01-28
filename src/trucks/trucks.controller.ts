import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrucksService } from './trucks.service';

@Controller('trucks')
export class TrucksController {
  constructor(private readonly truckService: TrucksService) {}
  @Get('/')
  async getTrucks(): Promise<any> {
    return await this.truckService.getTrucks();
  }
  @Post('/')
  async addTruck(@Body() body: any): Promise<any> {
    return await this.truckService.addTruck(body);
  }
}
