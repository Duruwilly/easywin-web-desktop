import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import Label from '../Label/Label';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string | boolean | string[];
  rows?: number;
  label?: string;
  isRequired?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ name, error, rows, label, isRequired, ...rest }, ref) => {
    return (
      <div className="w-full my-2">
        <Label label={label ?? ''} isRequired={isRequired} />
        <textarea
          rows={rows}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          name={name}
          {...rest}
          className={`w-full px-4 py-[10px] border ${
            error ? 'border-red-500' : 'border-[#D0D5DD]'
          } rounded-lg focus:outline-none focus:border-brand-600 text-gray400 text-sm`}
        />
        {error && <small className="px-3 text-red-500">{error}</small>}
      </div>
    );
  },
);

export default TextArea;
