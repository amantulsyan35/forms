import React from 'react';

interface ButtonProps {
  className: string;
  style: any;
  id: string;
  children: React.ReactNode;
}

export const Button = ({ className, style, id, children }: ButtonProps) => {
  return (
    <button id={id} className={className} style={style}>
      {children}
    </button>
  );
};
