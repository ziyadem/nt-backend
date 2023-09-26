import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator'
import type { MarketUpdateRequest } from '../interfaces'

export class MarketUpdateDto implements MarketUpdateRequest {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  id: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  address: string
}
