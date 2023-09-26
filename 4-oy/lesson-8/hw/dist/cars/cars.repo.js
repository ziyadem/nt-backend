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
exports.CarsRepository = void 0;
const common_1 = require("@nestjs/common");
const knexConfig_1 = require("../KnexConfig/knexConfig");
const cars = [];
class CarsRepository {
    getCars(user_id) {
        const knex = this.knexConfig.instance;
        return knex.select("*").from("cars").where({ created_by: user_id });
    }
    createCars(cars, user_id) {
        const knex = this.knexConfig.instance;
        const { title, price, color } = cars;
        return knex("cars").insert({
            title,
            price,
            color,
            created_by: user_id,
        });
    }
    getOne(cars, user_id) {
        const knex = this.knexConfig.instance;
        const { id } = cars;
        return knex.select("*").from("cars").where({ created_by: user_id, id });
    }
    deleteCars(cars, user_id) {
        const knex = this.knexConfig.instance;
        const { id: cars_id } = cars;
        return (knex("cars")
            .returning("*")
            .where({ created_by: user_id, id: cars_id })
            .del());
    }
    updateCars(cars, updateCars, cars_id) {
        const knex = this.knexConfig.instance;
        return knex("cars")
            .returning("*")
            .where({ created_by: cars_id, id: cars.id })
            .update(updateCars);
    }
}
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", knexConfig_1.KnexConfig)
], CarsRepository.prototype, "knexConfig", void 0);
exports.CarsRepository = CarsRepository;
//# sourceMappingURL=cars.repo.js.map