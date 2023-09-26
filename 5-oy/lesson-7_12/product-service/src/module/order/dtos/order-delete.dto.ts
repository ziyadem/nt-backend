import { IsNotEmpty, IsUUID } from 'class-validator'
import { OrderDeleteRequest } from '../interfaces'

export class OrderDeleteDto implements OrderDeleteRequest {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @IsNotEmpty()
  user_id: string
}
