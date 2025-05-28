import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant? : string
}


const Button = ({
  type,
  buttonText,
  variant = 'default',
  className = '',
  fn,
  disabled =false
}: {
  type: "submit" | "reset" | "button";
  buttonText: string;
  variant?: string;
  className?: string;
  fn?: () => void;
  disabled?: boolean
}) => {
  return (
    <>
      <button
        type={type}
        className={`button--${variant} ${className}`}
        onClick={fn ? fn : () => console.log(`button was clicked`)}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
