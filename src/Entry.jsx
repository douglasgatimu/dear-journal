const Entry = ({ title, body, id, important, onMarkImportant}) => {
  return (
    <div className="entry w-2/3 bg-white-100 p-1 flex flex-col gap-2">
      <p className="text-xs">{`Entry ${id}`}</p>
      <div className="entry-head flex justify-between">
      <h3 className="font-bold text-xm truncate max-w-xs">{title}</h3>
            <button
            className="bg-cyan-50 border border-2 p-1 font-bold rounded-sm cursor-pointer"
            onClick={() => {
                
                onMarkImportant(id)
            }}
            >{important? 'Marked Important✅' : 'Mark Important'}</button>
      
      
            </div>
      <p className="text-xm">{body}</p>
    </div>
  );
};

export default Entry;
