import { IsEmail, IsString, IsNumber, IsBoolean, Min, Max, isEmail } from "class-validator"
import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IUser } from "../interface/auth.interface";

export class UserDto implements IUser{
    @ApiProperty({
        type: String,
        default: '32932541-e297-4ce6-b323-bcce2523d8ba'
    })
    @IsString()
    id: string;

    @ApiProperty({
        type: String,
        description: 'Enter your username',
        default: 'Sarvar'
    })
    @IsString()
    username: string;

    @ApiProperty({
        type: String,
        description: 'Enter your email',
        default: 'example@gmail.com'
    })
    @IsEmail()
    user_email: string;

    @ApiProperty({
        type: String,
        description: 'Enter your role',
        enum: ['admin', 'user']
    })
    @IsString()
    user_role: string;

    @ApiProperty({
        type: String,
        description: 'Enter your password',
        default: 'sarvar1234'
    })
    @IsString()
    user_password: string;
    
}

 export class RegisterDto extends OmitType(UserDto, ['id']) {}


 export class LoginDto extends PickType(UserDto, ['user_email', 'user_password']) {}