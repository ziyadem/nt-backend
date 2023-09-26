import { MarketCreateRequest } from '@clients'
import { ApiProperty } from '@nestjs/swagger'


export class MarketCreateDto
  implements MarketCreateRequest
{
  @ApiProperty({
    example: 'Nimadir',
  })
  name: string;

  @ApiProperty({
    example: 'Toshkent Olmazor',
  })
  address: string;

  
}
