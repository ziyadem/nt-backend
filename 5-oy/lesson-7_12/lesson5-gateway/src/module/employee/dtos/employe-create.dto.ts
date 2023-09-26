import { EmployeeCreateRequest } from "@clients";
import { ApiProperty } from "@nestjs/swagger";

export class EmployeeCreateDto implements EmployeeCreateRequest {
  @ApiProperty({
    example: 'nmadir',
  })
  name: string;

  @ApiProperty({
    example: 'b82065c7-cf9f-4851-929a-0895b8bed26f',
  })
  jobId: string;

  @ApiProperty({
    example: 'backend',
  })
  module: string;
}