import {
  Body,
  Param,
  Delete,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Patch,
  Get,
} from '@nestjs/common';
import { LanguageService } from './language.service';
import {
  ApiBody,
  ApiTags,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { IsUuidPipe } from '@validators';
import { Language } from '@prisma/client';
import { LanguageCreateDto, LanguageUpdateDto } from './dtos';

@ApiTags('Language')
@Controller({
  path: 'language',
})
export class LanguageController {
  readonly #_service: LanguageService;

  constructor(service: LanguageService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getAll(): Promise<Pick<Language, 'id' | 'title'>[]> {
    return await this.#_service.getAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getOne(
    @Param('id', IsUuidPipe) id: string,
  ): Promise<Pick<Language, 'id' | 'title'>> {
    return await this.#_service.getOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  @ApiBody({ type: LanguageCreateDto })
  @ApiConflictResponse({ description: 'Conflicts conflict' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async create(@Body() body: LanguageCreateDto): Promise<void> {
    console.log(body);
    return await this.#_service.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  @ApiBody({ type: LanguageUpdateDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async update(
    @Body() body: LanguageUpdateDto,
    @Param('id', IsUuidPipe) id: string,
  ): Promise<void> {
    return await this.#_service.update({ ...body, id });
  }

  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async delete(@Param('id', IsUuidPipe) id: string): Promise<void> {
    return await this.#_service.delete(id);
  }
}
