import React from 'react';

interface InputProps {
  className: string;
  style: any;
  id: string;
  placeholder?: string;
  children: React.ReactNode;
}

export const Input = ({
  className,
  placeholder,
  style,
  id,
  children,
}: InputProps) => {
  return (
    <input
      className={className}
      id={id}
      type='text'
      placeholder={placeholder}
    />
  );
};
