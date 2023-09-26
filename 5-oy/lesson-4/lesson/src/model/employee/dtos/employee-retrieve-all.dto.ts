import { IsNumber, IsOptional } from "class-validator"
import { EmployeeRetrieveAllRequest } from "../interfaces"
import { Type } from "class-transformer"

export class EmployeeRetrieveAllDto implements EmployeeRetrieveAllRequest {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  pageOffset?: number

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  pageLimit?: number
}
