"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
exports.databaseConfig = (0, config_1.registerAs)('database', () => ({
    url: process.env.DATABASE_URL ?? 'postgres://postgres@127.0.0.1/postgres',
}));
//# sourceMappingURL=database.config.js.map