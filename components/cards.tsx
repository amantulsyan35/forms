import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export const YoutubeCard = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className='relative w-1/4 h-1/2'>
      {hasWindow && (
        <ReactPlayer
          width='100%'
          height='100%'
          url='https://youtu.be/kd_CEW4WksY'
          muted={false}
          playing={false}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
              },
            },
          }}
        />
      )}

      <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-between  bg-black/[0.4]'></div>
    </div>
  );
};
