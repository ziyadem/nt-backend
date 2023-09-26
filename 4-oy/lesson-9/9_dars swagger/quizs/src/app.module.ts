import { Module } from '@nestjs/common';
import { KnexConfigModule } from './knex-config/KnexConfig.module';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [AuthModule, KnexConfigModule, QuizModule,CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
