import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../FirebaseConfig';
import {  signInWithEmailAndPassword } from 'firebase/auth';

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