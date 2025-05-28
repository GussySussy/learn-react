import React from "react";
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  buttonText,
  ...props
}) => {
  return (
    <button className={`button--${variant} ${className}`} {...props}>
      {buttonText}
    </button>
  );
};

export default Button;
