import { SIGN_UP, LOGIN_USER } from "../action Type/actionType";
import loginApi from "../../api/Manager/loginApi";
import signUpApi from "../../api/Manager/signUpApi";

export const signUpAction = (data) => {
  const { name, email, password } = data;
  return async (dispatch) => {
    try {
      const json = await signUpApi(data);
      dispatch(signUpConfirmedAction(json));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpConfirmedAction = (data) => {
  return {
    type: SIGN_UP,
    payload: data,
  };
};

export const loginAction = (data) => {
  return async (dispatch) => {
try{
    const res =await loginApi(data)
    dispatch(loginConfirmdAction(res))
}catch(err){
    console.log(err.message);
}
  };
};

export const loginConfirmdAction = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
