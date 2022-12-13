import { GET_ALL_NOTES } from "../action Type/actionType";
import getAllNotesApi from "../../api/Manager/getAllNotesApi";

export const getAllNotes = () => {
  return async (dispatch) => {
    // const res =await fetch('http://localhost:5000/api/notes/fetchallnotes',{
    //   method:"GET",
    //   headers: {
    //     "Content-type": "application/json",
    //     "token": localStorage.getItem("token")
    //   }
    //     // })
    // const response = await res.json()

    const res = await getAllNotesApi();
    if(res?.data?.success){
      dispatch(getAllNotesConfirmed(res?.data?.notes));
    }
  };
};

export const getAllNotesConfirmed = (data) => {
  return {
    type: GET_ALL_NOTES,
    payload: data,
  };
};
