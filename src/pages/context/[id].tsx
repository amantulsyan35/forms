import React, { useState, useEffect, useRef } from 'react';
import CustomVideoPlayer from '../../../components/custom-video-player';

const VideoPage = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <main>
      <section className=' h-[25rem] flex flex-col items-center justify-center relative bg-[#C2262E] '>
        <div className='h-[30rem] w-[50rem] absolute -bottom-[15rem] bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
          {hasWindow && <CustomVideoPlayer />}
        </div>
      </section>
    </main>
  );
};

export default VideoPage;
