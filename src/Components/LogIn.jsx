import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from "../FirebaseConfig";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import GoogleButton from "react-google-button";

function LogIn() {
    const [errorMsg, setErrorMsg] = useState("");
    const[user,setUser]=useState({        
        email:"",
        password:""
    })

    
    const navigate = useNavigate();
    
  
  
   const eventHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submithandlerlogin=()=>{
   
  
      
    signInWithEmailAndPassword(auth,user.email, user.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      navigate("/");
      // ...
    })
    .catch((err) => {
        setErrorMsg(`${err.message} or Invalid Email/Password`);
    });

    setUser({
        email:"",
        password:""
    })
    

  }
  const googleSignButton = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/wellcome");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container d-flex justify-content-center mt-4">
    <div className="" style={{ width: "30rem" }}>
      
     
      <div className="form-floating mb-3 ">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={user.email}
          name='email'
          onChange={eventHandler}
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={user.password}
          name='password'
          onChange={eventHandler}
        />
        <label for="floatingPassword">Password</label>
      </div>
      <span style={{color:'red'}}>
      {errorMsg}
      </span>
      OR
      <GoogleButton className="mx-auto" onClick={googleSignButton} />
     <div className="mt-4">
     <button type="button" className="mx-2 btn btn-success" onClick={submithandlerlogin}>
     Log In
   </button>
   <Link to={"/"} className="btn btn-danger">
     Cancle
   </Link>
     </div>
    </div>
  </div>
  )
}

export default LogIn