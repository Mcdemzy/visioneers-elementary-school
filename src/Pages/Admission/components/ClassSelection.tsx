// components/ClassSelection.tsx
import { ChangeEvent } from "react";

interface ClassSelectionProps {
  selectedClasses: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ClassSelection({
  // selectedClasses,
  onChange,
}: ClassSelectionProps) {
  const classes = [
    { id: "dayCare", label: "Day Care" },
    { id: "nursery", label: "Nursery" },
    { id: "primary", label: "Primary" },
  ];

  return (
    <div className="mb-6">
      <label className="block text-md font-medium text-black mb-1">
        Class to which admission is sought, please tick appropriate{" "}
        <span className="text-[#821528]">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {classes.map(({ id, label }) => (
          <div key={id} className="flex items-center">
            <input
              type="checkbox"
              id={id}
              onChange={onChange}
              className="w-7 h-7 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label
              htmlFor={id}
              className="ml-2 text-md font-[500] text-[#333333]"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
