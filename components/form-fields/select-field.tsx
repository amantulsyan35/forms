import React from 'react';

interface OptionItem {
  id: number;
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: OptionItem[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  labelHeading: string;
}

const SelectField = ({
  options,
  handleChange,
  value,
  labelHeading,
}: SelectFieldProps) => {
  return (
    <label className='w-3/4 flex flex-col gap-[5px] '>
      <p className='text-left font-lora uppercase text-xs tracking-widest'>
        {labelHeading}
      </p>
      <select
        onChange={handleChange}
        // value={value}
        className='w-full rounded-md p-[10px] shadow-sm'
      >
        {options?.map((opt) => {
          return (
            <option key={opt?.id} value={opt.value}>
              {opt?.label}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default SelectField;
