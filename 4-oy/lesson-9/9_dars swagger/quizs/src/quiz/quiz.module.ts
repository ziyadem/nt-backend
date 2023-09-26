import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizService } from './service/quiz.service';
import { QuizRepository } from './repository/quiz.repo';
import { KnexConfigModule } from 'src/knex-config/KnexConfig.module';

@Module({
  imports: [KnexConfigModule],
  controllers: [QuizController],
  providers: [QuizService, QuizRepository]
})
export class QuizModule {}
