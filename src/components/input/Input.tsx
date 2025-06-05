import React from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  labelText?: string;
}

const Input: React.FC<InputProps> = ({
  variant = "primary",
  className,
  labelText,
  ...props
}) => {
  return (
    <div className={`input-container input-container--${variant}`}>
      {labelText ? <label className="input-label">{labelText}</label> : null}
      <input
        className={`input--${variant} ${className}`}
        {...props}
        aria-label={labelText ? labelText : ""}
      />
    </div>
  );
};

export default Input;
