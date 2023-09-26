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
exports.AnimalsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guard/auth.guard");
const animals_service_1 = require("./animals.service");
const getUserDecorator_1 = require("../auth/userInfo/getUserDecorator");
let AnimalsController = class AnimalsController {
    constructor(animalsService) {
        this.animalsService = animalsService;
    }
    async getAnimals(user) {
        return await this.animalsService.getAnimals(user);
    }
    async getAnimal(animals, user) {
        return await this.animalsService.getAnimal(animals, user);
    }
    async createAnimals(animals, user) {
        return await this.animalsService.createAnimals(animals, user);
    }
    async deleteFruit(animals, user) {
        return await this.animalsService.deleteAnimal(animals, user);
    }
    async updateAnimal(animal, updateAnimal, user) {
        return await this.animalsService.updateAnimal(animal, updateAnimal, user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "getAnimals", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "getAnimal", null);
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "createAnimals", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "deleteFruit", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, getUserDecorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "updateAnimal", null);
AnimalsController = __decorate([
    (0, common_1.Controller)("animals"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [animals_service_1.AnimalsService])
], AnimalsController);
exports.AnimalsController = AnimalsController;
//# sourceMappingURL=animals.controller.js.map