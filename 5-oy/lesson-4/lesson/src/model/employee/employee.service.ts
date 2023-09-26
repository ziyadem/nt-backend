import type { EmployeeRetrieveAllRequest } from "./interfaces"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "@prisma"
import { Employee } from '@prisma/client'

@Injectable()
export class EpmloyeeService{

    readonly #_prisma:PrismaService

    constructor(prisma:PrismaService) {
        this.#_prisma = prisma;
    }

    async employeeRetrieveAll(payload:EmployeeRetrieveAllRequest):Promise<Pick<Employee,'id' | 'name'>[]>{
        const allEmployees = await this.#_prisma.employee.findMany({
          take: payload.pageLimit,
          skip: (payload.pageOffset - 1) * payload.pageLimit,
          select: {
            id: true,
            name: true,
            jobs: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        });
      return allEmployees
    }
}
