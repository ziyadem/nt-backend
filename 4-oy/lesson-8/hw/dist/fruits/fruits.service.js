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
exports.FruitsService = void 0;
const common_1 = require("@nestjs/common");
const fruits_repo_1 = require("./fruits.repo");
let FruitsService = class FruitsService {
    constructor(fruitRepository) {
        this.fruitRepository = fruitRepository;
    }
    async getFruits(user) {
        const { user_id } = user;
        return this.fruitRepository.getFruits(user_id);
    }
    async getFruit(fruit, { user_id }) {
        let res = await this.fruitRepository.getOne(fruit, user_id);
        if (res.length == 0)
            return new common_1.NotFoundException(`Fruit ${fruit.id} not found!`);
        return res;
    }
    async createFruit(fruit, user) {
        const { user_id } = user;
        let newCourse = await this.fruitRepository.createCars(fruit, user_id);
        return {
            msg: "Create fruit",
        };
    }
    async updateFruit(fruit, updateFruit, { user_id }) {
        let result = await this.fruitRepository.updateFruit(fruit, updateFruit, user_id);
        if (result.length == 0) {
            return {
                msg: "Fruit not found!",
            };
        }
        return {
            msg: "Fruit updated!",
        };
    }
    async deleteFruit(fruit, { user_id }) {
        let res = await this.fruitRepository.deleteFruit(fruit, user_id);
        if (res.length == 0) {
            return { msg: "fruit topilmadi" };
        }
        return {
            msg: "fruit deleted!",
        };
    }
};
FruitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fruits_repo_1.FruitsRepository])
], FruitsService);
exports.FruitsService = FruitsService;
//# sourceMappingURL=fruits.service.js.map