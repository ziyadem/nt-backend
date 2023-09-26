import { Module } from "@nestjs/common";
import { PrismaService } from "@prisma";
import { ModuleService } from "./module.service";
import { ModuleController } from "./module.controller";

@Module({
    providers:[ModuleService,PrismaService],
    controllers:[ModuleController],
})
export class ModuleModule {}