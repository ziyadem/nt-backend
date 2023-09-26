import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@prisma"
import type {
  TranslateCreateRequest,
  TranslateGetRequest,
  TranslateGetResponse,
} from './interfaces';


@Injectable()
export class TranslateService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async get(payload: TranslateGetRequest): Promise<TranslateGetResponse> {
    const module =await this.#_prisma.module.findFirst({
      where:{
        name:payload.module,
        deletedAt:null
      },
      select:{
        id:true
      }
    })

    if(!module){
      throw new NotFoundException("Module not found")
    }

    const language =await this.#_prisma.language.findFirst({
      where:{
        title:payload.language,
        deletedAt:null
      },
      select:{
        id:true
      }
    })

    if (!language) {
      throw new NotFoundException('Language not found');
    }

    const translate=await this.#_prisma.translate.findUnique({
      where:{
        code_moduleId_languageId: {
          code:payload.code,
          languageId:language.id,
          moduleId:module.id
        }
      },
      select:{
        content:true,
      }
    })

    if(translate){
      throw new ConflictException("already exists")
    }

    return translate
  }

  async create(payload: TranslateCreateRequest): Promise<null> {

    const module =await this.#_prisma.module.findFirst({
      where:{
        name:payload.module,
        deletedAt:null
      },
      select:{
        id:true
      }
    })
console.log(module,'dd');

    if(!module){
      throw new NotFoundException("Module not found")
    }

    const language =await this.#_prisma.language.findFirst({
      where:{
        title:payload.language,
        deletedAt:null
      },
      select:{
        id:true
      }
    })

    if (!language) {
      throw new NotFoundException('Language not found');
    }

    const translate=await this.#_prisma.translate.findUnique({
      where:{
        code_moduleId_languageId: {
          code:payload.code,
          languageId:language.id,
          moduleId:module.id
        }
      }
    })

    if(translate){
      throw new ConflictException("already exists")
    }
    console.log(payload.code);
    console.log(payload.content);
    console.log(language.id);
    console.log(module.id);
    

    await this.#_prisma.translate.create({
      data:{
        code:'nhg',
        content:payload.content,
        languageId:language.id,
        moduleId:module.id,
      }
    })


    return null
  }

}