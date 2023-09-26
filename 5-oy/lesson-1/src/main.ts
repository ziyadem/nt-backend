import { NestFactory } from '@nestjs/core'
import { App } from './app'
import { appConfig } from './configs'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

setImmediate(async () =>{
  const app = await NestFactory.create(App)

  const config =new DocumentBuilder()
  .setDescription('the user Api description')
  .build()

  const document=SwaggerModule.createDocument(app,config)

  SwaggerModule.setup('/docs',app,document)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(appConfig().port)

})
