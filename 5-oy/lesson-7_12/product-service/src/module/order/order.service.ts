import { Injectable, ConflictException, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { Order } from '@prisma/client'
import { OrderCreateRequest, OrderDeleteRequest, OrderGetOneRequest } from './interfaces'


@Injectable()
export class OrderService {
  readonly #_prisma: PrismaService

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }

  async getAll(): Promise<Pick<Order, 'id' | 'user_id' | 'product_id'>[]> {
    let order = await this.#_prisma.order.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        user_id: true,
        product_id: true,
      },
    })
    return order
  }

  async getOne(payload: OrderGetOneRequest) {
    let order = await this.#_prisma.order.findMany({
      where: {
        user_id: payload.user_id,
        deletedAt: null,
      },
      select: {
        id: true,
        user_id: true,
        product_id: true,
      },
    })

    if (order.length == 0) {
      return new NotFoundException('order not found')
    }
    return order
  }

  async create(payload: OrderCreateRequest) {
    let foundedproduct = await this.#_checkProduct({product_id:payload.product_id})
    if(foundedproduct){
      return foundedproduct
    } 
    let order = await this.#_checkExistingOrder(payload)
    if (order) {
      return order
    }
    await this.#_prisma.order.create({
      data: {
        user_id: payload.user_id,
        product_id: payload.product_id,
      },
    })
    return { message: 'created successfully' }
  }

  async delete(payload: OrderDeleteRequest) {
    let order = await this.#_checkOrder({ id: payload.id })
    if (order) {
      return order
    }
    await this.#_prisma.order.delete({
      where: {
        id: payload.id,
      },
    })
    return { message: 'deleted' }
  }

  async #_checkExistingOrder(payload: { user_id: string; product_id: string }) {
    const order = await this.#_prisma.order.findFirst({
      where: {
        user_id: payload.user_id,
        product_id: payload.product_id,
        deletedAt: null,
      },
    })

    if (order) {
      return new ConflictException('order already exists')
    }
  }

  async #_checkOrder(payload: { id: string }) {
    const order = await this.#_prisma.order.findFirst({
      where: {
        id: payload.id,
        deletedAt: null,
      },
    })
    if (!order) {
      return new NotFoundException('order not found')
    }
  }

  async #_checkProduct(payload: { product_id: string }) {
    const product = await this.#_prisma.product.findFirst({
      where: {
        id: payload.product_id,
        deletedAt: null,
      },
      select: {
        id: true,
      },
    })

    if (!product) {
      return new NotFoundException('Product not found')
    }
  }
}
