import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { Market } from '@prisma/client'
import { MarketService } from './market.service'
import { Command } from './enums'
import {
  MarketGetOneDto, 
  MarketCreateDto,
  MarketDeleteDto,
  MarketUpdateDto,
} from './dtos'

@Controller()
export class MarketController {
  readonly #_service: MarketService

  constructor(service: MarketService) {
    this.#_service = service
  }

  @MessagePattern(Command.MARKET_GETALL)
  getAll(): Promise<Pick<Market, 'id' | 'name' | 'address'>[]> {
    return this.#_service.getAll()
  }

  @MessagePattern(Command.MARKET_GETONE)
  getOne(
    @Payload() payload: MarketGetOneDto,
  ) {
    return this.#_service.getOne(payload)
  }

  @MessagePattern(Command.MARKET_CREATE)
  async create(@Payload() payload: MarketCreateDto) {
    return await this.#_service.create(payload)
  }

  @MessagePattern(Command.MARKET_UPDATE)
  update(@Payload() payload: MarketUpdateDto) {
    return this.#_service.update(payload)
  }

  @MessagePattern(Command.MARKET_DELETE)
  delete(@Payload() payload: MarketDeleteDto) {
    return this.#_service.delete(payload)
  }
}
