/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - The `emailVerified` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmailVerification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobApplication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobListing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordReset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Placement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `University` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OauthProvider" AS ENUM ('GOOGLE');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('EMAIL_VERIFICATION', 'RESET_PASSWORD');

-- CreateEnum
CREATE TYPE "ProjectStack" AS ENUM ('GO', 'PYTHON', 'MERN', 'NEXTJS', 'AI_GPT_APIS', 'SPRINGBOOT', 'OTHERS');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('INR', 'USD');

-- CreateEnum
CREATE TYPE "WorkMode" AS ENUM ('remote', 'hybrid', 'office');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'HR');

-- CreateEnum
CREATE TYPE "EmployementType" AS ENUM ('Full_time', 'Part_time', 'Internship', 'Contract');

-- CreateEnum
CREATE TYPE "DegreeType" AS ENUM ('BTech', 'MTech', 'BCA', 'MCA');

-- CreateEnum
CREATE TYPE "FieldOfStudyType" AS ENUM ('AI', 'Machine_Learning', 'CS', 'Mechanical');

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_userId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplication" DROP CONSTRAINT "JobApplication_jobListingId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplication" DROP CONSTRAINT "JobApplication_studentId_fkey";

-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Placement" DROP CONSTRAINT "Placement_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Placement" DROP CONSTRAINT "Placement_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Placement" DROP CONSTRAINT "Placement_universityId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_universityId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_userId_fkey";

-- DropForeignKey
ALTER TABLE "University" DROP CONSTRAINT "University_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
DROP COLUMN "updatedAt",
ADD COLUMN     "aboutMe" TEXT,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "blockedByAdmin" TIMESTAMP(3),
ADD COLUMN     "contactEmail" TEXT,
ADD COLUMN     "discordLink" TEXT,
ADD COLUMN     "githubLink" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "linkedinLink" TEXT,
ADD COLUMN     "oauthId" TEXT,
ADD COLUMN     "oauthProvider" "OauthProvider",
ADD COLUMN     "onBoard" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "portfolioLink" TEXT,
ADD COLUMN     "resume" TEXT,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "twitterLink" TEXT,
ALTER COLUMN "password" DROP NOT NULL,
DROP COLUMN "emailVerified",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "EmailVerification";

-- DropTable
DROP TABLE "JobApplication";

-- DropTable
DROP TABLE "JobListing";

-- DropTable
DROP TABLE "PasswordReset";

-- DropTable
DROP TABLE "Placement";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "University";

-- DropEnum
DROP TYPE "ApplicationStatus";

-- DropEnum
DROP TYPE "PlacementStatus";

-- DropEnum
DROP TYPE "UserRole";
