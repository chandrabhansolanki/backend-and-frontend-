const NotesItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <button className="mx-2">Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
