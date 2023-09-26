-- CreateTable
CREATE TABLE "jobs" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(0) NOT NULL,
    "delete_at" TIMESTAMP(0),

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);
