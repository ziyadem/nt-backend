import { ApiProperty } from "@nestjs/swagger";
import { TranslateUpdateRequest } from "../interfaces";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class TranslateUpdateDto implements TranslateUpdateRequest {
  @ApiProperty({
    example: {
      name: 'nmadir',
    },
  })
  @IsJSON()
  @IsNotEmpty()
  @IsOptional()
  content: JSON;

  @ApiProperty({
    example: 'backend',
  })
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  module_id: string;

  @ApiProperty({
    example: 'uz',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  language_id: string;

  @ApiProperty({
    example: 'a4bf3f9b-531d-4220-9e9e-cd7b0eb0d4b9',
  })
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  code: string;
}