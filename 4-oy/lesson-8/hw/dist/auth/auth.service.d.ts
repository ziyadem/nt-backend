import { AuthRepository } from './auth.repo';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    getUserByEmail(email: any): Promise<any>;
    register(user: any): Promise<any>;
    login(user: any): Promise<{
        msg: string;
        token?: undefined;
    } | {
        msg: string;
        token: string;
    }>;
}
