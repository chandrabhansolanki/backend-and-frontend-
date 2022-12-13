import React, { useState, useEffect } from "react";
import { getAllNotes } from "../Redux/action/NotesAction";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const AllNotes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notes, setNotes] = useState();
  const state = useSelector((state) => state?.NotesReducer?.AllNotes);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getAllNotes());
    } else {
      navigate("/login");
    }
  }, []);

  //   const getNotes = () => {

  //   };

  return (
    <div className="container my-3">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div>
        {state.map((note) => {
         return ( 
         <ul>
            <li>{note?.title}</li>
            <li>{note?.description}</li>
            <li>{note?.tag}</li>
          </ul>);
        })}
      </div>
    </div>
  );
};

export default AllNotes;
