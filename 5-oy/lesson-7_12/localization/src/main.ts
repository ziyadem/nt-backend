import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { App } from './app';
import { appConfig, swaggerConfig } from '@configs';
import { RpcExceptionFilter } from 'filters';

setImmediate(async (): Promise<void> => {
  const app = await NestFactory.create<INestApplication>(App);

  const document = SwaggerModule.createDocument(app, swaggerConfig.options);

  SwaggerModule.setup(swaggerConfig.path, app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  });

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        stopAtFirstError: true,
      }),
    );

  app.useGlobalFilters(new RpcExceptionFilter())

  await app.listen(appConfig.port);
});

