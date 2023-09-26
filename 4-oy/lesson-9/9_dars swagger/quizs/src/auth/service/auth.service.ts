import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from '../repository/auth.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from '../dto/auth.dto';


@Injectable()
export class AuthService {
    constructor(
        private authRepo: AuthRepository,
        private jwtService: JwtService
    ) {}

    async register(user: RegisterDto) {
     try {
        let foundedUser = await this.authRepo.getUserByEmail(user.user_email);

        if(foundedUser[0]){
            return new ConflictException("User already exists!")
        }
        user.user_password = await bcrypt.hash(user.user_password, 10);

        await this.authRepo.register(user); 
    
        return {
            msg: "Created user!"
        }
        
     } catch (err) {
        return new InternalServerErrorException()  
     }
    }

    async login(user: LoginDto) {
        try {
            let foundedUser = await this.authRepo.getUserByEmail(user.user_email);
            foundedUser = foundedUser[0]
            
            if (!foundedUser) return new UnauthorizedException("User ro`yxatdan o`tmagan!")

            let checkPsw = await bcrypt.compare(user.user_password, foundedUser.user_password)
            if (!checkPsw) return new BadRequestException("Password xato!")

            let token = await this.jwtService.sign({ id: foundedUser.id })
            return {
                msg: 'Success',
                token
            }

        } catch (err) {
            return new InternalServerErrorException()

        }
    }
}
