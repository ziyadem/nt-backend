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
exports.KnexConfig = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const db_config_1 = require("../db/db_config");
let KnexConfig = class KnexConfig {
    constructor() {
        this.instance = (0, knex_1.default)(db_config_1.dbConfig);
    }
};
KnexConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], KnexConfig);
exports.KnexConfig = KnexConfig;
//# sourceMappingURL=knexConfig.js.map