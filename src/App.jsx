import { useState, useEffect } from "react";
import Entries from "./Entries";
import NewEntry from "./NewEntry";
import { data } from "autoprefixer";

function App() {
  // let baseEndPoint = "https://jsonplaceholder.typicode.com/posts";
  let baseEndPoint = "http://localhost:3001/entries";
  const [entries, setEntries] = useState([]);
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("unloaded");
 
  

  useEffect(() => {
    requestEntries();

  }, []);

  function requestEntries() {
    setLoadingStatus("Loading");
    fetch(baseEndPoint)
      .then((response) => response.json())
      .then((data) => {
        let newData = data.map(entry => ({
          ...entry,
            title: entry.title.charAt(0).toUpperCase() + entry.title.slice(1),

          important: false,
        }));
        setEntries(newData);
        setLoadingStatus("Loaded");
      });
  }





function addEntry(newEntry) {
  setLoadingStatus("Loading")
  
  fetch(baseEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
  })
    .then((res) => res.json())
    .then((entryObj) => {
      console.log(entryObj.title + " saved successfully");
      setEntries(prevEntries => [...prevEntries, entryObj]);
    })
    .catch((error) => {
      console.error("Error saving entry:", error);
    });
    setLoadingStatus("Loaded")
}


function markImportant(entryId) {
  const updatedEntries = entries.map(entry => 
    entry.id === entryId ? {...entry, important: true} : entry

      )
      setEntries(updatedEntries)
}


  const toggleNewEntryForm = () => {
    setShowNewEntryForm((prev) => !prev);
  };

  return (
    <>
      <div className="new-entry w-1/3 p-2">
        <button
          onClick={toggleNewEntryForm}
          className="cursor-pointer bg-cyan-500 font-bold text-black border border-gray-400 shadow-sm rounded-none text-center w-full"
        >
          Show/hide new entry form
        </button>
        {showNewEntryForm && <NewEntry onAddEntry={addEntry} />}
      </div>

      <Entries entries={entries} onMarkImportant={markImportant}/>
    </>
  );
}

export default App;
