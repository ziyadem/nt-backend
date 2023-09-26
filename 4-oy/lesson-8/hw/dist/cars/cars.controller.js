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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const auth_guard_1 = require("../auth/guard/auth.guard");
const getUserDecorator_1 = require("../auth/userInfo/getUserDecorator");
let CarsController = class CarsController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getCarses(user) {
        return await this.courseService.getCarses(user);
    }
    async getCars(course, user) {
        return await this.courseService.getCars(course, user);
    }
    async createCars(cars, user) {
        return await this.courseService.createCars(cars, user);
    }
    async deleteCars(cars, user) {
        return await this.courseService.deleteCars(cars, user);
    }
    async updateCars(cars, updatedCars, user) {
        return await this.courseService.updateCars(cars, updatedCars, user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCarses", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCars", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createCars", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "deleteCars", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updateCars", null);
CarsController = __decorate([
    (0, common_1.Controller)("cars"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map