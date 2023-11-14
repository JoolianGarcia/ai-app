const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <figure className="bg-white p-4 rounded-md">
      <div>{date}</div>
      {/* <div>{entry.email}</div> */}
      <div>{entry.id}</div>
    </figure>
  );
};

export default EntryCard;
