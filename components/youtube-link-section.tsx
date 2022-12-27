import React from 'react';
import { useAtom } from 'jotai';
import { pageAtom, Page } from '../atoms/page-atoms';
import { youtubeDetailsAtom } from '../atoms/video-atoms';

const YoutubeLinkSection = () => {
  const [, setPage] = useAtom(pageAtom);
  const [youtubeDetails, setYoutubeDetails] = useAtom(youtubeDetailsAtom);

  const handleGenerate = () => {
    setPage(Page.generateContext);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1 className='font-Book text-6xl'>Create Context</h1>
      <label className='w-3/4 flex flex-col gap-[5px] '>
        <p className='text-left font-lora uppercase text-xs tracking-widest'>
          Youtube Link
        </p>
        <input
          type='text'
          name='youtubeLink'
          className='w-full rounded-md p-[10px] shadow-sm'
          onChange={handleLinkChange}
          value={youtubeDetails?.youtubeLink}
        />
      </label>
      <button
        onClick={handleGenerate}
        className='font-lora p-[8px] rounded-md pointer-cursor bg-[#C2262E] text-white hover:opacity-80'
      >
        Generate
      </button>
    </>
  );
};

export default YoutubeLinkSection;
