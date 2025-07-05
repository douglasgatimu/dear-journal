import Entry from "./Entry";

function Entries({ entries, onToggleImportant, onDeleteEntry }) {
  return (
    <div className="w-full px-6 py-4">
      <h1 className="text-center font-bold text-black text-2xl mb-6">
        Your Saved Thoughts
      </h1>

      {!entries.length ? (
        <h2 className="text-center text-gray-500">No Created Entries</h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {entries
            .slice()
            .reverse()
            .map((entry) => (
              <Entry
                key={entry.id}
                id={entry.id}
                title={entry.title}
                body={entry.body}
                important={entry.important}
                onToggleImportant={onToggleImportant}
                onDeleteEntry={onDeleteEntry}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Entries;
