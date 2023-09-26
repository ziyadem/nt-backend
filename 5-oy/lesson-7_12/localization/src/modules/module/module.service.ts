import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@prisma';
import { ModuleCreateRequest, ModuleUpdateRequest } from './interfaces';
import { Module } from '@prisma/client';

@Injectable()
export class ModuleService {
  readonly #_prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async getAll(): Promise<Pick<Module, 'id' | 'name'>[]> {
    const module = await this.#_prisma.module.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return module;
  }
  async getOne(id: string): Promise<Pick<Module, 'id' | 'name'>> {
    const module = await this.#_prisma.module.findFirst({
      where: {
        id: id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!module) {
      throw new NotFoundException('module not found');
    }

    return module;
  }

  async create(payload: ModuleCreateRequest): Promise<void> {
    await this.#_checkExistisModule(payload.name);

    await this.#_prisma.module.create({
      data: {
        name: payload.name,
      },
    });
  }

  async update(payload: ModuleUpdateRequest): Promise<void> {
    await this.#_checkModule(payload.id);

    await this.#_prisma.module.update({
      where: {
        id: payload.id,
      },
      data: {
        name: payload.name,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.#_checkModule(id);
    let date = new Date();

    await this.#_prisma.module.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: date,
      },
    });
  }

  async #_checkExistisModule(name: string) {
    const module = await this.#_prisma.module.findFirst({
      where: {
        name: name,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (module) {
      throw new ConflictException('module already exists');
    }
  }

  async #_checkModule(id: string) {
    const module = await this.#_prisma.module.findFirst({
      where: {
        id: id,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (!module) {
      throw new NotFoundException('module not found');
    }
  }
}
