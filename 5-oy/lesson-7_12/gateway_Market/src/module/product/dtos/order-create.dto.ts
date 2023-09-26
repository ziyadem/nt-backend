import { OrderCreateRequest } from '@clients'
import { ApiProperty } from '@nestjs/swagger'


export class OrderCreateDto implements OrderCreateRequest {
  @ApiProperty({
    example: '4c801d57-a09e-4922-854c-a3505ad661e8',
  })
  user_id: string;

  @ApiProperty({
    example: '4c801d57-a09e-4922-854c-a3505ad661e8',
  })
  product_id: string;
}
