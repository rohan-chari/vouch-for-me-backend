-- CreateTable
CREATE TABLE "NewTemplate" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "emailSubject" TEXT NOT NULL,
    "emailBody" TEXT NOT NULL,
    "questions" JSONB[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "NewTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "NewTemplate_userId_idx" ON "NewTemplate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NewTemplate_name_userId_key" ON "NewTemplate"("name", "userId");

-- AddForeignKey
ALTER TABLE "NewTemplate" ADD CONSTRAINT "NewTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
