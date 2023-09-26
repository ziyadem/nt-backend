-- CreateTable
CREATE TABLE "employee" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(0) NOT NULL,
    "delete_at" TIMESTAMP(0),

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);
