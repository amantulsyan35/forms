import React from 'react';
import { useAtom } from 'jotai';
import { GoBackButton } from '../../../components/button';
import { pageAtom, Page } from '../../../atoms/page-atoms';
import YoutubeLinkSection from '../../../components/youtube-link-section';
import SelectContextSection from '../../../components/select-context-selection';

const NewContext = () => {
  const [page, setPage] = useAtom(pageAtom);

  const handleBack = () => {
    setPage(Page.youtubeLink);
  };

  if (page === Page.youtubeLink) {
    return (
      <main>
        <section className=' h-[25rem] flex flex-col items-center justify-center relative bg-[#C2262E] '>
          <div className='h-[30rem] w-[50rem] absolute  -bottom-[15rem] bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
            <YoutubeLinkSection />
          </div>
        </section>
      </main>
    );
  }

  if (page === Page.generateContext) {
    return (
      <main>
        <section className=' h-[25rem] flex flex-col items-center justify-center relative bg-[#C2262E] '>
          <div className='h-[30rem] w-[50rem] absolute  -bottom-[15rem] bg-slate-50 rounded-md shadow-md flex flex-col items-center justify-center p-4 gap-8'>
            <GoBackButton handleBack={handleBack} />
            <SelectContextSection />
          </div>
        </section>
      </main>
    );
  }

  return null;
};

export default NewContext;
