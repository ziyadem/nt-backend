import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { App } from 'app';
import { appConfig, swaggerConfig } from '@config';

setImmediate(async (): Promise<void> => {
  console.log(appConfig);
  const app = await NestFactory.create<INestApplication>(App);

  const document = SwaggerModule.createDocument(app, swaggerConfig.options);

  SwaggerModule.setup(swaggerConfig.path, app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  });

  await app.listen(appConfig.port);
});

console.log(appConfig);
