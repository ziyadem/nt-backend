import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  providers: [PrismaService, AuthorService],
  controllers: [AuthorController],
})
export class AuthorModulle {}
