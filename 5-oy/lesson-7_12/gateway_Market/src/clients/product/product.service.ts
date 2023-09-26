import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ClientTCP } from '@nestjs/microservices'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom, timeout } from 'rxjs'
import { OrderCommand, ProductCommand } from './enums'
import { OrderCreateRequest, OrderDeleteRequest, OrderGetOneRequest, ProductCreateRequest, ProductDeleteRequest, ProductGetOneRequest, ProductUpdateRequest } from './interfaces'

@Injectable()
export class ProductService {
  readonly #_client: ClientTCP;
  readonly #_timeout: number;

  constructor(config: ConfigService) {
    this.#_client = new ClientTCP({
      host: config.getOrThrow<string>('product.host'),
      port: config.getOrThrow<number>('product.port'),
    });
    this.#_timeout = config.getOrThrow<number>('product.timeout');
  }

  async productCreate(payload: ProductCreateRequest): Promise<any> {
    return this.#_send<any, ProductCreateRequest>(
      ProductCommand.PRODUCT_CREATE,
      payload,
    );
  }

  async productUpdate(payload: ProductUpdateRequest): Promise<any> {
    return this.#_send<any, ProductUpdateRequest>(
      ProductCommand.PRODUCT_UPDATE,
      payload,
    );
  }

  async productDelete(payload: ProductDeleteRequest): Promise<any> {
    return this.#_send<any, ProductDeleteRequest>(
      ProductCommand.PRODUCT_DELETE,
      payload,
    );
  }

  async productGetOne(payload: ProductGetOneRequest): Promise<any> {
    return this.#_send<any, ProductGetOneRequest>(
      ProductCommand.PRODUCT_GETONE,
      payload,
    );
  }

  async productGetAll() {
    return this.#_send<any, any>(ProductCommand.PRODUCT_GETALL, {
      data: 'product get all',
    });
  }

  async orderCreate(payload: OrderCreateRequest): Promise<any> {
    console.log(payload,'server');
    return this.#_send<any, OrderCreateRequest>(
      OrderCommand.ORDER_CREATE,
      payload,
    );
  }

  async orderDelete(payload: OrderDeleteRequest): Promise<any> {
    return this.#_send<any, OrderDeleteRequest>(
      OrderCommand.ORDER_DELETE,
      payload,
    );
  }

  async orderGetOne(payload: OrderGetOneRequest): Promise<any> {
    return this.#_send<any, OrderGetOneRequest>(
      OrderCommand.ORDER_GETONE,
      payload,
    );
  }

  async orderGetAll() {
    return this.#_send<any, any>(OrderCommand.ORDER_GETALL, {
      data: 'product get all',
    });
  }

  async #_connect(): Promise<void> {
    await this.#_client.connect();
  }

  #_disConnect(): void {
    this.#_client.close();
  }

  async #_send<TResponse, TRequest>(
    pattern: string,
    payload: TRequest,
  ): Promise<TResponse> {
    console.log(pattern, payload);
    try {
      return await firstValueFrom(
        this.#_client
          .send<TResponse, TRequest>(pattern, payload)
          .pipe(timeout(this.#_timeout)),
      );
    } catch (error: unknown) {
      console.log(error, 'error');
      throw new InternalServerErrorException(error);
    }
  }
}
