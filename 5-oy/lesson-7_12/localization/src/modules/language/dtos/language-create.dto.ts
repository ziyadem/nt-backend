import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { LanguageCreateRequest } from "../interfaces";
import { ApiProperty } from "@nestjs/swagger";

export class LanguageCreateDto implements LanguageCreateRequest {
  @ApiProperty({
    example: 'uz',
  })
  @IsString()
  @IsNotEmpty()
  title: string
}