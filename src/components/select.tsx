import React from "react";
import type { ITreatment } from "../general";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: ITreatment[];
}

export default function Select({ id, label, options, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        id={id}
        className="peer py-4 px-0 block w-full bg-transparent outline-0 border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm
        appearance-none focus:border-b-gray-400 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
        dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:border-b-neutral-600
        focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
        {...props}
      >
        <option value="" disabled selected>
          Select a Service
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute top-2.5 start-0 py-4 px-0 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]
        peer-disabled:opacity-50 peer-disabled:pointer-events-none
        peer-focus:scale-90 peer-focus:translate-x-0 peer-focus:-translate-y-4.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
        peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0 peer-not-placeholder-shown:-translate-y-4.5
        peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 dark:text-neutral-500"
      >
        {label}
      </label>
    </div>
  );
}
