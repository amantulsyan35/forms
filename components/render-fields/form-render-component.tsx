import React, { createElement } from 'react';
import { Div } from './Div';
import { Button } from './Button';
import TextField from '../form-fields/text-field';
import SelectField from '../form-fields/select-field';

interface FormProps {
  styles: any;
  component: string;
  label: string;
  name: string;
  id: string;
  type: string;
  required: boolean;
  className: string;
  children: [] | string;
}

interface ConfigProps {
  form: FormProps[];
}

const keysToComponentMap: any = {
  div: Div,
  input: TextField,
  select: SelectField,
  button: Button,
};

export const FormRenderComponent: any = (config: ConfigProps) => {
  return (
    <React.Fragment>
      {config.form.map((c) => {
        return createElement(
          keysToComponentMap[c.component],
          {
            id: c.id,
            key: c.id,
            label: c.label,
            className: c.className ? c.className : null,
          },
          c.children &&
            (typeof c.children === 'string'
              ? c.children
              : c.children.map((c) => FormRenderComponent(c)))
        );
      })}
    </React.Fragment>
  );
};
