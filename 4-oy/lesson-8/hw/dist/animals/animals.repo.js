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
exports.AnimalsRepository = void 0;
const common_1 = require("@nestjs/common");
const knexConfig_1 = require("../KnexConfig/knexConfig");
class AnimalsRepository {
    getAnimals(user_id) {
        const knex = this.knexConfig.instance;
        return knex.select("*").from("animals").where({ created_by: user_id });
    }
    createAnimals(animals, user_id) {
        const knex = this.knexConfig.instance;
        const { title, color } = animals;
        return knex("animals").insert({
            title,
            color,
            created_by: user_id,
        });
    }
    getOne(animals, user_id) {
        const knex = this.knexConfig.instance;
        const { id } = animals;
        return knex.select("*").from("animals").where({ created_by: user_id, id });
    }
    deleteAnimals(animals, user_id) {
        const knex = this.knexConfig.instance;
        const { id: animals_id } = animals;
        return knex("fruits")
            .returning("*")
            .where({ created_by: user_id, id: animals_id })
            .del();
    }
    updateAnimals(animals, updateAnimals, animals_id) {
        const knex = this.knexConfig.instance;
        return knex("animals")
            .returning("*")
            .where({ created_by: animals_id, id: animals.id })
            .update(updateAnimals);
    }
}
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", knexConfig_1.KnexConfig)
], AnimalsRepository.prototype, "knexConfig", void 0);
exports.AnimalsRepository = AnimalsRepository;
//# sourceMappingURL=animals.repo.js.map