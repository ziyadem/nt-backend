import { VerifyAccessInterceptor } from '@interceptors';
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
  UseInterceptors,
} from '@nestjs/common';
import { OrderGetOneRequest } from '@clients';
import {
  ApiTags,
  ApiBody,
  ApiParam,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger'
import { ProductService } from '@clients'
import { ProductCreateDto } from './dtos';
import { ProductUpdateDto } from './dtos/product-update.dto';
import { OrderCreateDto } from './dtos/order-create.dto';

@ApiTags('Product')
@Controller({
  path: 'product-service',
  version: '1',
})
export class ProductController {
  readonly #_service: ProductService;

  constructor(service: ProductService) {
    this.#_service = service;
  }

  // getAll
  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  productGetAll() {
    return this.#_service.productGetAll();
  }
  // getAll-Order
  @HttpCode(HttpStatus.OK)
  @Get('/order/get-all')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  orderGetAll() {
    return this.#_service.orderGetAll();
  }

  // getOne
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  productGetOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.#_service.productGetOne({ id });
  }
  // getOne-Order
  @UseInterceptors(VerifyAccessInterceptor)
  @HttpCode(HttpStatus.OK)
  @Post('/order')
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  orderGetOne(@Body() user_id: OrderGetOneRequest) {
    return this.#_service.orderGetOne(user_id);
  }

  // create
  @HttpCode(HttpStatus.OK)
  @Post('/create')
  @ApiBody({ type: ProductCreateDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  productCreate(@Body() body: ProductCreateDto) {
    return this.#_service.productCreate(body);
  }

  //order create
  @UseInterceptors(VerifyAccessInterceptor)
  @HttpCode(HttpStatus.OK)
  @Post('/order/create')
  @ApiBody({ type: OrderCreateDto })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  orderCreate(@Body() body: OrderCreateDto) {
    return this.#_service.orderCreate(body);
  }

  // update
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  @ApiBody({ type: ProductUpdateDto })
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  productUpdate(
    @Body() body: ProductUpdateDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.#_service.productUpdate({
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
  productDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.#_service.productDelete({ id });
  }

  // delete-order
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(VerifyAccessInterceptor)
  @Delete('/order/:id')
  @ApiParam({ name: 'id', example: 'e6fb9ee2-6f5d-46bb-8b04-3b4a9b716419' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  orderDelete(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body:any
    )
    {
    return this.#_service.orderDelete({ ...body,id});
  }
}
