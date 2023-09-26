import * as bcrypt from 'bcrypt';
import { PrismaService } from '@prisma';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Author } from '@prisma/client';
import type {
  AuthorCreateRequest,
  AuthorDeleteRequest,
  AuthorUpdateRequest,
} from './interfaces';

@Injectable()
export class AuthorService {
  readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async authorRetrieveAll(): Promise<Author[]> {
    return this.#_prisma.author.findMany({
      select: {
        id: true,
        fname: true,
        lname: true,
        email: true,
        password: true,
      },
    });
  }

  async authorCreate(payload: AuthorCreateRequest): Promise<void> {
    await this.#_checkAuthorEmail(payload.email);

    const hashPas = await bcrypt.hash(payload.password, 10);

    await this.#_prisma.author.create({
      data: {
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        password: hashPas,
      },
    });
  }

  async authorUpdate(payload: AuthorUpdateRequest): Promise<void> {
    await this.#_checkAuthorId(payload.id);
    let hashPas;

    if (payload.password) {
      hashPas = await bcrypt.hash(payload.password, 10);
      console.log(hashPas);
    }

    await this.#_prisma.author.update({
      where: {
        id: payload.id,
      },
      data: {
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        password: payload.password ? hashPas : payload.password,
      },
    });
  }

  async authorDelete(payload: AuthorDeleteRequest): Promise<void> {
    await this.#_checkAuthorId(payload.id);

    await this.#_prisma.author.delete({
      where: {
        id: payload.id,
      },
    });
  }

  async #_checkAuthorEmail(email: string): Promise<void> {
    const author = await this.#_prisma.author.findFirst({
      where: {
        email: email,
      },
    });
    if (author) {
      throw new ConflictException('author already exists');
    }
  }

  async #_checkAuthorId(id: string): Promise<void> {
    const author = await this.#_prisma.author.findFirst({
      where: {
        id: id,
      },
    });
    if (!author) {
      throw new NotFoundException('author not found');
    }
  }
}
