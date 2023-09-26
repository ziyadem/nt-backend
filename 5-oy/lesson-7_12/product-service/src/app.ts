import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { dbConfig } from '@config'
import { OrderModule, ProductModule } from '@module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
    }),
    ProductModule,
    OrderModule
  ],
})
export class App {}
