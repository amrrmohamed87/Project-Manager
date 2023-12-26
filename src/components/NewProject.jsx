import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const entererdDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      entererdDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: entererdDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonLabel="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4 ">
          Invalid Input
        </h2>
        <p className="mb-4 text-stone-600">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 rounded-md px-6 py-2 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
