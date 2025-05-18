/*
  Warnings:

  - The primary key for the `Template` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Template` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_userId_fkey";

-- AlterTable
ALTER TABLE "Template" DROP CONSTRAINT "Template_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Template_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
