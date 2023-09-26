import type { Employee } from '@prisma/client'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { EpmloyeeService } from './employee.service'
import { EmployeeRetrieveAllDto } from './dtos'
import { PAGE_LIMIT, PAGE_OFFSET } from './constants'
import { Command } from './enums'

export class EmployeeController {
  readonly #_service: EpmloyeeService;

  constructor(service: EpmloyeeService) {
    this.#_service = service;
  }

  @MessagePattern(Command.EMPLOYE_RETRIVE_ALL)
  employeeRetrieveAll(
    @Payload() payload: EmployeeRetrieveAllDto,
  ): Promise<Pick<Employee, 'id' | 'name'>[]> {
    return this.#_service.employeeRetrieveAll({
      pageLimit: payload.pageLimit ?? PAGE_LIMIT,
      pageOffset: payload.pageOffset ?? PAGE_OFFSET,
    });
  }
}
