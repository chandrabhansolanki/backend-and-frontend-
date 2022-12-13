import React, { useState } from "react";
import { signUpAction} from "../Redux/action/AuthAction"

import {useDispatch} from "react-redux"


const SignUp = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const InputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name);

    setInput({ ...input, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const { name, email, password } = input;
    dispatch(signUpAction(input))
    // fetch("http://localhost:5000/api/auth/createuser", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  };

  return (
    <div className="container my-3" >
    <form onSubmit={submitHandler}>
      <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="name"
          value={input?.name}
          onChange={InputChangeHandler}
        />
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
         
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={input?.email}
          onChange={InputChangeHandler}
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
         value={input?.password}
         onChange={InputChangeHandler}
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

export default SignUp;
