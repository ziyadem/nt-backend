import { NestFactory } from '@nestjs/core';
import { App } from './app';
import { appConfig } from '@config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


setImmediate(async() => {
  const app = await NestFactory.create(App,{
    cors:{
      origin:'*'
    }
  })

  const swaggerDocument=new DocumentBuilder()
  .setDescription('Aplication')
  .setTitle('Aplication for N74')
  .build()
  
  const document=SwaggerModule.createDocument(app,swaggerDocument)
  SwaggerModule.setup('api',app,document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(appConfig.port);
})

