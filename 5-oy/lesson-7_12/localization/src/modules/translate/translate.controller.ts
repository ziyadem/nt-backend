import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  Query,
} from '@nestjs/common';
import { TranslateService } from './translate.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Translate } from '@prisma/client';
import { TranslateCreateDto } from './dtos';
import { TranslateGetRequest } from './interfaces';

@ApiTags('Translate')
@Controller({
  path: 'localization-service/',
})
export class TranslateController {
  readonly #_service: TranslateService;

  constructor(service: TranslateService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getOne(
    @Query() query: TranslateGetRequest,
  ): Promise<Pick<Translate, 'content'>> {
    return await this.#_service.get(query);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('translate')
  @ApiBody({ type: TranslateCreateDto })
  @ApiConflictResponse({ description: 'Conflicts conflict' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async create(@Body() body: TranslateCreateDto): Promise<void> {
    return await this.#_service.create(body);
  }
}
