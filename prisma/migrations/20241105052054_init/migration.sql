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
CREATE TYPE "EmploymentType" AS ENUM ('Full_time', 'Part_time', 'Internship', 'Contract');

-- CreateEnum
CREATE TYPE "DegreeType" AS ENUM ('BTech', 'MTech', 'BCA', 'MCA');

-- CreateEnum
CREATE TYPE "FieldOfStudyType" AS ENUM ('AI', 'Machine_Learning', 'CS', 'Mechanical');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "avatar" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "skills" TEXT[],
    "resume" TEXT,
    "oauthProvider" "OauthProvider",
    "oauthId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blockedByAdmin" TIMESTAMP(3),
    "onBoard" BOOLEAN NOT NULL DEFAULT false,
    "githubLink" TEXT,
    "portfolioLink" TEXT,
    "linkedinLink" TEXT,
    "twitterLink" TEXT,
    "discordLink" TEXT,
    "contactEmail" TEXT,
    "aboutMe" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "EmploymentType" "EmploymentType" NOT NULL,
    "address" TEXT NOT NULL,
    "workMode" "WorkMode" NOT NULL,
    "currentWorkStatus" BOOLEAN NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
