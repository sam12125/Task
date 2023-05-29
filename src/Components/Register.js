import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';

function Register() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const user = {Email:email,Password:password}
  let userArr = JSON.parse(localStorage.getItem('Users')) || []
  const navigate = useNavigate();

  const saveData = () => {
console.log(user)
userArr.push(user)
localStorage.setItem("Users",JSON.stringify(userArr))
navigate("/login")
  }

  return (
    <div>

      <input placeholder='Enter email' type='email'  onChange ={(e)=>setEmail(e.target.value)}/>
      <input placeholder='Enter Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={saveData}>Register</button>
    </div>
  )
}

export default Register