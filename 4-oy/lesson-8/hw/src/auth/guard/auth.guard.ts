import { Injectable, CanActivate, ExecutionContext, Inject, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthGuard implements CanActivate {

    @Inject() private readonly jwtService: JwtService;

    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      let tokenId = request.headers.token;
      
      
      if (!tokenId) {
        throw new UnauthorizedException();
      }
  
      try {
        await this.jwtService.verifyAsync(tokenId);
      } catch (e) {
        throw new UnauthorizedException();
      }

  
      const decodeToken = await this.jwtService.decode(tokenId);
      
      if (!decodeToken) {
        throw new UnauthorizedException();
      }
      request.user = decodeToken;
     // console.log('decodeToken -> ', decodeToken);
      return true;
    }








  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
    
  //   // const request = context.switchToHttp().getRequest();


  //   // let user =  this.jwtService.verifyAsync(request.headers.token);  
  //   // if(!user){
  //   //   return false
  //   // }

  //   // request.user = user
    
    
  //   // return request

    
  // }
}