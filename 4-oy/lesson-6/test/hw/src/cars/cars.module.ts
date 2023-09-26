import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsRepository } from './cars.repo';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [CarsService, CarsRepository],
})
export class CarsModule {}
