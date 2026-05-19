import type { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  label: string;
  id: string;
  registration: UseFormRegisterReturn;
  errorMessage?: string;
  required?: boolean;
  type?: string;
}

export function FormField({
  label,
  id,
  registration,
  errorMessage,
  required,
  type = "text",
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-white text-sm lg:text-base">
        {label} {required && <span className="text-white">*</span>}
      </label>
      <input
        id={id}
        type={type}
        {...registration}
        className="
          w-full rounded-2xl border bg-transparent
          px-5 py-3 text-white text-sm lg:text-base
          focus:outline-none transition
          border-white focus:border-[#bef19f]
        "
      />
      {errorMessage && <p className="text-white/50 text-xs">{errorMessage}</p>}
    </div>
  );
}
