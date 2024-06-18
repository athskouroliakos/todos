'use client';
import { ReactNode } from 'react';

interface buttonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
}

const Button = ({ type, text }: buttonProps) => {
  return (
    <button type={type} className="bg-white p-2 text-black  ml-1 ">
      {text}
    </button>
  );
};

export default Button;
