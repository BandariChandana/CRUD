import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Validation from "./LoginValidation";
import axios from "axios";
import "./Login.css";


function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:5000/login", values)
        .then((res) => {
          if (res.data === "Success") {
            history.push("/home");
          } else {
            alert("No Record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="app">
      <div className="login-form"> 
        <h2 className="list-container">Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div>
            
            <label htmlFor="email" className="list-container" >
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="input-container"
            />
            {errors.email && <span className="error" >{errors.email}</span>}
          </div>
          <div>
            <label className="list">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="input-password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="log">
          <button type="submit" className="button">
            <strong>Log In</strong>
          </button>
          </div>

          <p>Your are agree to the terms and policies</p>

          <Link to="/signup">
            <button className="button-container">Create Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
