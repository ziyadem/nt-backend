import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator'
import type { MarketGetOneRequest } from '../interfaces'

export class MarketGetOneDto implements MarketGetOneRequest {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  id: string
}
