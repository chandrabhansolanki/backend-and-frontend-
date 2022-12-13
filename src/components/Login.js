import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {loginAction} from "../Redux/action/AuthAction"
import { useDispatch } from "react-redux";



const Login = () => {
  const navigate = useNavigate()
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
    dispatch(loginAction(userLogin , navigate))
  };

  return (
    <div className="container my-3" >
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
         
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={userLogin.email}
          onChange={loginHandler}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
         name="password"
         value={userLogin.password}
         onChange={loginHandler}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      
      <button className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Login;
