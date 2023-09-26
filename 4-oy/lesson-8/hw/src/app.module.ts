import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CourseController } from "./course/course.controller";
import { CourseService } from "./course/course.service";
import { CourseModule } from "./course/course.module";
import { CourseRepository } from "./course/course.repo";
import { KnexConfigModule } from "./KnexConfig/Knex.module";
import { AuthModule } from "./auth/auth.module";
import { CarsService } from "./cars/cars.service";
import { CarsRepository } from "./cars/cars.repo";
import { CarsModule } from "./cars/cars.module";
import { FruitsController } from './fruits/fruits.controller';
import { FruitsService } from './fruits/fruits.service';
import { FruitsModule } from './fruits/fruits.module';
import { FruitsRepository } from "./fruits/fruits.repo";
import { AnimalsModule } from './animals/animals.module';
import { AnimalsController } from "./animals/animals.controller";
import { AnimalsService } from "./animals/animals.service";
import { AnimalsRepository } from "./animals/animals.repo";

@Module({
  imports: [CourseModule, KnexConfigModule, AuthModule, CarsModule, FruitsModule, AnimalsModule],
  controllers: [AppController, CourseController, FruitsController,AnimalsController],
  providers: [
    AppService,
    CourseService,
    CourseRepository,
    CarsRepository,
    CarsService,
    FruitsService,
    FruitsRepository,
    AnimalsService,
    AnimalsRepository
  ],
})
export class AppModule {}
