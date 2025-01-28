import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/')
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }
  @Get('/:userId')
  async getUserById(@Param('userId') userId: any) {
    return await this.usersService.getUserById(userId);
  }
  @Post('/')
  async addUser(@Body() body: any): Promise<any> {
    return await this.usersService.addUser(body);
  }
  @Patch('/:userId')
  async updateTrip(@Param('userId') userId: any, @Body() body: any) {
    return await this.usersService.updateUser(userId, body);
  }
}
