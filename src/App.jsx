import { useState, useEffect } from "react";
import Entries from "./Entries";
import NewEntry from "./NewEntry";

function App() {
  let baseEndPoint = "https://jsonplaceholder.typicode.com/posts";

  const [entries, setEntries] = useState([]);
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("unloaded");
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  useEffect(() => {
    requestEntries();
  }, []);

  function requestEntries() {
    const newStatus = "loading";
    setLoadingStatus(newStatus);

    fetch(baseEndPoint)
      .then((response) => response.json())
      .then((data) => {
        let newData = data.map((entry) => ({
          ...entry,
          title: entry.title.charAt(0).toUpperCase() + entry.title.slice(1),

          important: false,
        }));
        setEntries(newData);

        const completedStatus = "loaded";
        setLoadingStatus(completedStatus);
      });
  }

  function addEntry(newEntry) {
    const newStatus = "submitting";
    setSubmissionStatus(newStatus);

    fetch(baseEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
      .then((res) => res.json())
      .then((entryObj) => {
        setEntries((prevEntries) => [...prevEntries, entryObj]);

        setTimeout(() => {
          const completedStatus = "success";
          setSubmissionStatus(completedStatus);
        }, 2000);

        setTimeout(() => {
          const defaultStatus = "idle";
          setSubmissionStatus(defaultStatus);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error saving entry!:", error);
      });
  }

function toggleImportant(entryId) {
  const updatedEntries = entries.map((entry) =>
    entry.id === entryId
      ? { ...entry, important: !entry.important }
      : entry
  );
  setEntries(updatedEntries);
}


  const toggleNewEntryForm = () => {
    setShowNewEntryForm((prev) => !prev);
  };

  function deleteEntry(entryId) {
    fetch(`${baseEndPoint}/${entryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        console.log(`Entry #${entryId} deleted successfully`);
      })
      .catch((error) => {
        console.error("Error deleting entry:", error);
      });

    const updatedEntries = entries.filter((entry) => entry.id !== entryId);

    setEntries(updatedEntries);
  }

  return (
    <>
      <div className="new-entry w-1/2 p-2">
        <button
          onClick={toggleNewEntryForm}
          className="cursor-pointer bg-gray-50 font-bold text-black hover:border hover:border-gray-400 shadow-sm rounded-md p-2 my-2 text-center w-full"
        >
          {showNewEntryForm ? "Hide Form" : "Create New Entry...🖋️"}
        </button>
        {showNewEntryForm && (
          <NewEntry onAddEntry={addEntry} submissionStatus={submissionStatus} />
        )}
      </div>
      {loadingStatus === "loading" && (
        <div className="entries w-2/3 my-10">
          <h1 className="font-bold text-black text-xl w-2/3 text-center">
            Loading Entries....
          </h1>
        </div>
      )}

      {loadingStatus === "loaded" && (
        <Entries
          entries={entries}
          onToggleImportant={toggleImportant}
          onDeleteEntry={deleteEntry}
        />
      )}
    </>
  );
}

export default App;
