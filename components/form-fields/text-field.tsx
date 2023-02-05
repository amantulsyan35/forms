import React from 'react';

interface TextFieldProps {
  id?: string;
  label: string;
  error?: string;
  className: string;
  placeholder: string;
  containerClassname?: string;
  inputProps?: unknown;
}

const TextField = (props: TextFieldProps) => {
  return (
    <div className={props.containerClassname ?? 'mb-4 w-full'}>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className={props.className}
        id={props.id}
        type='text'
        placeholder={props.placeholder}
        {...(props.inputProps ?? {})}
      />
      {props.error ? <span>{props.error}</span> : null}
    </div>
  );
};

export default TextField;
