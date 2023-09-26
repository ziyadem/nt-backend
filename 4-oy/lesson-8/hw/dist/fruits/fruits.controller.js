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
exports.FruitsController = void 0;
const common_1 = require("@nestjs/common");
const fruits_service_1 = require("./fruits.service");
const auth_guard_1 = require("../auth/guard/auth.guard");
const getUserDecorator_1 = require("../auth/userInfo/getUserDecorator");
let FruitsController = class FruitsController {
    constructor(fruitsService) {
        this.fruitsService = fruitsService;
    }
    async getFruits(user) {
        return await this.fruitsService.getFruits(user);
    }
    async getFruit(fruits, user) {
        return await this.fruitsService.getFruit(fruits, user);
    }
    async createFruit(fruit, user) {
        return await this.fruitsService.createFruit(fruit, user);
    }
    async deleteFruit(fruit, user) {
        return await this.fruitsService.deleteFruit(fruit, user);
    }
    async updateFruit(fruit, updatedFruit, user) {
        return await this.fruitsService.updateFruit(fruit, updatedFruit, user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FruitsController.prototype, "getFruits", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FruitsController.prototype, "getFruit", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FruitsController.prototype, "createFruit", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FruitsController.prototype, "deleteFruit", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], FruitsController.prototype, "updateFruit", null);
FruitsController = __decorate([
    (0, common_1.Controller)("fruits"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [fruits_service_1.FruitsService])
], FruitsController);
exports.FruitsController = FruitsController;
//# sourceMappingURL=fruits.controller.js.map