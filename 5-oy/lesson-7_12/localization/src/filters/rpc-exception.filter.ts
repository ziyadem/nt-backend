import { Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class RpcExceptionFilter extends BaseExceptionFilter {
  catch(error: unknown) {
    console.log(error);
  }
}
