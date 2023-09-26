"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const course_controller_1 = require("./course/course.controller");
const course_service_1 = require("./course/course.service");
const course_module_1 = require("./course/course.module");
const course_repo_1 = require("./course/course.repo");
const Knex_module_1 = require("./KnexConfig/Knex.module");
const auth_module_1 = require("./auth/auth.module");
const cars_service_1 = require("./cars/cars.service");
const cars_repo_1 = require("./cars/cars.repo");
const cars_module_1 = require("./cars/cars.module");
const fruits_controller_1 = require("./fruits/fruits.controller");
const fruits_service_1 = require("./fruits/fruits.service");
const fruits_module_1 = require("./fruits/fruits.module");
const fruits_repo_1 = require("./fruits/fruits.repo");
const animals_module_1 = require("./animals/animals.module");
const animals_controller_1 = require("./animals/animals.controller");
const animals_service_1 = require("./animals/animals.service");
const animals_repo_1 = require("./animals/animals.repo");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [course_module_1.CourseModule, Knex_module_1.KnexConfigModule, auth_module_1.AuthModule, cars_module_1.CarsModule, fruits_module_1.FruitsModule, animals_module_1.AnimalsModule],
        controllers: [app_controller_1.AppController, course_controller_1.CourseController, fruits_controller_1.FruitsController, animals_controller_1.AnimalsController],
        providers: [
            app_service_1.AppService,
            course_service_1.CourseService,
            course_repo_1.CourseRepository,
            cars_repo_1.CarsRepository,
            cars_service_1.CarsService,
            fruits_service_1.FruitsService,
            fruits_repo_1.FruitsRepository,
            animals_service_1.AnimalsService,
            animals_repo_1.AnimalsRepository
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map