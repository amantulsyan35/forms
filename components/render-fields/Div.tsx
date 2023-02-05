import React from 'react';

interface DivProps {
  className: string;
  style: any;
  id: string;
  children: React.ReactNode;
}

export const Div = ({ className, style, id, children }: DivProps) => {
  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};
