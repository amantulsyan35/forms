import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import Draggable from 'react-draggable';
import Loading from '../../../components/loading';
import { GoBackButton } from '../../../components/button';
import { pageAtom, Page } from '../../../atoms/page-atoms';
import YoutubeLinkSection from '../../../components/youtube-link-section';
import SelectContextSection from '../../../components/select-context-selection';

const NewContext = () => {
  const router = useRouter();
  const [page, setPage] = useAtom(pageAtom);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setIsLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  const handleBack = () => {
    setPage(Page.youtubeLink);
  };

  if (isLoading) {
    return (
      <main>
        <section className=' h-[25rem] flex flex-col items-center justify-center relative bg-[#C2262E] '>
          <div className='h-[30rem] w-[50rem] absolute  -bottom-[15rem] bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
            <Loading />
          </div>
        </section>
      </main>
    );
  }

  if (page === Page.youtubeLink) {
    return (
      <main className='relative flex justify-center items-center'>
        <section className='h-[25rem] w-full overflow-y-scroll flex  gap-4 flex-wrap justify-center p-4 bg-[#C2262E]'></section>
        <Draggable>
          <div className='h-[30rem] cursor-pointer w-[50rem] absolute -bottom-[15rem]  bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
            <YoutubeLinkSection />
          </div>
        </Draggable>
      </main>
    );
  }

  if (page === Page.generateContext) {
    return (
      <main className='relative flex justify-center items-center'>
        <section className='h-[25rem] w-full overflow-y-scroll flex gap-4 flex-wrap justify-center p-4 bg-[#C2262E]'></section>
        <Draggable>
          <div className='h-[30rem] cursor-pointer w-[50rem] absolute -bottom-[15rem]  bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
            <GoBackButton handleBack={handleBack} />
            <SelectContextSection />
          </div>
        </Draggable>
      </main>
    );
  }

  return null;
};

export default NewContext;
