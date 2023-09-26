import { IsUUID, IsString, IsNotEmpty } from 'class-validator'
import type { EmployeeCreateRequest } from '../interfaces'

export class EmployeeCreateDto implements EmployeeCreateRequest {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsUUID('4')
  @IsNotEmpty()
  jobId: string
}
