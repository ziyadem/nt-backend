import { Inject, Injectable } from '@nestjs/common';
import { KnexConfig } from '../KnexConfig/knexConfig';


@Injectable()
export class AuthRepository {
    @Inject()
    private readonly knexConfig: KnexConfig;
    
    register(user){
        const knex = this.knexConfig.instance;
        return knex("users").returning("*")
           .insert(user)
        

    }

    login(user){
        const knex = this.knexConfig.instance;
        return knex.select("*").from("users").where({ user_email: user.user_email })
    }


    getUserByEmail(email){
        const knex = this.knexConfig.instance;
        return knex.select("*").from("users").where({ user_email: email })

    }
}
