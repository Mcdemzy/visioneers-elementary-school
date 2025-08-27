// components/FormInput.tsx
import { ChangeEvent } from "react";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  className = "",
}: FormInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-md font-medium text-black mb-1">
        {label} {required && <span className="text-[#821528]">*</span>}
      </label>
      <input
      readOnly={true}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
