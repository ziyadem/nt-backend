import { IsString } from 'class-validator';
import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { ICars } from '../interface/cars.interface';

export class CurrentUserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  id: string;
}

export class CarsDto implements ICars {
  @ApiProperty({
    type: String,
    default: '3edeb21b-f505-4b8e-95b9-ae6c4cdb70fb',
  })
  id: string;
  @ApiProperty({
    type: String,
    default: 'malibu',
  })
  title: string;
  @ApiProperty({
    type: String,
    default: 'black',
  })
  color: string;
 
}

export class CreateOrUpdateCarsDto extends OmitType(CarsDto, ['id']) {}
export class CarsIdDto extends PickType(CarsDto, ['id']) {}
