import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import TextField from '../form-fields/text-field';
import {
  DirectorInfoFormSchema,
  DirectorInfoFormValue,
} from '../../schema/incorporation-form/director-info-schema';

interface DirectorInformationFormProps {
  onSubmitReady: (data: DirectorInfoFormValue) => void;
}

const DirectorInformationForm = ({
  onSubmitReady,
}: DirectorInformationFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DirectorInfoFormValue>({
    resolver: zodResolver(DirectorInfoFormSchema),
  });

  return (
    <form className='border-2 p-4' onSubmit={handleSubmit(onSubmitReady)}>
      <div className='flex items-center w-full gap-4 mb-4'>
        <TextField
          id='directorName'
          label='Director Name'
          error={errors?.directorName?.message as string}
          placeholder='Director Name'
          containerClassname='mb-4 w-3/4'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('directorName')}
        />
      </div>
      <div className='flex flex-row gap-4 items-center'>
        <button
          type='submit'
          className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Back
        </button>
        <button
          type='submit'
          className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default DirectorInformationForm;
