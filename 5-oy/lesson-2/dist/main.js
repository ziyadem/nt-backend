"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const _config_1 = require("./config");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
setImmediate(async () => {
    const app = await core_1.NestFactory.create(app_1.App, {
        cors: {
            origin: '*'
        }
    });
    const swaggerDocument = new swagger_1.DocumentBuilder()
        .setDescription('Aplication')
        .setTitle('Aplication for N74')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerDocument);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(_config_1.appConfig.port);
});
//# sourceMappingURL=main.js.map