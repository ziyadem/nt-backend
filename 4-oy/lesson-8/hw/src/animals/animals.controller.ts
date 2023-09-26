

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
import { AuthGuard } from "src/auth/guard/auth.guard";
import { AnimalsService } from "./animals.service";
import { CurrentUser } from "src/auth/userInfo/getUserDecorator";

interface IAnimals {
  title: string;
  color: string;
}

@Controller("animals")
@UseGuards(AuthGuard)
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  async getAnimals(@CurrentUser() user) {
    return await this.animalsService.getAnimals(user);
  }
  @Get("/:id")
  async getAnimal(@Param() animals, @CurrentUser() user) {
    return await this.animalsService.getAnimal(animals, user);
  }

  @Post("/create")
  async createAnimals(@Body() animals: IAnimals, @CurrentUser() user) {
    return await this.animalsService.createAnimals(animals, user);
  }

  @Delete("/:id")
  async deleteFruit(@Param() animals, @CurrentUser() user) {
    return await this.animalsService.deleteAnimal(animals, user);
  }

  @Put("/:id")
  async updateAnimal(
    @Param() animal,
    @Body() updateAnimal,
    @CurrentUser() user
  ) {
    return await this.animalsService.updateAnimal(animal, updateAnimal, user);
  }
}
