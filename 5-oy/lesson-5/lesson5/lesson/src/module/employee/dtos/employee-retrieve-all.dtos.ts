import {
  EmployeeRetrieveAllRequest,
  EmployeeRetrieveAllRespons,
  EmployeeRetrieveAllJobsRespons,
} from '@clients';
import { ApiPropertyOptional } from "@nestjs/swagger"

export class EmployeeRetrieveRequestDto implements EmployeeRetrieveAllRequest{
    @ApiPropertyOptional({
        example:2
    })
    pageOffset?:number

    @ApiPropertyOptional({
        example:10
    })
    pageLimit?:number
}

export class EmployeeRetrieveAllJobResponseDto implements EmployeeRetrieveAllJobsRespons
{
  @ApiPropertyOptional({
    example: 'de478df6-84f1-43e8-8cf3-dc7c18d80de1',
  })
  id: string;

  @ApiPropertyOptional({
    example: 'teacher',
  })
  title: string;
}

export class EmployeeRetrieveAllResponseDto implements EmployeeRetrieveAllRespons {
  @ApiPropertyOptional({
    example: 'de478df6-84f1-43e8-8cf3-dc7c18d80de1',
  })
  id: string

  @ApiPropertyOptional({
    example: 'Toshmat',
  })
  name: string

  @ApiPropertyOptional({
    type: EmployeeRetrieveAllJobResponseDto,
    isArray:true
  })
  jobs: EmployeeRetrieveAllJobResponseDto[];
}