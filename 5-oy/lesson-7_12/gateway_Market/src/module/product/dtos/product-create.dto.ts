import { ApiProperty } from '@nestjs/swagger'
import { ProductCreateRequest } from 'clients/product'


export class ProductCreateDto
  implements ProductCreateRequest
{
  @ApiProperty({
    example: 'maxsulot',
  })
  name: string;

  @ApiProperty({
    example: 200000,
  })
  price: number  
}
