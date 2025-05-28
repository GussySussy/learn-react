import React from "react";
import "./Select.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: string;
  labelText?: string;
  options: string[];
  defaultOption?: string;
}

const Select: React.FC<SelectProps> = ({
  variant = "primary",
  className,
  labelText,
  options,
  defaultOption,
  ...props
}) => {
  return (
    <div className="select-container">
      {labelText ? <div className="select-label">{labelText}</div> : null}
      <select
        className={`select--${variant} ${className}`}
        defaultValue="default"
        {...props}
      >
        {defaultOption ? <option value="default">{defaultOption}</option> : null}
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
