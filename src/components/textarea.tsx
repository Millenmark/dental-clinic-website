interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export default function Textarea({ id, label, ...props }: TextareaProps) {
  return (
    <div className="relative col-span-2">
      <textarea
        id={id}
        className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-brand-dark sm:text-sm placeholder:text-transparent outline-0   disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
        placeholder=" "
        data-hs-textarea-auto-height=""
        {...props}
      ></textarea>
      <label
        htmlFor={id}
        className="absolute text-gray-300 top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:text-xs
      peer-focus:-translate-y-3.5
      peer-focus:text-white 
      peer-not-placeholder-shown:text-xs
      peer-not-placeholder-shown:-translate-y-3.5
      peer-not-placeholder-shown:text-white  "
      >
        {label}
      </label>
    </div>
  );
}
