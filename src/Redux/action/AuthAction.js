import { SIGN_UP, LOGIN_USER } from "../action Type/actionType";

export const signUpAction = (data) => {
  const { name, email, password } = data;
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const json = await res.json();
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
    const {email, password} = data
  return async (dispatch) => {
try{
    const res =await fetch("http://localhost:5000/api/auth/login", {
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
    const json = await res.json();
    console.log(json);
    dispatch(loginConfirmdAction(json))
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
