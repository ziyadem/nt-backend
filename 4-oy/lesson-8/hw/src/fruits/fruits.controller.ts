
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
import { FruitsService } from "./fruits.service";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { CurrentUser } from "src/auth/userInfo/getUserDecorator";

interface IFruit {
  title: string;
  price: string;
}
@Controller("fruits")
@UseGuards(AuthGuard)
export class FruitsController {
  constructor(private fruitsService: FruitsService) {}

  @Get()
  async getFruits(@CurrentUser() user) {
    return await this.fruitsService.getFruits(user);
  }

    @Get("/:id")
    async getFruit(@Param() fruits, @CurrentUser() user) {
      return await this.fruitsService.getFruit(fruits, user);
    }

    @Post("/create")
    async createFruit(@Body() fruit: IFruit, @CurrentUser() user) {
      return await this.fruitsService.createFruit(fruit, user);
    }

    @Delete("/:id")
    async deleteFruit(@Param() fruit, @CurrentUser() user) {
      return await this.fruitsService.deleteFruit(fruit, user);
    }

    @Put("/:id")
    async updateFruit(@Param() fruit, @Body() updatedFruit, @CurrentUser() user) {
      return await this.fruitsService.updateFruit(fruit, updatedFruit, user);
    }
}
