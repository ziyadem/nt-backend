"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
exports.appConfig = {
    mode: process.env.APP_MODE ?? 'development',
    name: process.env.APP_NAME ?? 'geteway',
    host: process.env.APP_HOST ?? "0.0.0.0",
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000
};
//# sourceMappingURL=app.config.js.map