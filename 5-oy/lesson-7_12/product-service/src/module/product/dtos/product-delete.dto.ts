import { IsUUID, IsNotEmpty } from 'class-validator'
import type { ProductDeleteRequest } from '../interfaces'

export class ProductDeleteDto implements ProductDeleteRequest {
  @IsUUID()
  @IsNotEmpty()
  id: string
}
