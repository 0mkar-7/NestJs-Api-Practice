import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
    constructor(private readonly tripService:TripsService){}
    @Get("/")
    async getTrips(): Promise<any> {
        return await this.tripService.getTrips();
    }
    @Post("/")
    async addTrip(@Body() body:any):Promise<any> {
        return await this.tripService.addTrip(body);
    }
    @Patch("/:tripId")
    async updateTrip(@Param('tripId')tripId:any,@Body() body:any){
        return await this.tripService.updateTrip(tripId,body);
    }
    @Get("/:tripId")
    async getTripById(@Param('tripId')tripId : any){
        return await this.tripService.getTripById(tripId);
    }
}
