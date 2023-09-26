import type { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

export class VerifyAccessInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const request = context.switchToHttp().getRequest()

        const accessToken = request.headers["authorization"].replace('Bearer ', '')

        let userId = JSON.parse(
          JSON.stringify(Buffer.from(accessToken, 'base64').toString()),
        )
        function tokenId(arg:string) {
            let obj = '';
            let a = 0;
            for (let i = 0; i < arg.length; i++) {
              if (arg[i] == '{') {
                a += 1;
              }
              if (a == 2 && arg[i] !== '}') {
                obj += arg[i];
              }
              if (a == 2 && arg[i] == '}') {
                obj+='}'
                return obj
              }
            }
            console.log(obj)
            return obj 
        }
        let newObj =tokenId(userId)  
        request.body.user_id = JSON.parse(newObj).id
        return next.handle()
    }
}