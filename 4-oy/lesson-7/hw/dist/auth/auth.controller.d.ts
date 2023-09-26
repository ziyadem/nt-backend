import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: any): Promise<any>;
    login(user: any): Promise<{
        msg: string;
        token?: undefined;
    } | {
        msg: string;
        token: string;
    }>;
}
