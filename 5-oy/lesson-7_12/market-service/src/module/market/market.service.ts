import { Injectable, ConflictException, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { Market } from '@prisma/client'
import {
  MarketGetOneRequest,
  MarketCreateRequest,
  MarketUpdateRequest,
  MarketDeleteRequest,
} from './interfaces'

@Injectable()
export class MarketService {
  readonly #_prisma: PrismaService

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }

  async getAll(): Promise<Pick<Market, 'id' | 'name' | 'address'>[]> {
    let market = await this.#_prisma.market.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        address: true,
      },
    })
    return market
  }

  async getOne(payload: MarketGetOneRequest) {
    let market = await this.#_prisma.market.findMany({
      where: {
        id: payload.id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        address: true,
      },
    })

    if (market.length == 0) {
      return new NotFoundException('Market not found')
    }
    return market
  }

  async create(payload: MarketCreateRequest) {
    let market = await this.#_checkExistingMarket({ name: payload.name })
    if (market) {
      return market
    }
    await this.#_prisma.market.create({
      data: {
        name: payload.name,
        address: payload.address,
      },
    })
    return { message: 'created successfully' }
  }

  async update(payload: MarketUpdateRequest) {
    let market = await this.#_checkMarket({ id: payload.id })
    if (market) {
      return market
    }
    await this.#_prisma.market.updateMany({
      where: {
        id: payload.id,
      },
      data: {
        name: payload.name,
        address: payload.address,
      },
    })
    return { message: 'updated successfully' }
  }

  async delete(payload: MarketDeleteRequest) {
    let market = await this.#_checkMarket({ id: payload.id })
    if (market) {
      return market
    }
    await this.#_prisma.market.delete({
      where: {
        id: payload.id,
      },
    })
    return { message: 'deleted' }
  }

  async #_checkExistingMarket(payload: { name: string }) {
    const user = await this.#_prisma.market.findFirst({
      where: {
        name: payload.name,
        deletedAt: null,
      },
    })

    if (user) {
      return new ConflictException('Market already exists')
    }
  }

  async #_checkMarket(payload: { id: string }) {
    const user = await this.#_prisma.market.findFirst({
      where: {
        id: payload.id,
        deletedAt: null,
      },
      select: {
        id: true,
      },
    })

    if (!user) {
      return new NotFoundException('Market not found')
    }
  }
}
