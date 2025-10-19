interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        className="peer py-4 px-0 block w-full bg-transparent outline-0 border-t-transparent border-b-2 border-x-transparent border-b-brand-dark sm:text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:ring-0 disabled:opacity-50 disabled:pointer-events-none  dark:text-neutral-400dark:focus:border-b-neutral-600
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute font-normal text-gray-300 top-2.5 start-0 py-4 px-0 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0
      peer-focus:-translate-y-4.5
      peer-focus:text-white 
      peer-not-placeholder-shown:scale-90
      peer-not-placeholder-shown:translate-x-0
      peer-not-placeholder-shown:-translate-y-4.5
      peer-not-placeholder-shown:text-white"
      >
        {label}
      </label>
    </div>
  );
}
