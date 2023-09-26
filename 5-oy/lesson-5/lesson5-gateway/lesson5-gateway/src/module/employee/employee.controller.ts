import { VerifyAccessInterceptor } from "@interceptors"
import { Controller, HttpCode, HttpStatus, Get, Query, UseInterceptors } from "@nestjs/common"
import { EmployeeService } from '@clients'
import {
    ApiTags,
    ApiHeaders,
    ApiQuery,
    ApiOkResponse,
    ApiBadRequestResponse,
    ApiUnauthorizedResponse,
    ApiInternalServerErrorResponse,
} from "@nestjs/swagger"
import { EmployeeRetrieveAllResponsetDto } from "./dtos"
import type { EmployeeRetrieveAllRequest, EmployeeRetrieveAllResponse } from '@clients'

@UseInterceptors(VerifyAccessInterceptor)
@ApiTags('Employee')
@ApiHeaders([
    {
        name: 'Authorization',
        example: 'Bearer token...',
        required: true
    }
])
@Controller({
    path: 'employee-service',
    version: '1'
})
export class EmployeeController {
    readonly #_service: EmployeeService

    constructor(service: EmployeeService) {
        this.#_service = service
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    @ApiQuery({ name: 'pageOffset', example: 2, required: false })
    @ApiQuery({ name: 'pageLimit', example: 10, required: false })
    @ApiOkResponse({ type: EmployeeRetrieveAllResponsetDto })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    employeeRetrieveAll(
        @Query() query: EmployeeRetrieveAllRequest
    ): Promise<EmployeeRetrieveAllResponse> {
        return this.#_service.employeeRetrieveAll(query)
    }
}
