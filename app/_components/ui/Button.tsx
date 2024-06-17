'use client';

import { ReactNode } from 'react';

interface buttonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;

  actionButton?: boolean;
}

const Button = ({ type, text, actionButton }: buttonProps) => {
  return (
    <button
      type={type}
      className="bg-white p-2 text-black rounded border-2 border-black ml-1"
    >
      {text}
    </button>
  );
};

export default Button;
