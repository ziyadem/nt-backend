import {
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator'
import { ProductCreateRequest } from '../interfaces'

export class ProductCreateDto implements ProductCreateRequest {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number
}
