import { ApiProperty } from '@nestjs/swagger';
import { TranslateCreateRequest } from '../interfaces';
import {
  IsJSON,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class TranslateCreateDto implements TranslateCreateRequest {
  @ApiProperty({
    example: {
      content: 'nmadir',
    },
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    example: 'frontend',
  })
  @IsString()
  @IsNotEmpty()
  module: string;

  @ApiProperty({
    example: 'uz',
  })
  @IsString()
  @IsNotEmpty()
  language: string;

  @ApiProperty({
    example: 'a4bf3f9b-531d-4220-9e9e-cd7b0eb0d4b9',
  })
  @IsUUID()
  @IsNotEmpty()
  code: string;
}
