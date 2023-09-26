import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MarketService } from '@clients';
import {
  ApiTags,
  ApiBody,
  ApiParam,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { MarketCreateDto } from './dtos';

@ApiTags('Market')
@Controller({
  path: 'market-service',
  version: '1',
})
export class MarketController {
  readonly #_service: MarketService;

  constructor(service: MarketService) {
    this.#_service = service;
  }

  // getAll
  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  marketGetAll() {
    return this.#_service.marketGetAll();
  }

  // getOne
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  marketGetOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.#_service.marketGetOne({ id });
  }

  // create
  @HttpCode(HttpStatus.OK)
  @Post('/create')
  @ApiBody({ type: MarketCreateDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  marketCreate(@Body() body: MarketCreateDto) {
    return this.#_service.marketCreate(body);
  }

  // update
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  @ApiBody({ type: MarketCreateDto })
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  marketUpdate(
    @Body() body: MarketCreateDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.#_service.marketUpdate({
      ...body,
      id,
    });
  }

  // delete
  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  marketDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.#_service.marketDelete({ id });
  }
}
