import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@prisma";
import { Language, Module } from "@prisma/client";
import { LanguageCreateRequest, LanguageUpdateRequest } from "./interfaces";

@Injectable()
export class LanguageService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async getAll(): Promise<Pick<Language, 'id' | 'title'>[]> {
    const language = await this.#_prisma.language.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
      },
    });

    return language
  }
  
  async getOne(id: string): Promise<Pick<Language, 'id' | 'title'>> {
    const language = await this.#_prisma.language.findFirst({
      where: {
        id: id,
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
      },
    });

    if (!language) {
      throw new NotFoundException('module not found');
    }

    return language;
  }

  async create(payload: LanguageCreateRequest): Promise<void> {
    await this.#_checkExistisModule(payload.title);

    await this.#_prisma.language.create({
      data: {
        title: payload.title,
      },
    });
  }

  async update(payload: LanguageUpdateRequest): Promise<void> {
    await this.#_checkModule(payload.id);

    await this.#_prisma.language.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.#_checkModule(id);

    let date = new Date();

    await this.#_prisma.language.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: date,
      },
    });
  }

  async #_checkExistisModule(title: string) {
    const language = await this.#_prisma.language.findFirst({
      where: {
        title: title,
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
      },
    });

    if (language) {
      throw new ConflictException('language already exists');
    }
  }

  async #_checkModule(id: string) {
    const language = await this.#_prisma.language.findFirst({
      where: {
        id: id,
        deletedAt: null,
      },
      select: {
        id: true,
        title: true,
      },
    });

    if (!language) {
      throw new NotFoundException('language not found');
    }
  }
}