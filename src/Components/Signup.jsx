import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
    const[user,setUser]=useState({
        name:"",
        phone:"",
        email:"",
        password:""
    })
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();
  
   const eventHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const submithandler=()=>{
   
  
    setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (res) => {
          
          const user = res.user;
        //   await updateProfile(user, {
        //     displayName: values.name,
        //   });
        setSubmitButtonDisabled(false);
        console.log(user)
          navigate("/login");
        })
        .catch((err) => {
        //   setSubmitButtonDisabled(false);
        setSubmitButtonDisabled(false);
        console.log("erroris... ",err)
          setErrorMsg(`${err.message} or Invalid Email`);
        });

    console.log(user)



    setUser({
        name:"",
        phone:"",
        email:"",
        password:""
    })
    

  }
  return (
    <div className="container d-flex justify-content-center mt-4">
    <div className="" style={{ width: "30rem" }}>
      <div className="form-floating mb-3 ">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Enter Name"
          value={user.name}
          name='name'
          onChange={eventHandler}
        />
        <label for="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3 ">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Enter Phone no."
          value={user.phone}
          name='phone'
          onChange={eventHandler}
        
        />
        <label for="floatingInput">Phone</label>
      </div>
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
     <button type="button"  className="mx-2 btn btn-success" disabled={submitButtonDisabled} onClick={submithandler}>
     Sign Up
   </button>
   <Link to={"/"} className="btn btn-danger">
     Cancle
   </Link>
     </div>
    </div>
  </div>
  )
}

export default Signup