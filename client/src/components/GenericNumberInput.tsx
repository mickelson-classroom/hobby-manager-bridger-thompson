import { FC } from "react";

interface GenericNumberInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  isValid?: boolean;
  invalidMessage?: string;
}

export const GenericNumberInput: FC<GenericNumberInputProps> = ({
  id,
  label,
  value,
  onChange,
  isValid,
  invalidMessage = "Invalid input",
}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="number"
        className={`form-control ${isValid ? 'is-valid' : 'is-invalid'}`}
        id={id}
        value={value}
        onChange={handleInputChange}
      />
      <div className="invalid-feedback">{invalidMessage}</div>
      <div className='valid-feedback'>Looks good!</div>
    </div>
  );
};
