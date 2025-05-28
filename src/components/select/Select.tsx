import React from "react";
import "./Select.css";

const Select = ({
  labelText,
  selectName,
  defaultText,
  options,
  variant,
}: {
  variant?: string;
  labelText: string;
  selectName: string;
  defaultText: string;
  options: { optionName: string; optionValue?: string }[];
}) => {
  return (
    <div className="select-container">
      {labelText ? <label>{labelText}</label> : <></>}
      <select name={selectName} className={`select--${variant?variant : `default`}`}>
        {defaultText ? (
          <option value="" selected>
            {defaultText}
          </option>
        ) : (
          <></>
        )}
        {options.map((option) => (
          <option
            value={option.optionValue ? option.optionValue : option.optionName}
          >
            {option.optionName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
