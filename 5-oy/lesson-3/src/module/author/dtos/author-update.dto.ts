import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { AuthorUpdateRequest } from '../interfaces';

export class AuthorUpdateDto implements AuthorUpdateRequest {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fname?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lname?: string;

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password?: string;
}
