import { EmployeeRetrieveAllRequest, EmployeeRetrieveAllRespons, EmployeeService } from "@clients"
import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common"
import { ApiBadRequestResponse, ApiHeaders, ApiInternalServerErrorResponse, ApiOkResponse, ApiQuery, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger"
import { EmployeeRetrieveAllResponseDto } from "./dtos";

@ApiTags('Employee')
@ApiHeaders([
  {
    name: 'authorization',
    example: 'Bearer token...',
  },
])
@Controller({
  path: 'employee-service',
  version: '1',
})
export class EmployeController {
  readonly #_service: EmployeeService;

  constructor(service: EmployeeService) {
    this.#_service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  @ApiQuery({ name: 'pageOffsate', example: 2 })
  @ApiQuery({ name: 'pageLimit', example: 10 })
  @ApiOkResponse({ type: EmployeeRetrieveAllResponseDto })
  @ApiUnauthorizedResponse({description:'Unauthorized'})
  @ApiBadRequestResponse({description:'Bad request'})
  @ApiInternalServerErrorResponse({description:'Internal server error'})
  employeRetrieveAll(
    @Query('query') query: EmployeeRetrieveAllRequest,
  ): Promise<EmployeeRetrieveAllRespons> {
    return this.#_service.employeeRetrieveAll(query);
  }
}

