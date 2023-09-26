import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { AuthRepository } from './auth.repo';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        private authRepository: AuthRepository,
        private jwtService: JwtService
    ){}


    async getUserByEmail(email){
        return await this.authRepository.getUserByEmail(email)

    }


    async register(user){
        try {
            let foundedUser = await this.authRepository.getUserByEmail(user.user_email)
            
            if(foundedUser[0]){
                return new ConflictException('User already exists!')
            }
            user.user_password = await bcrypt.hash(user.user_password, 10)
            return await this.authRepository.register(user)
            
        } catch (err) {
            console.log(err);
            
            return new InternalServerErrorException()
            
        }
    }

    async login(user){
        let result = await this.authRepository.login(user);

        if(result.length == 0){
            return {
                msg: 'User not found!'
            }
        }

        result = result[0]
        console.log(result);
        console.log(user.user_password);
        
        
        let checkPsw = await bcrypt.compare(user.user_password, result.user_password);
        console.log(checkPsw);
        
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
