import type { Employee } from '@prisma/client'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { EmployeeService } from './employee.service'
import { EmployeeRetrieveAllDto } from './dtos'
import { PAGE_LIMIT, PAGE_OFFSET } from './constants'
import { Command } from './enums'
import { Controller } from '@nestjs/common'
import { EmployeeGetInfoRequest } from './interfaces'

@Controller()
export class EmployeeController {
  readonly #_service: EmployeeService

  constructor(service: EmployeeService) {
    this.#_service = service
  }

  @MessagePattern(Command.EMPLOYEE_RETRIEVE_ALL)
  employeeRetrieveAll(): Promise<[]> {
    return this.#_service.employeeRetrieveAll()
  }

  // @MessagePattern(Command.EMPLOYEE_RETRIEVE_ALL)
  // employeeRetrieveAll(
  //   @Payload() payload: EmployeeRetrieveAllDto,
  // ): Promise<Pick<Employee, 'id' | 'name'>[]> {
  //   return this.#_service.employeeRetrieveAll({
  //     pageLimit: payload.pageLimit ?? PAGE_LIMIT,
  //     pageOffset: payload.pageOffset ?? PAGE_OFFSET,
  //   })
  // }

  // @MessagePattern(Command.EMPLOYEE_RETRIEVE_ALL)
  // employeeGetInfo(
  //   @Payload() payload: EmployeeGetInfoRequest,
  // ): Promise<Pick<Employee, 'id' | 'name'>> {
  //   return this.#_service.employeeGetInfo({
  //     payload:payload
  //   })
  // }
}
