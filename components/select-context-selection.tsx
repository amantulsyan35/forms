import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { trpc } from '../utils/trpc';
import { useAtom } from 'jotai';
import { youtubeDetailsAtom } from '../atoms/video-atoms';
import { router } from '../src/server/trpc';

const SelectContextSection = () => {
  const router = useRouter();
  const [youtubeDetails, setYoutubeDetails] = useAtom(youtubeDetailsAtom);
  const saveYoutubeVideo = trpc.video.saveVideoDetails.useMutation();

  const handleGenerate = async () => {
    router.push('/context/22');
    // await saveYoutubeVideo.mutate({
    //   youtubeLink: 'https://youtu.be/9kPiq8-i-0M',
    //   startTime: 15,
    //   endTime: 30,
    // });
    // if (saveYoutubeVideo?.isSuccess) {
    //   router.push('/context/22');
    // }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className='font-Book text-6xl'>Select Context</h1>
      <div className='flex gap-4'>
        <label className='w-3/4 flex flex-col gap-[5px] '>
          <p className='text-left font-lora uppercase text-xs tracking-widest'>
            Start Time
          </p>
          <input
            placeholder='In Seconds'
            name='startTime'
            type='number'
            min={0}
            onChange={handleVideoChange}
            className='outline-none text-sm rounded-md p-[10px] '
          />
        </label>
        <label className='w-3/4 flex flex-col gap-[5px] '>
          <p className='text-left font-lora uppercase text-xs tracking-widest'>
            End Time
          </p>
          <input
            placeholder='In Seconds'
            name='endTime'
            type='number'
            min={0}
            onChange={handleVideoChange}
            className='outline-none text-sm rounded-md p-[10px] '
          />
        </label>
      </div>
      <button
        onClick={handleGenerate}
        className='font-lora p-[8px] rounded-md pointer-cursor bg-[#C2262E] text-white hover:opacity-80'
      >
        Generate
      </button>
    </>
  );
};

export default SelectContextSection;
