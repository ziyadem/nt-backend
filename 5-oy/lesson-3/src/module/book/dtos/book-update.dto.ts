import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { BookUpdateRequest } from '../interfaces';

export class BookUpdateDto implements Omit<BookUpdateRequest, 'id'> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  authorId?: string;
}
