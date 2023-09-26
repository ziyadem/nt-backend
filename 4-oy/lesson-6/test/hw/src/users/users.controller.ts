import { Body, Controller, Delete, Get,Param,Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';


interface IUsers {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
}
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Post('/create')
  async createUser(@Body() user: IUsers) {
    return await this.usersService.createUser(user);
  }

  @Delete('/:id')
  async deleteUser(@Param() user) {
    console.log(user);
    
    return await this.usersService.deleteUser(user.id);
  }

  @Put('/:id')
  async updateUser(
    @Param() user,
    @Body() updateUser
    ) {  
    return await this.usersService.updateUser(user.id,updateUser);
  }
}
