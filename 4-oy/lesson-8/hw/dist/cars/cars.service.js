"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const cars_repo_1 = require("./cars.repo");
let CarsService = class CarsService {
    constructor(carsRepository) {
        this.carsRepository = carsRepository;
    }
    async getCarses(user) {
        const { user_id } = user;
        return this.carsRepository.getCars(user_id);
    }
    async getCars(course, { user_id }) {
        let res = await this.carsRepository.getOne(course, user_id);
        if (res.length == 0)
            return new common_1.NotFoundException(`Cars ${course.id} not found!`);
        return res;
    }
    async createCars(cars, user) {
        const { user_id } = user;
        let newCourse = await this.carsRepository.createCars(cars, user_id);
        return {
            msg: "Create course",
        };
    }
    async deleteCars(cars, { user_id }) {
        let res = await this.carsRepository.deleteCars(cars, user_id);
        if (res.length == 0) {
            return { msg: "cars topilmadi" };
        }
        return {
            msg: "cars deleted!",
        };
    }
    async updateCars(cars, updateCars, { user_id }) {
        let result = await this.carsRepository.updateCars(cars, updateCars, user_id);
        if (result.length == 0) {
            return {
                msg: "Cars not found!",
            };
        }
        return {
            msg: "Cars updated!",
        };
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cars_repo_1.CarsRepository])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map