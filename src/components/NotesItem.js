import React from "react"
import { useDispatch } from "react-redux";
import { deleteNotes } from "../Redux/action/NotesAction";

const NotesItem = (props) => {
  const dispatch = useDispatch()
  const { note ,editNoteHandler} = props;

  const deleteNoteHandler = (id) => {
    dispatch(deleteNotes(id))
  }

  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <button className="mx-2" onClick={()=> editNoteHandler(note._id)}>Edit</button>
          <button onClick={() => deleteNoteHandler(note._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
