export default function Textarea({ id, label, ...props }) {
  return (
    <div className="relative col-span-2">
      <textarea
        id="hs-floating-textarea-underline"
        className="peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm placeholder:text-transparent outline-0   disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
    focus:pt-6
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
        placeholder="This is a textarea placeholder"
        data-hs-textarea-auto-height=""
        {...props}
      ></textarea>
      <label
        htmlFor="hs-floating-textarea-underline"
        className="absolute top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:text-xs
      peer-focus:-translate-y-3.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-not-placeholder-shown:text-xs
      peer-not-placeholder-shown:-translate-y-3.5
      peer-not-placeholder-shown:text-gray-500 dark:peer-not-placeholder-shown:text-neutral-500 "
      >
        {label}
      </label>
    </div>
  );
}
