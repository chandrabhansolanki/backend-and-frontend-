import { GET_ALL_NOTES, ADD_NEW_NOTES } from "../action Type/actionType";

const initialState = {
    AllNotes : []
};

const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return {
        ...state,
        AllNotes: action.payload
      };

    case ADD_NEW_NOTES:
      const data = action.payload
      return {
        ...state,
        AllNotes : [...state?.AllNotes, data]
      }
    default:
      return state;
  }
};

export default NotesReducer;
