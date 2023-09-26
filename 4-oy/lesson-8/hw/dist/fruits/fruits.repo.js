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
exports.FruitsRepository = void 0;
const common_1 = require("@nestjs/common");
const knexConfig_1 = require("../KnexConfig/knexConfig");
class FruitsRepository {
    getFruits(user_id) {
        const knex = this.knexConfig.instance;
        return knex.select("*").from("fruits").where({ created_by: user_id });
    }
    createCars(fruit, user_id) {
        const knex = this.knexConfig.instance;
        const { title, price } = fruit;
        return knex("fruits").insert({
            title,
            price,
            created_by: user_id,
        });
    }
    getOne(fruit, user_id) {
        const knex = this.knexConfig.instance;
        const { id } = fruit;
        return knex.select("*").from("fruits").where({ created_by: user_id, id });
    }
    deleteFruit(fruit, user_id) {
        const knex = this.knexConfig.instance;
        const { id: fruit_id } = fruit;
        return knex("fruits")
            .returning("*")
            .where({ created_by: user_id, id: fruit_id })
            .del();
    }
    updateFruit(fruit, updateFruit, fruit_id) {
        const knex = this.knexConfig.instance;
        return knex("fruits")
            .returning("*")
            .where({ created_by: fruit_id, id: fruit.id })
            .update(updateFruit);
    }
}
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", knexConfig_1.KnexConfig)
], FruitsRepository.prototype, "knexConfig", void 0);
exports.FruitsRepository = FruitsRepository;
//# sourceMappingURL=fruits.repo.js.map