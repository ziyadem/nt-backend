
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { CurrentUser } from "src/auth/userInfo/getUserDecorator";

interface ICars {
  title: string;
  price: string;
  color:string;
}
@Controller("cars")
@UseGuards(AuthGuard)
export class CarsController {
  constructor(private courseService: CarsService) {}

  @Get()
  async getCarses(@CurrentUser() user) {
    return await this.courseService.getCarses(user);
  }

  @Get("/:id")
  async getCars(@Param() course, @CurrentUser() user) {
    return await this.courseService.getCars(course, user);
  }

  @Post("/create")
  async createCars(@Body() cars: ICars, @CurrentUser() user) {
    return await this.courseService.createCars(cars, user);
  }

  @Delete("/:id")
  async deleteCars(@Param() cars, @CurrentUser() user) {
    return await this.courseService.deleteCars(cars, user);
  }

  @Put("/:id")
  async updateCars(
    @Param() cars,
    @Body() updatedCars,
    @CurrentUser() user
  ) {
    return await this.courseService.updateCars(cars, updatedCars, user);
  }
}
