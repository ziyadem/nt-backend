import { IsUUID, IsString, IsNotEmpty } from 'class-validator';
import type { BookCreateRequest } from '../interfaces';

export class BookCreateDto implements BookCreateRequest {
  @IsString()
  @IsNotEmpty({ message: 'oka bosh bomasn' })
  title: string;

  @IsUUID('4')
  @IsNotEmpty({ message: 'uka author bratni ber' })
  authorId: string;
}
