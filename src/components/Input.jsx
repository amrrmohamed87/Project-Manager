import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col my-4">
      <label className="font-bold text-sm uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className="inputs" {...props} />
      ) : (
        <input ref={ref} className="inputs" {...props} />
      )}
    </p>
  );
});

export default Input;
