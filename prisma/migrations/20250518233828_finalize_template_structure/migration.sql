/*
  Warnings:

  - You are about to drop the `NewTemplate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewTemplate" DROP CONSTRAINT "NewTemplate_userId_fkey";

-- DropTable
DROP TABLE "NewTemplate";
