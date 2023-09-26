import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { LanguageModule, ModuleModule, TranslateModule } from '@modules'
import { dbConfig } from '@configs'


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig ],
      isGlobal: true,
    }),
    TranslateModule,
    ModuleModule,
    LanguageModule
  ],
})
export class App {}
