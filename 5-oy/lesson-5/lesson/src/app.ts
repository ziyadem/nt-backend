import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { employeeConfig } from '@config'
import { EmployeeGatewayModule } from '@module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[employeeConfig],
      isGlobal:true
    }),
    EmployeeGatewayModule
  ]
})
export class App {}
