import { Injectable, InternalServerErrorException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { ClientTCP } from "@nestjs/microservices"
import { firstValueFrom,timeout } from 'rxjs'
import type { EmployeeRetrieveAllRequest, EmployeeRetrieveAllRespons } from "./interfaces"
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Command } from "./enums"

@Injectable()
export class EmployeeService {
  readonly #_client: ClientTCP;
  readonly #_timeout: number;

  constructor(config: ConfigService) {
    this.#_client = new ClientTCP({
      host: config.getOrThrow<string>('employee.host'),
      port: config.getOrThrow<number>('employee.port'),
    });
    this.#_timeout = config.getOrThrow<number>('employee.timeout');
  }

  employeeRetrieveAll(
    payload: EmployeeRetrieveAllRequest,
  ): Promise<EmployeeRetrieveAllRespons> {
    return this.#_send<EmployeeRetrieveAllRespons, EmployeeRetrieveAllRequest>(
      Command.EMPLOYE_RETRIVE_ALL,
      payload,
    );
  }

  async #_connect():Promise<void> {
    await this.#_client.connect()
  }

  #_disConnect():void {
    this.#_client.close();
  }

  async #_send<TResponse, TRequest>(
    pattern: string,
    payload: any,
  ): Promise<TResponse> {
    try {
      return await firstValueFrom(
        this.#_client
          .send<TResponse, TRequest>('', payload)
          .pipe(timeout(this.#_timeout)),
      );
    } catch (error: unknown) {
      throw new InternalServerErrorException(error);
    }
  }
}