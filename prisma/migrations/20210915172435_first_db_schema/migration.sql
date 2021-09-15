/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `userId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "userEmail" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL,
ADD COLUMN     "userSurname" TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "isAlive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "operatorId" TEXT,
    "userId" TEXT,
    "ticketProblemId" TEXT,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operator" (
    "operatorId" TEXT NOT NULL,
    "operatorEmail" TEXT NOT NULL,
    "operatorName" TEXT NOT NULL,
    "operatorSurname" TEXT,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("operatorId")
);

-- CreateTable
CREATE TABLE "TicketType" (
    "ticketTypeId" TEXT NOT NULL,
    "ticketProblem" TEXT NOT NULL,
    "ticketDescription" TEXT NOT NULL,

    CONSTRAINT "TicketType_pkey" PRIMARY KEY ("ticketTypeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Operator_operatorEmail_key" ON "Operator"("operatorEmail");

-- CreateIndex
CREATE UNIQUE INDEX "TicketType_ticketProblem_key" ON "TicketType"("ticketProblem");

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("operatorId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_ticketProblemId_fkey" FOREIGN KEY ("ticketProblemId") REFERENCES "TicketType"("ticketTypeId") ON DELETE SET NULL ON UPDATE CASCADE;
