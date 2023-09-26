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
exports.AnimalsService = void 0;
const common_1 = require("@nestjs/common");
const animals_repo_1 = require("./animals.repo");
let AnimalsService = class AnimalsService {
    constructor(animalsRepository) {
        this.animalsRepository = animalsRepository;
    }
    async getAnimals(user) {
        const { user_id } = user;
        return this.animalsRepository.getAnimals(user_id);
    }
    async getAnimal(animals, { user_id }) {
        let res = await this.animalsRepository.getOne(animals, user_id);
        if (res.length == 0)
            return new common_1.NotFoundException(`Fruit ${animals.id} not found!`);
        return res;
    }
    async createAnimals(animals, user) {
        const { user_id } = user;
        let newCourse = await this.animalsRepository.createAnimals(animals, user_id);
        return {
            msg: "Create animals",
        };
    }
    async updateAnimal(animal, updateAnimal, { user_id }) {
        let result = await this.animalsRepository.updateAnimals(animal, updateAnimal, user_id);
        if (result.length == 0) {
            return {
                msg: "Animal not found!",
            };
        }
        return {
            msg: "animal updated!",
        };
    }
    async deleteAnimal(animal, { user_id }) {
        let res = await this.animalsRepository.deleteAnimals(animal, user_id);
        if (res.length == 0) {
            return { msg: "animals topilmadi" };
        }
        return {
            msg: "animals deleted!",
        };
    }
};
AnimalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [animals_repo_1.AnimalsRepository])
], AnimalsService);
exports.AnimalsService = AnimalsService;
//# sourceMappingURL=animals.service.js.map