import { Module } from '@nestjs/common';
import { CarsController } from './controller/cars.controller';
import { CarsService } from './service/cars.service';
import { CarsRepository } from './repository/cars.repo';
import { KnexConfigModule } from 'src/knex-config/KnexConfig.module';

@Module({
  imports: [KnexConfigModule],
  controllers: [CarsController],
  providers: [CarsService, CarsRepository],
})
export class CarsModule {}
