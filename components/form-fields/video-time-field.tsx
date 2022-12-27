import React from 'react';

interface VideoTimeFieldProps {
  videoTime: {
    start_time_hr: number;
    start_time_min: number;
    start_time_sec: number;
    end_time_hr: number;
    end_time_min: number;
    end_time_sec: number;
  };
  handleChange: (value: string, name: string) => void;
}
const VideoTimeField = ({ videoTime, handleChange }: VideoTimeFieldProps) => {
  const handleVideoTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value, e.target.name);
  };
  return (
    <label className='w-3/4 flex flex-row gap-[15px]'>
      <div className='flex flex-col gap-[5px]'>
        <p className='text-left font-lora uppercase text-xs tracking-widest'>
          Enter start time
        </p>
        <div className='flex flex-row bg-white gap-[5px]'>
          <input
            placeholder='00'
            name='start_time_hr'
            type='number'
            max='59'
            onChange={handleVideoTime}
            className='w-full outline-none rounded-md p-[10px] '
          />
          <input
            placeholder='00'
            name='start_time_min'
            type='number'
            max='59'
            onChange={handleVideoTime}
            className='w-full outline-none rounded-md p-[10px]'
          />
          <input
            placeholder='00'
            name='start_time_sec'
            type='number'
            max='59'
            onChange={handleVideoTime}
            className='w-full outline-none rounded-md p-[10px] '
          />
        </div>
      </div>
      <div className='flex flex-col gap-[5px]'>
        <p className='text-left font-lora uppercase text-xs tracking-widest'>
          Enter end time
        </p>
        <div className='flex flex-row bg-white gap-[5px]'>
          <input
            placeholder='00'
            name='end_time_hr'
            type='number'
            max='59'
            onChange={handleVideoTime}
            className='w-full outline-none rounded-md p-[10px] '
          />
          <input
            placeholder='00'
            name='end_time_min'
            type='number'
            max='59'
            onChange={handleVideoTime}
            className='w-full outline-none rounded-md p-[10px]'
          />
          <input
            placeholder='00'
            name='end_time_sec'
            type='number'
            max='59'
            onChange={handleVideoTime}
            className='w-full outline-none rounded-md p-[10px] '
          />
        </div>
      </div>
    </label>
  );
};
export default VideoTimeField;
