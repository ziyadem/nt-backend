import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { employeeConfig, userConfig } from '@config'
import { EmployeeGatewayModule } from '@module'
import { UserGatewayModule } from 'module/user'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [employeeConfig, userConfig],
      isGlobal: true
    }),
    EmployeeGatewayModule,
    UserGatewayModule
  ],
})
export class App {}
