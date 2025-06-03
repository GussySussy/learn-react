import React from "react";
import "./Select.css";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: string;
  labelText?: string;
  options: { value?: number; name: string }[];
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
    <div className={`select-container--${variant}`}>
      {labelText ? <div className="select-label">{labelText}</div> : null}
      <select
        className={`select--${variant} ${className}`}
        defaultValue="default"
        {...props}
      >
        {defaultOption ? (
          <option value="default">{defaultOption}</option>
        ) : null}
        {options.map((option) => (
          <option value={option.value ? option.value : option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
