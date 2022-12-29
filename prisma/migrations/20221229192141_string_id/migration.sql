/*
  Warnings:

  - The primary key for the `YoutubeVideoDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `YoutubeVideoDetails` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "YoutubeVideoDetails" DROP CONSTRAINT "YoutubeVideoDetails_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "YoutubeVideoDetails_pkey" PRIMARY KEY ("id");
