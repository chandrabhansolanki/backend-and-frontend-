import React, { useState } from "react";

const SignUp = () => {
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
  console.log(input);

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password } = input;
    fetch("localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
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
        <input type="password" name="password" onChange={InputChangeHandler} />
      </div>
      <button onClick={submitHandler}>SignUp</button>
    </>
  );
};

export default SignUp;
