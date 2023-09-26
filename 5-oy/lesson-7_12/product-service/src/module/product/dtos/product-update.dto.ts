import { IsString, IsNotEmpty, IsOptional, IsUUID, IsNumber } from 'class-validator'
import { ProductUpdateRequest } from '../interfaces'

export class ProductUpdateDto implements ProductUpdateRequest {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  id: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  price: number
}
