import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesItem from "./NotesItem";
import { editNotes } from "../Redux/action/NotesAction";

const Notes = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const state = useSelector((state) => state?.NotesReducer?.AllNotes);
  const [editNodeId, setEditNoteId] = useState();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const addNotes = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  const editNoteHandler = (id) => {
    ref.current.click();
    setEditNoteId(id);
    const editNote = state.find((note) => note._id === id);
    setNotes({
      title: editNote?.title,
      tag: editNote?.tag,
      description: editNote?.description,
    });
  };

  const SubmitNotes = (e) => {
    e.preventDefault();
    dispatch(editNotes(editNodeId, notes));
    // setNotes({ title: "", description: "", tag: "" });
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={SubmitNotes}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={notes.title}
                    onChange={addNotes}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="description"
                    value={notes.description}
                    onChange={addNotes}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="tag"
                    value={notes.tag}
                    onChange={addNotes}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h3>My Notes</h3>
        {state.map((note) => {
          return <NotesItem note={note} editNoteHandler={editNoteHandler} />;
        })}
      </div>
    </>
  );
};
export default Notes;
