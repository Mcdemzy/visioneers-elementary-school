// components/ImmunizationSection.tsx
import { ChangeEvent } from "react";
import FormInput from "./FormInput";

interface ImmunizationSectionProps {
  formData: {
    immunizationA: string;
    immunizationB: string;
    immunizationC: string;
    immunizationD: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImmunizationSection({
  formData,
  onChange,
}: ImmunizationSectionProps) {
  const immunizations = ["A", "B", "C", "D"];

  return (
    <>
      <h2 className="mt-4 mb-6 text-[#333333] flex gap-x-1.5 justify-center items-center font-Inter text-[18px] font-bold leading-[29.05px]">
        IMMUNIZATION OBTAINED WITH DATES
      </h2>
      {immunizations.map((letter) => (
        <div
          key={letter}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
        >
          <FormInput
            id={`immunization${letter}`}
            label={`(${letter.toLowerCase()})`}
            value={formData[`immunization${letter}` as keyof typeof formData]}
            onChange={onChange}
            required
          />
          <FormInput
            id={`dates${letter}`}
            label="Dates"
            type="date"
            value=""
            onChange={onChange}
            required
          />
        </div>
      ))}
    </>
  );
}
