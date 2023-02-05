import React from 'react';
import { useForm } from 'react-hook-form';
import {
  companySuffixOptions,
  cityOptions,
  countryOptions,
  stateOptions,
} from '../../data/incorporation-form-data';
import TextField from '../form-fields/text-field';
import SelectField from '../form-fields/select-field';
import {
  CompanyInfoFormSchema,
  CompanyInformationFormValue,
} from '../../schema/incorporation-form/company-info-schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface CompanyInformationFormProps {
  onSubmitReady: (data: CompanyInformationFormValue) => void;
}

const CompanyInformationForm = ({
  onSubmitReady,
}: CompanyInformationFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CompanyInformationFormValue>({
    resolver: zodResolver(CompanyInfoFormSchema),
  });

  return (
    <form className='border-2 p-4' onSubmit={handleSubmit(onSubmitReady)}>
      <div className='flex items-center w-full gap-4 mb-4'>
        <TextField
          id='entityName'
          label='Proposed Entity Name'
          error={errors?.entityName?.message as string}
          placeholder='Company Name'
          containerClassname='mb-4 w-3/4'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('entityName')}
        />
        <SelectField
          id='companySuffix'
          label='Company Suffix Value'
          error={errors?.companySuffix?.message as string}
          options={companySuffixOptions}
          containerClassname='w-1/4 mb-4'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('companySuffix')}
        />
      </div>
      <div className='flex flex-col w-full mb-4'>
        <TextField
          id='addressLine1'
          label='Address Line 1'
          placeholder='Address Line 1'
          error={errors?.addressLine1?.message as string}
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('addressLine1')}
        />
        <TextField
          id='addressLine2'
          label='Address Line 2'
          placeholder='Address Line 2'
          error={errors?.addressLine2?.message as string}
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('addressLine2')}
        />
      </div>
      <div className='flex items-center gap-4'>
        <TextField
          id='postalCode'
          label='Postal Code'
          placeholder='post code'
          error={errors?.postalCode?.message as string}
          containerClassname='mb-4 w-1/2'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('postalCode')}
        />
        <SelectField
          id='city'
          label='City'
          error={errors?.city?.message as string}
          options={cityOptions}
          containerClassname='w-1/2 mb-4'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('city')}
        />
      </div>
      <div className='flex items-center gap-4'>
        <SelectField
          id='country'
          label='Country'
          error={errors?.country?.message as string}
          options={countryOptions}
          containerClassname='w-1/2 mb-4'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('country')}
        />
        <SelectField
          id='state'
          label='State'
          error={errors?.state?.message as string}
          options={stateOptions}
          containerClassname='w-1/2 mb-4'
          className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          inputProps={register('state')}
        />
      </div>
      <div className='flex flex-row gap-4 items-center'>
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

export default CompanyInformationForm;
