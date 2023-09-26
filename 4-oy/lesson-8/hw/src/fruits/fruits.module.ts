import { Module } from '@nestjs/common';
import { KnexConfigModule } from 'src/KnexConfig/Knex.module';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';
import { FruitsRepository } from './fruits.repo';

@Module({
  imports: [KnexConfigModule],
  controllers: [FruitsController],
  providers: [FruitsService, FruitsRepository],
})
export class FruitsModule {}
