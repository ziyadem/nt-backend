import { Injectable, ConflictException, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { Product } from '@prisma/client'
import { ProductCreateRequest, ProductGetOneRequest, ProductUpdateRequest } from './interfaces'

@Injectable()
export class ProductService {
  readonly #_prisma: PrismaService

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }

  async getAll(): Promise<Pick<Product, 'id' | 'name' | 'price'>[]> {
    let product = await this.#_prisma.product.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        price: true,
      },
    })
    return product
  }

  async getOne(payload: ProductGetOneRequest) {
    let product = await this.#_prisma.product.findMany({
      where: {
        id: payload.id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        price: true,
      },
    })

    if (product.length == 0) {
      return new NotFoundException('product not found')
    }
    return product
  }

  async create(payload: ProductCreateRequest) {
    let product = await this.#_checkExistingProduct({ name: payload.name })
    if (product) {
      return product
    }
    await this.#_prisma.product.create({
      data: {
        name: payload.name,
        price: payload.price,
      },
    })
    return { message: 'created successfully' }
  }

  async update(payload: ProductUpdateRequest) {
    let product = await this.#_checkProduct({ id: payload.id })
    if (product) {
      return product
    }
    await this.#_prisma.product.updateMany({
      where: {
        id: payload.id,
      },
      data: {
        name: payload.name,
        price: payload.price,
      },
    })
    return { message: 'updated successfully' }
  }

  async delete(payload: ProductUpdateRequest) {
    let product = await this.#_checkProduct({ id: payload.id })
    if (product) {
      return product
    }
    await this.#_prisma.product.delete({
      where: {
        id: payload.id,
      },
    })
    return { message: 'deleted' }
  }

  async #_checkExistingProduct(payload: { name: string }) {
    const product = await this.#_prisma.product.findFirst({
      where: {
        name: payload.name,
        deletedAt: null,
      },
    })

    if (product) {
      return new ConflictException('Product already exists')
    }
  }

  async #_checkProduct(payload: { id: string }) {
    const product = await this.#_prisma.product.findFirst({
      where: {
        id: payload.id,
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
