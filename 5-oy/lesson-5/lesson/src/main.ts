import type { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { App } from 'app'
import { appConfig } from '@config'
import { VerifyAccessInterceptor } from 'interceptors'

setImmediate(async (): Promise<void> =>{
  const app = await NestFactory.create<INestApplication>(App)
  await app.listen(appConfig.port,appConfig.host)

})
