import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Get,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { ApiBody, ApiParam, ApiOkResponse } from '@nestjs/swagger';
import { Author } from '@prisma/client';
import { IsUuidPipe } from '@validators';
import { AuthorCreateDto, AuthorUpdateDto } from './dtos';

@Controller({
  path: 'author-service/',
  version: '1',
})
export class AuthorController {
  constructor(readonly service: AuthorService) {
    this.service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get('all')
  @ApiOkResponse({
    schema: {
      example: [
        {
          id: 1,
          fname: 'ziyadem',
          lname: 'maxkamova',
          email: 'ziyadem@gmail.com',
          password: 'ziyadem123',
        },
      ],
    },
  })
  authorRetriveAll(): Promise<Author[]> {
    return this.service.authorRetrieveAll();
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post()
  @ApiBody({ type: AuthorCreateDto })
  async authorCreate(@Body() body: AuthorCreateDto): Promise<void> {
    await this.service.authorCreate(body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBody({ type: AuthorUpdateDto })
  async authorUpdate(
    @Param('id', IsUuidPipe) id: string,
    @Body() body: AuthorUpdateDto,
  ): Promise<void> {
    await this.service.authorUpdate({
      ...body,
      id,
    });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  async authorDelete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.service.authorDelete({ id });
  }
}
