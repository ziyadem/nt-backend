"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitsModule = void 0;
const common_1 = require("@nestjs/common");
const Knex_module_1 = require("../KnexConfig/Knex.module");
const fruits_controller_1 = require("./fruits.controller");
const fruits_service_1 = require("./fruits.service");
const fruits_repo_1 = require("./fruits.repo");
let FruitsModule = class FruitsModule {
};
FruitsModule = __decorate([
    (0, common_1.Module)({
        imports: [Knex_module_1.KnexConfigModule],
        controllers: [fruits_controller_1.FruitsController],
        providers: [fruits_service_1.FruitsService, fruits_repo_1.FruitsRepository],
    })
], FruitsModule);
exports.FruitsModule = FruitsModule;
//# sourceMappingURL=fruits.module.js.map