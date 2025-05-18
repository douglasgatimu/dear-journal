import { useState, useEffect } from "react";
import Entries from "./Entries";
import NewEntry from "./NewEntry";

function App() {
  let baseEndPoint = "https://jsonplaceholder.typicode.com/posts";
  const [entries, setEntries] = useState([]);
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);

  useEffect(() => {
    fetch(baseEndPoint)
      .then((response) => response.json())
      .then((data) => {
        setEntries(data);
      });
  }, []);


   


  const addEntry = (newEntry) => {
    setEntries([...entries, { ...newEntry, id: Date.now()}]);
  };



  

  const toggleNewEntryForm = () => {
    setShowNewEntryForm((prev) => !prev);
  };



  return (
    <>
      <div className="new-entry w-1/3 bg-cyan-50 p-2">
        <button
          onClick={
            
            toggleNewEntryForm}
          className="cursor-pointer bg-cyan-500 font-bold text-black border border-gray-400 shadow-sm rounded-none text-center w-full"
        >
          Show/hide new entry form
        </button>
        {showNewEntryForm && <NewEntry onAddEntry={addEntry} />}
      </div>

      <Entries entries={entries} />
    </>
  );
}

export default App;
