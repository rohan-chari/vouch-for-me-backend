-- AlterTable
ALTER TABLE "User" ADD COLUMN     "company" TEXT,
ADD COLUMN     "desiredIndustries" TEXT[],
ADD COLUMN     "desiredRole" TEXT,
ADD COLUMN     "educationLevel" TEXT,
ADD COLUMN     "employmentStatus" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "experience" INTEGER,
ADD COLUMN     "fieldOfStudy" TEXT,
ADD COLUMN     "graduationYear" INTEGER,
ADD COLUMN     "institution" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "skills" TEXT[];
