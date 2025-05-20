const Entry = ({
  title,
  body,
  id,
  important,
  onMarkImportant,
  onDeleteEntry,
}) => {
  return (
    <div className="entry w-4/5 bg-white-100 p-1 flex flex-col gap-2">
      <p className="text-xs">{`Entry ${id}`}</p>
      <div className="entry-head flex justify-between">
        <h3 className="font-bold text-xm truncate max-w-xs">{title}</h3>
        <button
          className="bg-cyan-50 border border-2 p-1 font-bold rounded-sm cursor-pointer"
          onClick={() => {
            onMarkImportant(id);
          }}
        >
          {important ? "Marked Important✅" : "Mark Important⭐"}
        </button>
      </div>
      <p className="text-xm ">{body}</p>
      <div className="manage flex items-end">
        <button
          className="bg-red-100 border border-2 p-1 font-bold rounded-sm cursor-pointer"
          onClick={() => {
            onDeleteEntry(id);
          }}
        >
          Delete Entry 🗑️
        </button>
      </div>
    </div>
  );
};

export default Entry;
