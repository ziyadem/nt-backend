import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma'
import { MarketService } from './market.service'
import { MarketController } from './market.controller'

@Module({
  providers: [MarketService, PrismaService],
  controllers: [MarketController],
})
export class MarketModule {}
