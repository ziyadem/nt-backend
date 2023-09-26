import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config';
import { BookModule } from '@module';
import { AuthorModulle } from '@module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
    }),
    BookModule,
    AuthorModulle,
  ],
})
export class App {}
