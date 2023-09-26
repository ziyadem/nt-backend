-- CreateTable
CREATE TABLE "book" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "price" VARCHAR(20) NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);
