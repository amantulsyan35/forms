import React, { useState } from 'react';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import {
  FormDetailsSchema,
  FormDetailsType,
} from '../schema/form-details-schema';
import { formFieldOptions } from '../data/form-details-data';
import TextField from './form-fields/text-field';
import SelectField from './form-fields/select-field';
import MultiTextInput from './form-fields/multi-text-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiFillDelete } from 'react-icons/ai';

interface FormDetailsProps {
  onSubmitReady: (data: FormDetailsType) => void;
}

const FormDetailsForm = ({ onSubmitReady }: FormDetailsProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fieldDetails: [
        {
          fieldType: '',
          fieldLabel: '',
          fieldName: '',
          selectOptions: [{ selectoptions: '' }],
        },
      ],
    },
    resolver: zodResolver(FormDetailsSchema),
  });
  const formData = useWatch({
    control,
    name: 'fieldDetails',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fieldDetails',
  });

  return (
    <form className='border-2 p-4' onSubmit={handleSubmit(() => {})}>
      {fields.map((f: { id: React.Key | null | undefined }, idx: any) => {
        console.log(f);
        return (
          <div key={f.id} className='border-2 p-4 mb-4'>
            <SelectField
              id='fieldType'
              label='Choose the desired Field Type'
              // error={errors?.fieldDetails?.root?.message as string}
              options={formFieldOptions}
              containerClassname='w-full mb-4'
              className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              inputProps={register(`fieldDetails.${idx}.fieldType`)}
            />
            {formData[idx]?.fieldType === 'select' && (
              <MultiTextInput
                id='selectOptions'
                label='Add options'
                placeholder='options for select fields'
                // inputProps={register(`fieldDetails.${idx}.selectoptions`)}
                // inputProps={register(`fieldDetails.${idx}.selecto`)}
                className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            )}
            <TextField
              id='fieldName'
              label='Enter the field Name'
              // error={errors?.fieldName?.message as string}
              placeholder='Field Name'
              containerClassname='mb-4'
              className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              inputProps={register(`fieldDetails.${idx}.fieldName`)}
            />
            <TextField
              id='fieldLabel'
              label='Enter the field Label(optional)'
              // error={errors?.fieldLabel?.message as string}
              placeholder='Field Label'
              containerClassname='mb-4'
              className='shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              inputProps={register(`fieldDetails.${idx}.fieldLabel`)}
            />

            <AiFillDelete
              className='text-xl cursor-pointer hover:text-sky-700'
              onClick={() => remove(idx)}
            />
          </div>
        );
      })}
      <div className='flex flex-row gap-4 items-center'>
        <button
          type='button'
          onClick={() =>
            append({
              fieldType: 'input',
              fieldName: '',
              fieldLabel: '',
              selectOptions: [
                {
                  selectoptions: '',
                },
              ],
            })
          }
          className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Add Field
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

export default FormDetailsForm;
