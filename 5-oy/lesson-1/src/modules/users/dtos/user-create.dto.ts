import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';
import { Gender } from "../enums";
import type { UserCreateRequest } from "../interfaces";

export class UserCreateDto implements UserCreateRequest {
  @ApiProperty({ example: 'Eshmat' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: Gender })
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @ApiProperty({ example: 'a@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
} 
