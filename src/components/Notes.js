import { useSelector } from "react-redux";
import NotesItem from "./NotesItem";
const Notes = () => {
  const state = useSelector((state) => state?.NotesReducer?.AllNotes);
  
  return (
    <>
     <div className="row">
        <h3>My Notes</h3>
      {state.map((note) => {
        return <NotesItem note={note}/>
      })}
      </div>
    </>
  );
};
export default Notes;
