import {
  IsString,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
} from 'class-validator'
import type { SignInRequest } from '../interfaces'

export class SignInDto implements SignInRequest {
  @IsString()
  @IsNotEmpty()
  username: string

  @IsStrongPassword()
  @IsNotEmpty()
  password: string
}
