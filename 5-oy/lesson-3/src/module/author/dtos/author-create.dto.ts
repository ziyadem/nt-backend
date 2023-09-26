import { IsNotEmpty, IsString } from 'class-validator';
import { AuthorCreateRequest } from '../interfaces';

export class AuthorCreateDto implements AuthorCreateRequest {
  @IsString()
  @IsNotEmpty({ message: "oka bo'sh bo'lmasin" })
  fname: string;

  @IsString()
  @IsNotEmpty({ message: "oka bo'sh bo'lmasin" })
  lname: string;

  @IsString()
  @IsNotEmpty({ message: "oka bo'sh bo'lmasin" })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "oka bo'sh bo'lmasin" })
  password: string;
}
