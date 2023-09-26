import { IsNotEmpty, IsString, IsUUID } from "class-validator"
import { EmployeeCreateRequest } from "../interfaces"

export class EmployeeCreateDto implements EmployeeCreateRequest {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsUUID('4')
  @IsNotEmpty()
  jobId: string
}
