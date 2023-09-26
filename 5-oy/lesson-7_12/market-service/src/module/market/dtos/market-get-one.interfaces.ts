import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator'
import type { MarketDeleteRequest } from '../interfaces'

export class MarketDeleteDto implements MarketDeleteRequest {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  id: string
}
