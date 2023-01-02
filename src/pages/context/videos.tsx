import React from 'react';
import { trpc } from '../../utils/trpc';
import { YoutubeCard } from '../../../components/cards';

const Videos = () => {
  const videoList = trpc.video.getAllVideos.useQuery();
  console.log(videoList?.data);

  return (
    <main className='relative flex justify-center items-center'>
      <section className='h-[25rem] w-full overflow-y-scroll flex  gap-4 flex-wrap justify-center p-4 bg-[#C2262E]'>
        {/* <YoutubeCard /> */}
      </section>
      <div className='h-[30rem] cursor-pointer w-[50rem] absolute -bottom-[15rem]  bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
        <h1>hii</h1>
      </div>
    </main>
  );
};

export default Videos;
