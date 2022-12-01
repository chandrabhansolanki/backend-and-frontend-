import React, { useState } from "react";
import {loginAction} from "../Redux/action/AuthAction"
import { useDispatch } from "react-redux";



const Login = () => {
    const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    const {name, value} = e.target
    setUserLogin({...userLogin, [name] : value})
  };
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginAction(userLogin))
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>email</label>
          <input
            type="email"
            value={userLogin.email}
            name="email"
            onChange={loginHandler}
          />
        </div>
        <div>
          <label>password</label>
          <input  type="password"
            value={userLogin.password}
            name="password"
            onChange={loginHandler}/>
        </div>
        <button>login</button>
      </form>
    </>
  );
};

export default Login;
