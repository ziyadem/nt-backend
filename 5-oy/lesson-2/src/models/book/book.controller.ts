import {  Controller,Body, HttpCode, HttpStatus,Post } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookCreateDto } from "./dto/book-create.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Book')
@Controller({
  path: '/book-srvice/',
  version:'1'
})
export class BookController {
  private readonly service: BookService;
  constructor(service: BookService) {
    this.service = service;
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async BookCreate(@Body() body: BookCreateDto): Promise<void> {
    this.service.bookCreate(body);
  }
}