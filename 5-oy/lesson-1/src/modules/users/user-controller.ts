import { ApiBody, ApiCreatedResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from "@nestjs/swagger"
import { Controller, Body, Post, HttpCode, HttpStatus, Get, Param, Delete, Put } from "@nestjs/common"
import { UserService } from "./user-service"
import { UserCreateDto, UserIdDto } from "./dtos"

@ApiTags('User service')
@Controller({
  version: '1',
  path: '/user-service',
})
export class UserController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @ApiBody({ type: UserCreateDto })
  @ApiCreatedResponse({ description: 'User Created' })
  @ApiUnauthorizedResponse({ description: 'Filed to identify user' })
  @ApiUnprocessableEntityResponse({ description: 'Validation failed' })
  createUser(@Body() body: UserCreateDto) { 
    return this.service.createUser(body);
  }

  @Get()
  @ApiUnauthorizedResponse({ description: 'Filed to identify user' })
  getUser() { 
    return this.service.getUser();
  }

  @Delete('/:id')
  deleteUser(@Param() id: UserIdDto) {
    return this.service.deleteUser(id)
  }

  @Put('/:id') 
  @ApiBody({ type: UserCreateDto })
  updateUser(
    @Param() id: UserIdDto ,
    @Body() body:UserCreateDto
    ){
    return this.service.updateUser(id, body);
  }


}