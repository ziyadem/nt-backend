import {IsNumber, IsString} from "class-validator";
import { IAuth } from "../interface/auth.interface";


class AuthDto implements IAuth{

    @IsString()
    id: string;

    @IsString()
    user_name: string;

    @IsString()
    user_surname: string;

    @IsString()
    user_email: string;

    @IsString()
    user_password: string;

    @IsNumber()
    user_age: number;

    @IsString()
    user_role: string;
    
}
