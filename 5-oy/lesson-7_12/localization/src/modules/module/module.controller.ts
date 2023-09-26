import { Body,Param,Delete, Controller, HttpCode, HttpStatus, Post,Patch, Get } from "@nestjs/common";
import { ModuleService } from "./module.service";
import { ModuleCreateDto, ModuleUpdateDto } from "./dtos";
import {
  ApiBody,
  ApiTags,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { IsUuidPipe } from "@validators";
import { Module } from "@prisma/client";

@ApiTags('Module')
@Controller({
  path: 'module',
})
export class ModuleController {
  readonly #_service: ModuleService;

  constructor(service: ModuleService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getAll(): Promise<Pick<Module,"id" | "name">[]> {
    return await this.#_service.getAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getOne(
    @Param('id', IsUuidPipe) id: string,
  ): Promise<Pick<Module,"id" | "name">> {
    return await this.#_service.getOne( id );
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  @ApiBody({ type: ModuleCreateDto })
  @ApiConflictResponse({ description: 'Conflicts conflict' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async create(@Body() body: ModuleCreateDto): Promise<void> {
    console.log(body);
    return await this.#_service.create(body);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  @ApiBody({ type: ModuleUpdateDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async update(
    @Body() body: ModuleUpdateDto,
    @Param('id', IsUuidPipe) id: string,
  ): Promise<void> {
    return await this.#_service.update({ ...body, id });
  }

  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async delete(@Param('id', IsUuidPipe) id: string,
  ): Promise<void> {
    return await this.#_service.delete( id );
  }
}