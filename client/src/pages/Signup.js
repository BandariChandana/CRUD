import React,{useState} from "react";
import { Link,useHistory} from "react-router-dom/cjs/react-router-dom.min";
import "./Signup.css";
import Validation from "./SignupValidation";
import axios from "axios";
function Signup() {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const history = useHistory();
    const[errors,setErrors] = useState({})
    const handleInput =(event)=>{
        setValues(prev => ({...prev, [event.target.name] :[event.target.value]}))
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
    axios.post("http://localhost:5000/signup", values)
    .then(res => {
    history.push('/')
   })
   .catch(err => console.log(err))
        }
    }
  return (
    <div className="app">
    <div className="login-form">
        <h2 className="list-container">Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className="list-container"><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" name="name" onChange={handleInput} className="input-container"/>
            {errors.name && <span className="error">{errors.name}</span>} </div>
            <div>
            <label htmlFor='email' className="list-container"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email" onChange={handleInput} className="input-container"/>
            {errors.email && <span className="error">{errors.email}</span>}</div>
            <div>
            <label htmlFor='password' className="list"><strong>Password</strong></label>
            <input type="password" placeholder="Enter password" name="password" onChange={handleInput}  className="input-password"/>
            {errors.password && <span className="error">{errors.password}</span>}</div>
            <div className="log">
            <button type="submit" className="button-container" ><strong>Sign Up</strong></button></div>
            <p>Your are agree to the terms and policies</p>
            
            <Link to="/"><button className="button">Log In</button></Link>
        </form>
        </div>
    </div>
  )
}

export default Signup;
