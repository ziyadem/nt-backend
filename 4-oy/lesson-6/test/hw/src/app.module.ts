import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';
import { CourseRepository } from './course/course.repo';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersRepository } from './users/users.repo';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CarsRepository } from './cars/cars.repo';

@Module({
  imports: [CourseModule, UsersModule, CarsModule],
  controllers: [AppController, CourseController, UsersController, CarsController],
  providers: [AppService, CourseService, CourseRepository, UsersService,UsersRepository,CarsService,CarsRepository],
})
export class AppModule {}
