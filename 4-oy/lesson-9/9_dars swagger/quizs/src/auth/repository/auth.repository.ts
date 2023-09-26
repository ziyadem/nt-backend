import { Inject, Injectable } from '@nestjs/common';
import { KnexConfig } from 'src/knex-config/knexConfig';
import { IUser } from '../interface/auth.interface';
import { RegisterDto } from '../dto/auth.dto';


@Injectable()
export class AuthRepository {
    @Inject()
    private readonly knexConfig: KnexConfig;
  

    getUserByEmail(user_email:string){
        const knex = this.knexConfig.instance;
        return knex.select().from('users').where({ user_email });  
    }

    register(user:RegisterDto){
        const { username, user_email, user_password, user_role } = user
        const knex = this.knexConfig.instance
      return knex('users').insert({ username, user_email, user_password, user_role })
    }
}
