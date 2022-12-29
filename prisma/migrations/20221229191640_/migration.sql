/*
  Warnings:

  - You are about to drop the column `youtubeVideoId` on the `YoutubeVideoDetails` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "YoutubeVideoDetails_id_key";

-- AlterTable
ALTER TABLE "YoutubeVideoDetails" DROP COLUMN "youtubeVideoId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "YoutubeVideoDetails_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "YoutubeVideoDetails_id_seq";
