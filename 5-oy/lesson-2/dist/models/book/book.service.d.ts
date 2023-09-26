import { PrismaService } from "prisma/prisma.service";
import type { BookCreateRequest } from "./interfaces";
export declare class BookService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    bookCreate(payload: BookCreateRequest): Promise<void>;
}
