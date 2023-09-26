import { ApiProperty } from '@nestjs/swagger';
import { ProductUpdateRequest } from 'clients/product';

export class ProductUpdateDto implements ProductUpdateRequest {
  @ApiProperty({
    example: 'maxsulot',
  })
  name: string;

  @ApiProperty({
    example: 200000,
  })
  price: number;
}
