import { useState } from "react";
const NewEntry = ({ onAddEntry }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) return;

    onAddEntry({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="new-entry-form border border-gray-400 shadow-sm rounded-none p-2">
      <form onSubmit={handleSubmit} className="the-form flex flex-col gap-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
          placeholder="Title"
          className="w-full p-1 bg-white border border-gray-300 shadow-sm rounded-none"
        />

        <textarea
          onChange={(e) => setBody(e.target.value)}
          id="entry-content"
          value={body}
          placeholder="Type away..."
          className="w-full pt-4 px-3 pb-3 bg-white border border-gray-300 shadow-sm rounded-none h-40 resize-none whitespace-pre-wrap overflow-hidden"
        />

        <button
          disabled={!title || !body}
          className="cursor-pointer bg-cyan-500 font-bold text-black border border-gray-400 shadow-sm rounded-none text-center w-full
"
        >
          Save your Entry
        </button>
      </form>
    </div>
  );
};

export default NewEntry;
