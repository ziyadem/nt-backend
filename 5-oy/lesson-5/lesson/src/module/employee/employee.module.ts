import { Module } from "@nestjs/common"
import { EmployeeModule } from "@clients"
import { EmployeController } from "./employee.controller"


@Module({
  imports: [EmployeeModule],
  controllers: [EmployeController],
})
export class EmployeeGatewayModule {}