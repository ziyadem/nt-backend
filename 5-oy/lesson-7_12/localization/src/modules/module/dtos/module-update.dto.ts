import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModuleUpdateRequest } from '../interfaces';

export class ModuleUpdateDto implements ModuleUpdateRequest {
    @ApiProperty({
        example: 'backend',
    })
    @MinLength(3)
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;
}
