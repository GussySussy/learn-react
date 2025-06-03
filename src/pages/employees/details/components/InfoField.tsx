import React from "react";
import "./InfoField.css";

interface InfoFieldProps {
  labelText?: string;
  value: string | number;
}

const InfoField = ({ labelText, value }: InfoFieldProps) => {
  return (
    <div className={`info-field-container`}>
      {labelText ? <div className="info-field-label">{labelText}</div> : null}
      <div className="info-field-value">{value}</div>
      {/* <input className={`input--${variant} ${className}`} {...props} /> */}
    </div>
  );
};

export default InfoField;
