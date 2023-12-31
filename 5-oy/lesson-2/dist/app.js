"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const _config_1 = require("./config");
const _models_1 = require("./models");
let App = exports.App = class App {
};
exports.App = App = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [_config_1.databaseConfig],
                isGlobal: true
            }),
            _models_1.BookModule
        ],
    })
], App);
//# sourceMappingURL=app.js.map