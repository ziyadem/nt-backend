import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";

@Module({
    providers: [PrismaService,BookService],
    controllers:[BookController]
})
export class BookModule {}