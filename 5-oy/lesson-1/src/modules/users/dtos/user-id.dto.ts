import { IsNotEmpty, IsNumber } from 'class-validator';
import { UserId } from '../interfaces/user-id.interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class UserIdDto implements UserId {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
