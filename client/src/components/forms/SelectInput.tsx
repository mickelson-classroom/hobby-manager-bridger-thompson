import { FC, useState } from "react";

export interface SelectInputControl {
  value: string;
  setValue: (i: string) => void;
  options: string[];
}

export const useSelectInput = (
  initialValue: string,
  options: string[]
): SelectInputControl => {
  const [value, setValue] = useState<string>(initialValue);
  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
  };
  return { value, setValue: handleChange, options };
};

interface Props {
  label?: string;
  control: SelectInputControl;
  labelClassName?: string;
  inputClassName?: string;
}

export const SelectInput: FC<Props> = ({
  label,
  control,
  labelClassName = "col-2",
  inputClassName,
}) => {
  const computedLabel = label?.toLowerCase().replace(" ", "");
  const labelClasses = `${labelClassName} my-auto`;
  const inputClasses = `${inputClassName} my-auto`;

  return (
    <div className="form-group row">
      {label && (
        <div className={labelClasses}>
          <label htmlFor={computedLabel} className="col-form-label">
            {label}:
          </label>
        </div>
      )}
      <div className={inputClasses}>
        <select
          name={computedLabel}
          id={computedLabel}
          value={control.value}
          className="form-select"
          onChange={(e) => control.setValue(e.target.value)}
        >
          <option value="" disabled></option>
          {control.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
