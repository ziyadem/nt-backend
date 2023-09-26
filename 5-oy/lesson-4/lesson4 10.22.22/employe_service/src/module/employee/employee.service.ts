import type { Employee } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma'
import type { EmployeeRetrieveAllRequest } from './interfaces'
import { LocalixationService } from '@clients'

@Injectable()
export class EmployeeService {
  readonly #_prisma: PrismaService
  readonly #_localization: LocalixationService

  constructor(prisma: PrismaService,localization:LocalixationService) {
    this.#_prisma = prisma
    this.#_localization = localization
  }

  async employeeRetrieveAll(): Promise<[]> {
    return this.#_localization.getTranslateList()
  }

  // async employeeRetrieveAll(
  //   payload: EmployeeRetrieveAllRequest,
  // ): Promise<Pick<Employee, 'id' | 'name'>[]> {
  //   const allEmployees = await this.#_prisma.employee.findMany({
  //     take: payload.pageLimit,
  //     skip: (payload.pageOffset - 1) * payload.pageLimit,
  //     select: {
  //       id: true,
  //       name: true,
  //       jobs: {
  //         select: {
  //           id: true,
  //           title: true,
  //         },
  //       },
  //     },
  //   })

  //   return allEmployees
  // }
}
