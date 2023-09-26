import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { KnexConfigModule } from 'src/KnexConfig/Knex.module';
import { AnimalsRepository } from './animals.repo';

@Module({
  imports: [KnexConfigModule],
  controllers: [AnimalsController],
  providers: [AnimalsService, AnimalsRepository],
})
export class AnimalsModule {}
