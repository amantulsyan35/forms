import React from 'react';

interface OptionItem {
  id: number;
  value: string;
  label: string;
}

interface SelectProps {
  className: string;
  placeholder: string;
  style: any;
  id: string;
  options: OptionItem[];
  children: React.ReactNode;
}

export const SelectInput = ({
  className,
  placeholder,
  style,
  id,
  children,
  options,
}: SelectProps) => {
  return (
    <select className={className} id={id}>
      {options?.map((opt) => {
        return (
          <option key={opt?.id} value={opt.value}>
            {opt?.label}
          </option>
        );
      })}
    </select>
  );
};
