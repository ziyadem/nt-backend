import { Type } from "class-transformer";
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { BookCreateRequest } from "../interfaces";

export class BookCreateDto implements BookCreateRequest {
  @ApiProperty({
    example: 'Molxona',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '100000',
  })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  price: string;
}