"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsModule = void 0;
const common_1 = require("@nestjs/common");
const animals_service_1 = require("./animals.service");
const animals_controller_1 = require("./animals.controller");
const Knex_module_1 = require("../KnexConfig/Knex.module");
const animals_repo_1 = require("./animals.repo");
let AnimalsModule = class AnimalsModule {
};
AnimalsModule = __decorate([
    (0, common_1.Module)({
        imports: [Knex_module_1.KnexConfigModule],
        controllers: [animals_controller_1.AnimalsController],
        providers: [animals_service_1.AnimalsService, animals_repo_1.AnimalsRepository],
    })
], AnimalsModule);
exports.AnimalsModule = AnimalsModule;
//# sourceMappingURL=animals.module.js.map