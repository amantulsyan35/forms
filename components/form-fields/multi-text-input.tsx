import React, { useState } from 'react';
import {
  SelectFormFieldOptionsSchema,
  SelectFormFieldOptionsType,
} from '../../schema/form-details-schema';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '../form-fields/text-field';

interface Props {
  label: string;
  placeholder: string;
  inputProps?: unknown;
  containerClassname?: string;
  className: string;
  id: string;
}

const MultiTextInput: React.FC<Props> = ({
  label,
  placeholder,
  containerClassname,
  className,
  id,
  inputProps,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      SelectOptionsArray: [
        {
          selectoptions: '',
        },
      ],
    },
    mode: 'onChange',
    resolver: zodResolver(SelectFormFieldOptionsSchema),
  });

  const optionsData = useWatch({
    control,
    name: 'SelectOptionsArray',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'SelectOptionsArray',
  });

  console.log(optionsData);

  return (
    <div className={containerClassname ?? 'mb-4 border-2 p-4'}>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>
      {fields.map((field, index) => (
        <div className='mb-4' key={field.id}>
          <div className='flex items-center gap-4'>
            <TextField
              label=''
              className={className}
              placeholder={placeholder}
              id={id}
              inputProps={register(`SelectOptionsArray.${index}.selectoptions`)}
            />
            <AiFillDelete
              className='text-xl cursor-pointer hover:text-sky-700'
              onClick={() => remove(index)}
            />
          </div>
        </div>
      ))}
      <IoMdAddCircle
        onClick={() =>
          append({
            selectoptions: '',
          })
        }
        className='text-xl cursor-pointer hover:text-sky-700'
      />
    </div>
  );
};

export default MultiTextInput;
