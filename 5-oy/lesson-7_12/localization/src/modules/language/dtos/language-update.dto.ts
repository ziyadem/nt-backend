import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageUpdateRequest } from '../interfaces';

export class LanguageUpdateDto implements LanguageUpdateRequest {
    @ApiProperty({
        example: 'uz',
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title: string;
}
