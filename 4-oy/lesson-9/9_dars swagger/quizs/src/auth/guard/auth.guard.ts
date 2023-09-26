import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthorizationGuard implements CanActivate {
  @Inject() private readonly jwtService: JwtService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let tokenId = request.headers.authorization;

    console.log(request.headers);
    
    if (!tokenId) {
      throw new UnauthorizedException();
    }

    try {
      if (tokenId.startsWith('Bearer ')) {
        tokenId = tokenId.substr('Bearer '.length);
        
      }
      await this.jwtService.verifyAsync(tokenId);
    } catch (e) {
      console.log(e)
      throw new UnauthorizedException();
    }

    const decodeToken = await this.jwtService.decode(tokenId);
    if (!decodeToken) {
      throw new UnauthorizedException();
    }
    request.user = decodeToken;
    return true;
  }
}
