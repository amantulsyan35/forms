import React from 'react';

interface OptionItem {
  id: number;
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: OptionItem[];
  id: string;
  label: string;
  error?: string;
  containerClassname?: string;
  className: string;
  inputProps: unknown;
}

const SelectField = (props: SelectFieldProps) => {
  return (
    <div className={props.containerClassname ?? 'mb-4'}>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <select
        className={props.className}
        id={props.id}
        {...(props.inputProps ?? {})}
      >
        {props.options?.map((opt) => {
          return (
            <option key={opt?.id} value={opt.value}>
              {opt?.label}
            </option>
          );
        })}
      </select>
      {props.error ? <span>{props.error}</span> : null}
    </div>
  );
};

export default SelectField;
