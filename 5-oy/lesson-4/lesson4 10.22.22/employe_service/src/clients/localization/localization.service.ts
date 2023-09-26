import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios, { AxiosInstance } from 'axios'

@Injectable()
export class LocalixationService{
    readonly #_axios: AxiosInstance

    constructor(config:ConfigService){
        this.#_axios = axios.create({
          baseURL:config.getOrThrow<string>('localization.url'),
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          validateStatus:(status:number)=>status <400 && status >199,
          timeout:config.getOrThrow<number>('localization.timeout')
        })
    }

    async getTranslateList(): Promise<[]>{
        try {
            const {data}=await this.#_axios.request({
                url:'translate/list',
                method:'GET',
            })
            return data
        } catch (error) {
            throw new InternalServerErrorException()
        }

    }
}