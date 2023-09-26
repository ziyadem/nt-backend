import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { Command } from './enums'
import { Order } from '@prisma/client'
import { OrderService } from './order.service'
import { OrderCreateDto, OrderDeleteDto, OrderGetOneDto } from './dtos'

@Controller()
export class OrderController {
  readonly #_service: OrderService

  constructor(service: OrderService) {
    this.#_service = service
  }

  @MessagePattern(Command.ORDER_GETALL)
  getAll(): Promise<Pick<Order, 'id' | 'user_id' | 'product_id'>[]> {
    return this.#_service.getAll()
  }

  @MessagePattern(Command.ORDER_GETONE)
  getOne(@Payload() payload: OrderGetOneDto) {
    return this.#_service.getOne(payload)
  }

  @MessagePattern(Command.ORDER_CREATE)
  async create(@Payload() payload: OrderCreateDto) {
    return await this.#_service.create(payload)
  }

  @MessagePattern(Command.ORDER_DELETE)
  delete(@Payload() payload: OrderDeleteDto) {
    return this.#_service.delete(payload)
  }
}
