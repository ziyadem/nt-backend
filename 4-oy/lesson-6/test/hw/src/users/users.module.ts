import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repo';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
