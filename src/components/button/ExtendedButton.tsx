import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  buttonText?: string;
  className?: string
};

const ExtendedButton: React.FC<ButtonProps> = ({
  variant = "primary",
  buttonText,
  className,
  ...props
}) => {
  return (
    <>
      <button
        type={props.type}
        className={`button--${variant} ${className}`}
        onClick={
          props.onClick
            ? props.onClick
            : () => console.log(`button was clicked`)
        }
        disabled={props.disabled}
      >
        {buttonText}
      </button>
    </>
  );
};

export default ExtendedButton;
