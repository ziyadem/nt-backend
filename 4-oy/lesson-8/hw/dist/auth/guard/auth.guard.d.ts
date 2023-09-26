import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    private readonly jwtService;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
