const Entry = ({
  title,
  body,
  id,
  important,
  onToggleImportant,
  onDeleteEntry,
}) => {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white border border-gray-100 flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <div className="text-xs text-gray-400">Entry ID: #{id}</div>

        <div className="flex items-center gap-2 justify-between">
          <h3 className="text-xl font-semibold truncate max-w-[70%]">
            {title}
          </h3>
          {important && (
            <span className="text-xs px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded-full">
              Important
            </span>
          )}
        </div>

        <p className="text-gray-700 text-sm">{body}</p>
      </div>

      <div className="flex gap-3">
        <button
          className="px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 text-sm"
          onClick={() => onDeleteEntry(id)}
        >
          Delete
        </button>
        <button
          className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm"
          onClick={() => onToggleImportant(id)}
        >
          {important ? "Unmark Important" : "Mark as Important"}
        </button>
      </div>
    </div>
  );
};

export default Entry;
