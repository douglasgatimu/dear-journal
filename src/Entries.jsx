import Entry from "./Entry";

function Entries({ entries, onMarkImportant }) {
  return (
    <div className="entries w-2/3 flex flex-col gap-2 items-end divide-y-4 divide-gray-300">
      {!entries.length ? (
        <h1>No Created Entries</h1>
      ) : (
        entries.map((entry) => (
          <Entry
            title={entry.title}
            body={entry.body}
            id={entry.id}
            key={entry.id}
            onMarkImportant={onMarkImportant}
            important={entry.important}
          />
        ))
      )}
    </div>
  );
}

export default Entries;
