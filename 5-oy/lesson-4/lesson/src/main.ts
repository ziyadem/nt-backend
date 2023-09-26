import { NestFactory } from '@nestjs/core'
import { appConfig } from '@config'
import { AppModule } from './app'

setImmediate( async(): Promise<void>=>{
  const app = await NestFactory.createMicroservice(AppModule,appConfig)
  await app.listen()
})
