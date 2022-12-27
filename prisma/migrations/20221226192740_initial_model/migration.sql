-- CreateTable
CREATE TABLE "YoutubeVideoDetails" (
    "id" SERIAL NOT NULL,
    "youtubeLink" TEXT NOT NULL,
    "youtubeVideoId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeVideoDetails_id_key" ON "YoutubeVideoDetails"("id");
