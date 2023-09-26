import  type { User } from '@prisma/client'
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { sign, refreshSign } from '@helpers'
import type { SignInRequest, SignUpRequest, SignUpResponse } from './interfaces'

@Injectable()
export class AuthService {
  readonly #_prisma: PrismaService

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }

  async signUp(payload: SignUpRequest): Promise<SignUpResponse> {
     await this.#_checkExistingUser({ username: payload.username })

      let newUser=await this.#_prisma.user.create({
        data:{
          username: payload.username,
          password: payload.password
        },
        select:{
          id:true,
        }
      })

     return {
          accessToken: sign({id:newUser.id}),
          refreshToken: refreshSign({ id:newUser.id }),
     }
  }

  async signIn(payload: SignInRequest): Promise<SignUpResponse> {
     const user =await this.#_checkUser({username: payload.username,password: payload.password})

     return {
          accessToken: sign({id:user.id}),
          refreshToken: refreshSign({ id:user.id }),
     }
  }

  async #_checkUser(payload: {username: string,password?:string}): Promise<Pick<User,'id'>> {
      const user = await this.#_prisma.user.findFirst({
        where: {
          username: payload.username,
          password:payload.password,
          deletedAt: null
        },
        select:{
          id:true,
        }
      })

      if(!user){
        throw new NotFoundException('User not found')
      }

      return {
        id:user.id,
      }
  }

  async #_checkExistingUser(payload: {username: string}): Promise<void> {
      const user = await this.#_prisma.user.findFirst({
        where: {
          username: payload.username,
          deletedAt: null
        },
        select:{
          id:true,
        }
      })

      if(user){
        throw new ConflictException('User already exists')
      }
  }
}
