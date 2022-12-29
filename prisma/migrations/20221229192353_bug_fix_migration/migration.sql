/*
  Warnings:

  - The primary key for the `YoutubeVideoDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "YoutubeVideoDetails" DROP CONSTRAINT "YoutubeVideoDetails_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "YoutubeVideoDetails_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "YoutubeVideoDetails_id_seq";
