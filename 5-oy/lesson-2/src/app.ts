import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from '@config';
import { BookModule } from '@models';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[databaseConfig],
      isGlobal:true
    }),
    BookModule
  ],
})
export class App{}
