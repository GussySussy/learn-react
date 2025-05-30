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
      {labelText ? <div className="input-label">{labelText}</div> : null}
      {/* <div className="input--clear-container  "></div> */}
      <input className={`input--${variant} ${className}`} {...props} />
    </div>
  );
};

export default Input;
