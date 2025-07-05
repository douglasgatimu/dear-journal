import { useState } from "react";

const NewEntry = ({ onAddEntry, submissionStatus }) => {
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
    <div className="rounded-2xl shadow-md bg-white border border-gray-100 p-6 space-y-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          disabled={submissionStatus === "submitting"}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
          placeholder="Title"
          className="w-full p-2 bg-white border border-gray-300 shadow-sm rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-blue-100 focus:outline-none disabled:opacity-50"
        />

        <textarea
          disabled={submissionStatus === "submitting"}
          onChange={(e) => setBody(e.target.value)}
          id="entry-body"
          value={body}
          placeholder="Type away..."
          className="w-full pt-4 px-3 pb-3 bg-white border border-gray-300 shadow-sm rounded-md h-40 resize-none text-sm text-gray-700 focus:ring-2 focus:ring-blue-100 focus:outline-none disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!title || !body || submissionStatus === "submitting"}
          className="px-3 py-2 rounded-lg cursor-pointer bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submissionStatus === "submitting"
            ? "Adding entry..."
            : "Save your Entry"}
        </button>
      </form>

      {submissionStatus === "success" && (
        <div className="text-center text-green-600 text-lg font-semibold border-t pt-2">
          Success!
        </div>
      )}
    </div>
  );
};

export default NewEntry;
