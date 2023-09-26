import { Module } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { TranslateController } from './translate.controller';
import { PrismaService } from '@prisma';

@Module({
  providers: [TranslateService, PrismaService],
  controllers: [TranslateController],
})
export class TranslateModule {}
