import type { Employee } from '@prisma/client'
import { Injectable, Module } from '@nestjs/common';
import { PrismaService } from '../../prisma'
import type { EmployeeCreateRequest, EmployeeRetrieveAllRequest } from './interfaces'
import { LocalixationService } from '@clients'
import { randomUUID } from 'crypto'

@Injectable()
export class EmployeeService {
  readonly #_prisma: PrismaService
  readonly #_localization: LocalixationService

  constructor(prisma: PrismaService, localization: LocalixationService) {
    this.#_prisma = prisma
    this.#_localization = localization
  }

  // async employeeRetrieveAll(): Promise<[]> {
  //   return this.#_localization.getTranslate()
  // }

  async employeeCreate(
    payload: EmployeeCreateRequest,
  ): Promise<null> {
    const code=randomUUID()
    
    console.log(code);
    


    await this.#_prisma.employee.create({
      data:{
        code:code,
        jobs:{
          connect:{
            id:payload.jobId
          }
        }
      }
    })

    await this.#_localization.createTranslate({
      code,
      content:payload.name,
      language:payload.language,
      module:payload.module,
    })

    return null
  }
}
