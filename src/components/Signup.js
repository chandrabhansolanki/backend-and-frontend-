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
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={InputChangeHandler} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={InputChangeHandler} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={InputChangeHandler}
          />
        </div>
        <button >SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
