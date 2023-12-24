export default function Input({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col my-4">
      <label className="font-bold text-sm uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className="inputs" {...props} />
      ) : (
        <input className="inputs" {...props} />
      )}
    </p>
  );
}
