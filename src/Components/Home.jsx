import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <h1>WellCom to HOme Page</h1>
    <Link className='btn btn-primary mx-2' to={"/signup"}>Sign Up</Link>
    <Link className='btn btn-primary' to={"/login"}>Log In</Link>
    </div>
  )
}

export default Home