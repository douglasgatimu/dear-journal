const Entry = ({ title, body, id }) => {
  return (
    <div className="entry w-2/3 bg-white-100 p-1 flex flex-col gap-2">
      <p className="text-xs">{`Entry ${id}`}</p>
      <h3 className="font-bold text-xm">{title}</h3>

      <p className="text-xm">{body}</p>
    </div>
  );
};

export default Entry;
