import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { AuthRepository } from './repository/auth.repository';
import { KnexConfigModule } from 'src/knex-config/KnexConfig.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[KnexConfigModule, 
    JwtModule.register({
      global: true,
      secret: 'secret_key',
      signOptions: { expiresIn: '1d' },
    }),],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository]
})
export class AuthModule {}
