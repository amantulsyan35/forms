import React, { useState, useEffect } from 'react';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';
import CustomVideoPlayer from '../../../components/custom-video-player';

const VideoPage = () => {
  const id = useRouter().query.id as string;
  const [hasWindow, setHasWindow] = useState(false);

  const videoDetails = trpc.video.getVideoDetails.useQuery({
    id,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <main>
      <section className=' h-[25rem] flex flex-col items-center justify-center relative bg-[#C2262E] '>
        <div className='h-[30rem] w-[50rem] absolute -bottom-[15rem] bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
          {hasWindow && <CustomVideoPlayer videoData={videoDetails?.data} />}
        </div>
      </section>
    </main>
  );
};

export default VideoPage;
