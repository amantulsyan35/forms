import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { youtubeDetailsAtom } from '../atoms/video-atoms';

// import axios from 'axios';
// import { useQuery } from 'react-query';

const SelectContextSection = () => {
  const [youtubeDetails, setYoutubeDetails] = useAtom(youtubeDetailsAtom);

  const handleGenerate = () => {
    console.log(youtubeDetails);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  // const {
  //   isLoading,
  //   isError,
  //   data: timeStampArray,
  //   error,
  //   isFetchedAfterMount,
  // } = useQuery('timestampArray', () =>
  //   axios.get(
  //     ` https://yt.lemnoslife.com/videos?part=chapters&id=${
  //       youtubeDetails?.youtubeLink.split('https://youtu.be/')[1]
  //     }`
  //   )
  // );

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  // if (!isFetchedAfterMount) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   console.log(error);
  // }

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
