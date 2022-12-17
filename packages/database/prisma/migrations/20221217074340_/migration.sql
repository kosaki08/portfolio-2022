-- CreateTable
CREATE TABLE "Work" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" VARCHAR(10000) NOT NULL,
    "tag" TEXT NOT NULL,
    "nextPageSlug" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("slug")
);

-- CreateIndex
CREATE UNIQUE INDEX "Work_nextPageSlug_key" ON "Work"("nextPageSlug");
