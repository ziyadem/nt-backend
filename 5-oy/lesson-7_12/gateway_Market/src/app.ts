import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { userConfig } from '@config';
import { MarketGatewayModule } from '@module';
import { UserGatewayModule } from 'module/user';
import { marketConfig } from 'config/market.config';
import { ProductGatewayModule } from 'module/product';
import { productConfig } from 'config/product.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [userConfig, marketConfig, productConfig],
      isGlobal: true,
    }),
    UserGatewayModule,
    MarketGatewayModule,
    ProductGatewayModule,
  ],
})
export class App {}
