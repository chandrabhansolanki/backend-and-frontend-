import { GET_ALL_NOTES } from "../action Type/actionType";

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
    default:
      return state;
  }
};

export default NotesReducer;
