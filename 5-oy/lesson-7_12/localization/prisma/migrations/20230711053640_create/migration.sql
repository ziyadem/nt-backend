-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "module" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "language" (
    "id" UUID NOT NULL,
    "title" VARCHAR(3) NOT NULL DEFAULT 'uz',
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "translate" (
    "id" UUID NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "module_id" UUID NOT NULL,
    "language_id" UUID NOT NULL,
    "code" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "translate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "module_name_key" ON "module"("name") WHERE "deleted_at" IS NULL;

-- CreateIndex
CREATE UNIQUE INDEX "language_title_key" ON "language"("title") WHERE "deleted_at" IS NULL;

-- CreateIndex
CREATE UNIQUE INDEX "translate_code_module_id_language_id_key" ON "translate"("code", "module_id", "language_id") WHERE "deleted_at" IS NULL;

-- AddForeignKey
ALTER TABLE "translate" ADD CONSTRAINT "translate_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "translate" ADD CONSTRAINT "translate_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
