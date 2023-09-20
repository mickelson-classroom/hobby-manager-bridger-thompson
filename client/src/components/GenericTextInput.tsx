import { FC } from "react";

interface GenericTextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  isValid?: boolean;
  invalidMessage?: string;
}

const GenericTextInput: FC<GenericTextInputProps> = ({
  id,
  label,
  value,
  onChange,
}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default GenericTextInput;
