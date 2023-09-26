import { ArgumentsHost, Catch } from "@nestjs/common"
import { BaseRpcExceptionFilter, RpcException } from "@nestjs/microservices";
import { Observable, throwError } from "rxjs"

@Catch()
export class AllExceptionFilter extends BaseRpcExceptionFilter{
    catch(exception: RpcException, host: ArgumentsHost) :Observable<any>{
        return throwError(()=> exception)
    }
}                                                             