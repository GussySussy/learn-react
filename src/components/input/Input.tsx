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
    <div className="input-container">
      {labelText ? <div className="label">{labelText}</div> : null}
      <input className={`input--${variant} ${className}`} {...props} />
    </div>
  );
};

export default Input;
