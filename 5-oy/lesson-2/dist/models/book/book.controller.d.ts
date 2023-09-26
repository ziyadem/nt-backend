import { BookService } from "./book.service";
import { BookCreateDto } from "./dto/book-create.dto";
export declare class BookController {
    private readonly service;
    constructor(service: BookService);
    BookCreate(body: BookCreateDto): Promise<void>;
}
