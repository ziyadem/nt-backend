import { registerAs } from '@nestjs/config';

declare interface dbConfigOptions {
  url?: string;
}

export const dbConfig = registerAs<dbConfigOptions>(
  'db',
  (): dbConfigOptions => ({
    url: process.env.DATABASE_URL ?? undefined,
  }),
);
