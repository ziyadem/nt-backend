import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseUUIDPipe,
  Body,
} from '@nestjs/common';
import { ApiParam, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { BookService } from './book.service';
import { BookCreateDto, BookUpdateDto } from './dtos';
import { Book } from '@prisma/client';
import { IsUuidPipe } from '../../validators/is-uuid.validation';

@Controller({
  path: 'book-service/',
  version: '1',
})
export class BookController {
  constructor(readonly service: BookService) {
    this.service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get('all')
  @ApiOkResponse({
    schema: {
      example: [
        {
          id: 1,
          title: 'Molxona',
        },
      ],
    },
  })
  bookRetrieveAll(): Promise<Omit<Book, 'authorId' | 'createAt'>[]> {
    return this.service.bookRetrieveAll();
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post()
  @ApiBody({ type: BookCreateDto })
  async bookCreate(@Body() body: BookCreateDto): Promise<void> {
    await this.service.bookCreate(body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBody({ type: BookUpdateDto })
  async bookUpdate(
    @Param('id', IsUuidPipe) id: string,
    @Body() body: BookUpdateDto,
  ): Promise<void> {
    await this.service.bookUpdate({
      ...body,
      id,
    });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  async bookDelete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.service.bookDelete({ id });
  }
}
