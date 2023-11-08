import React from 'react';

type A = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends A {
  label: string;
  errors?: string;
  touched?: boolean;
  className?: string;
}
function FormField({ label, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-[14px] font-light" htmlFor={label}>
        {label}
      </label>
      <input
        {...rest}
        className={`shadow-[1px_1px_0px_0px_#000] h-[50px] border-solid border-[0.5px] border-black bg-white rounded-md pl-5 ${className}`}
      />
    </div>
  );
}

export default FormField;
