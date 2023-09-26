import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ){

    }
    @Post("/register")
    async register(
        @Body() user
    ){
      return await this.authService.register(user)     
    }

    @Post("/login")
    async login(
        @Body() user
    ){
      return await this.authService.login(user)
        
    }

}
