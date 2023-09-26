import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CarsService } from '../service/cars.service';
import { AuthorizationGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/getUserDecorator';
import { CreateOrUpdateCarsDto,CurrentUserDto,CarsDto,CarsIdDto } from '../dto/cars.dto';
import {ApiBasicAuth,ApiBearerAuth,ApiSecurity,ApiTags} from '@nestjs/swagger'


@ApiBearerAuth()
@ApiTags('cars')
@Controller('cars')
@UseGuards(AuthorizationGuard)
export class CarsController {
  constructor(private courseService: CarsService) {}

  @Get('')
  async getCarses(@CurrentUser() user: CurrentUserDto) {
    return await this.courseService.getCarses(user);
  }

  @Get('/:id')
  async getCars(@Param() course, @CurrentUser() user) {
    return await this.courseService.getCars(course, user);
  }

  @Post('/create')
  async createCars(
    @Body() cars: CreateOrUpdateCarsDto,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return await this.courseService.createCars(cars, user);
  }

  @Delete('/:id')
  async deleteCars(@Param() cars: CarsIdDto, @CurrentUser() user) {
    return await this.courseService.deleteCars(cars, user);
  }

  @Put('/:id')
  async updateCars(
    @Param() cars: CarsIdDto,
    @Body() updatedCars: CreateOrUpdateCarsDto,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return await this.courseService.updateCars(cars, updatedCars, user);
  }
}
