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
    <div className="border border-gray-300 p-4 rounded-lg max-w-xl mx-auto mt-4 bg-white space-y-4">
      <h2 className="text-lg font-medium mb-2">What's on your mind?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          disabled={submissionStatus === "submitting"}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
          placeholder="Title"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 disabled:opacity-50"
        />

        <textarea
          rows="4"
          disabled={submissionStatus === "submitting"}
          onChange={(e) => setBody(e.target.value)}
          id="entry-body"
          value={body}
          placeholder="Type away..."
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 disabled:opacity-50"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!title || !body || submissionStatus === "submitting"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submissionStatus === "submitting"
              ? "Adding entry..."
              : "Save Entry"}
          </button>
        </div>
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
