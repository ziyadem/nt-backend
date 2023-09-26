import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';


interface ICourse{
    title: string;
    price: string;
    color:string;
}

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  async getCars() {
    return await this.carService.getCars();
  }

  @Post('/create')
  async createCar(@Body() car: ICourse) {
    return await this.carService.createCar(car);
  }

  @Delete('/:id')
  async deleteCar(@Param() car) {
    return await this.carService.deleteCar(car.id);
  }

  @Put('/:id')
  async updateCar(@Param() car_id, @Body() updateCar) {
    return await this.carService.updateCar(car_id, updateCar);
  }
}
