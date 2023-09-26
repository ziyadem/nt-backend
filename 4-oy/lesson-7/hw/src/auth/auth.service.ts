import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repo';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        private authRepository: AuthRepository,
        private jwtService: JwtService
    ){}


    async register(user){
        user.user_password = await bcrypt.hash(user.user_password, 10)
        return await this.authRepository.register(user)
    }

    async login(user){
        let result = await this.authRepository.login(user);

        if(result.length == 0){
            return {
                msg: 'User not found!'
            }
        }

        result = result[0]

        let checkPsw = await bcrypt.compare(user.user_password, result.user_password);
        if(!checkPsw){
            return {
                msg: 'Password invalid!'
            }
        }

        let token = await this.jwtService.sign({ user_id: result.id })
        return {
            msg: "OK",
            token
        }
        
    }
}
