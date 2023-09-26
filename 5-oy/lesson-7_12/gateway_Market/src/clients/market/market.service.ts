import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, timeout } from 'rxjs';
import { MarketCreateRequest, MarketDeleteRequest, MarketRetrieveAllResponse, MarketUpdateRequest } from './interfaces';
import { MarketCommand } from './enums';

@Injectable()
export class MarketService {
  readonly #_client: ClientTCP;
  readonly #_timeout: number;

  constructor(config: ConfigService) {
    this.#_client = new ClientTCP({
      host: config.getOrThrow<string>('market.host'),
      port: config.getOrThrow<number>('market.port'),
    });

    this.#_timeout = config.getOrThrow<number>('market.timeout');
  }

  async marketCreate(payload: MarketCreateRequest): Promise<any> {
    return this.#_send<any, MarketCreateRequest>(
      MarketCommand.MARKET_CREATE,
      payload,
    )
  }

  async marketUpdate(payload: MarketUpdateRequest): Promise<any> {
    console.log(payload); 
    return this.#_send<any, MarketUpdateRequest>(
      MarketCommand.MARKET_UPDATE,
      payload,
    );
  }

  async marketDelete(payload: MarketDeleteRequest): Promise<any> {
    return this.#_send<any, MarketDeleteRequest>(
      MarketCommand.MARKET_DELETE,
      payload,
    );
  }

  async marketGetOne(payload: MarketDeleteRequest): Promise<any> {
    return this.#_send<any, MarketDeleteRequest>(
      MarketCommand.MARKET_GETONE,
      payload,
    );
  }

  async marketGetAll() {
    return this.#_send<any, any>(
      MarketCommand.MARKET_GETALL,
      {data:'market get all'}
    );
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
    console.log(pattern,payload);
    
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
