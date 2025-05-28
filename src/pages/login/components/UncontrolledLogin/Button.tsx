import React, { type RefObject } from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  ref?: RefObject<HTMLButtonElement | null>
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ref,
  ...props 
}) => {
  return (
    <button 
      ref={ref}
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 