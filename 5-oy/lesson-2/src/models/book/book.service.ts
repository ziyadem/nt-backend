import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import type { BookCreateRequest } from "./interfaces";


@Injectable()
export class BookService{
     private readonly prisma:PrismaService
    constructor(prisma:PrismaService){
        this.prisma = prisma
    }

    async bookCreate(payload:BookCreateRequest):Promise<void>{
        this.prisma.book.create({
            data:{
                title: payload.title,
                price: payload.price
            }
        })
    }

}