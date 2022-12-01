import { SIGN_UP, LOGIN_USER } from "../action Type/actionType";

const initialState = {};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
      };


      case LOGIN_USER:
        return {
            ...state,
        }
    default:
      return state;
  }
};
export default AuthReducer