import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { ModuleCreateRequest } from "../interfaces";
import { ApiProperty } from "@nestjs/swagger";

export class ModuleCreateDto implements ModuleCreateRequest {
  @ApiProperty({
    example: 'backend',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}