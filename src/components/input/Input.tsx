import "./Input.css";
import type { InputHTMLAttributes, ReactNode, RefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  labelText?: string;
  className?: string;
  ref?: RefObject<null | HTMLInputElement>;
  endAdornment?: ReactNode;
}

const ExtendedInput: React.FC<InputProps> = ({
  variant = "primary",
  labelText,
  className,
  ref,
  endAdornment,
  ...props
}) => {
  return (
    <div className="input-container">
      {labelText ? <div className="label">{labelText}</div> : <></>}
      <div className="input-field-container">
        <input
          disabled={props.disabled}
          type={props.type}
          placeholder={props.placeholder}
          className={`input--${variant} ${className} ${
            props.disabled ? `input--disabled` : ""
          }`}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
          ref={ref}
        />
        <div>{endAdornment ? endAdornment : null}</div>
      </div>
    </div>
  );
};

export default ExtendedInput;
