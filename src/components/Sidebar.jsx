import Button from "./Button";

export default function Siderbar({ onSelect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl  ">
      <h2 className=" mb-8 uppercase md:text-xl text-sky-200 font-bold mt-6">
        Your Projects
      </h2>
      <div>
        <Button onClick={onSelect}>+ Add projects</Button>
      </div>
      <ul>...</ul>
    </aside>
  );
}
