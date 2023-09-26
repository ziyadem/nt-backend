import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';
import { CourseRepository } from './course/course.repo';
import { KnexConfigModule } from './KnexConfig/Knex.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CourseModule, KnexConfigModule, AuthModule],
  controllers: [AppController, CourseController],
  providers: [AppService, CourseService, CourseRepository],
})
export class AppModule {}
