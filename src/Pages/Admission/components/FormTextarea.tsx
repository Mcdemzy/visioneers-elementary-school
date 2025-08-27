// components/FormTextarea.tsx
import { ChangeEvent } from "react";

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export default function FormTextarea({
  id,
  label,
  value,
  onChange,
  required = false,
  rows = 4,
}: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-md font-medium text-black mb-1">
        {label} {required && <span className="text-[#821528]">*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="bg-[#FEF1F9] placeholder:text-[#8A8A8A] placeholder:font-[300] mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
