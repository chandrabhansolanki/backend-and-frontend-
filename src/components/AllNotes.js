import React, { useState, useEffect } from "react";
import { getAllNotes } from "../Redux/action/NotesAction";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";

const AllNotes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notes, setNotes] = useState({
    title: "",
    descrption: "",
    tag: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getAllNotes());
    } else {
      navigate("/login");
    }
  }, []);

  const addNotes = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setNotes({ ...notes, [name]: value });
  };

  const SubmitNotes = (e) => {
    e.preventDefault()
    dispatch()
  }

  return (
    <div className="container my-3">
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
            name="descrption"
            value={notes.descrption}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Notes />
    </div>
  );
};

export default AllNotes;
