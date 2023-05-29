import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  let storedUser = JSON.parse(localStorage.getItem('Users')) || []
  const navigate = useNavigate();


  const checkUser = () => {
    let flag=false
    for(let i=0;i<storedUser.length;i++){
      if((storedUser[i].Email==email) && (storedUser[i].Password==password)){
        flag=true
        navigate("/homepage")
      }
    }
    if(flag==false){
        alert("Incorrect Email/password")
    }
  }

  return (
    <div>
          <input placeholder='Enter email' type='email' onChange ={(e)=>setEmail(e.target.value)}/>
      <input placeholder='Enter Password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={checkUser}>Login</button>

    </div>
  )
}

export default Login