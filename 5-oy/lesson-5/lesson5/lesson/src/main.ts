import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { App } from './app'
import { appConfig } from '@config'

setImmediate(async (): Promise<void> =>{
  const app = await NestFactory.create<INestApplication>(App)
  await app.listen(appConfig.port,appConfig.host)
})
