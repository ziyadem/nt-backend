import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios, { AxiosInstance } from 'axios'
import {
  TranslateCreateRequest,
  TranslateGetRequest,
  TranslateGetResponse,
} from './interfaces'

@Injectable()
export class LocalixationService {
  readonly #_axios: AxiosInstance

  constructor(config: ConfigService) {
    this.#_axios = axios.create({
      baseURL: config.getOrThrow<string>('localization.url'),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      validateStatus: (status: number) => status < 400 && status > 199,
      timeout: config.getOrThrow<number>('localization.timeout'),
    })
  }

  async getTranslate(
    payload: TranslateGetRequest,
  ): Promise<TranslateGetResponse> {
    try {
      const { data } = await this.#_axios.request({
        url: 'translate',
        params: {
          code: payload.code,
          module: payload.module,
          language: payload.language,
        },
        method: 'GET',
      })

      console.log(data)

      return data
    } catch (err) {
      throw new InternalServerErrorException()
    }
  }

  async createTranslate(payload: TranslateCreateRequest): Promise<null> {
    console.log(payload, 'loc')
    try {
      const { data } = await this.#_axios.request({
        method: 'POST',
        url: '/translate',
        data: {
          code: payload.code,
          content: payload.content,
          module: payload.module,
          language: payload.language,
        },
      })
      console.log(data)
      return null
    } catch (err) {
      console.log(err)

      throw new InternalServerErrorException()
    }
  }
}
