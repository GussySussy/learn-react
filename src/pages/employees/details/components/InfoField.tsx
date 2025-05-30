import React from "react";
import "./InfoField.css";

interface InfoFieldProps {
  labelText: string;
  value: string;
}

const InfoField = ({ labelText, value }: InfoFieldProps) => {
  return (
    <div className={`info-field-container`}>
      <div className="info-field-label">{labelText}</div>
      <div className="info-field-value">{value}</div>
      {/* <input className={`input--${variant} ${className}`} {...props} /> */}
    </div>
  );
};

export default InfoField;
