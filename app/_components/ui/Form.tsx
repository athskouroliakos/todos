'use client';
import { useRef } from 'react';
import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
}

const Form = ({ children, action, className }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
