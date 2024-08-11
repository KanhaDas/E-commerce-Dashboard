import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [name,setName]=useState("");
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("user")
    if(auth){
    navigate('/')
  }
  },[])

  const collectData=async(e)=>{
    e.preventDefault();
    if(!name || !email || !password ){
      setError(true)
      return false
    }
    // console.log(name,password,email)
    let result=await fetch("http://localhost:5000/register",{
      method:"post",
      body:JSON.stringify({name,password,email}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json();
    console.log(result);
   
   
  
    // // alert("Please enter all input");
    // if(name===""){
    //   alert("Please fill up name input")
    // }
    // else if(password===""){
    //   alert("Please fill up password input")
    // }
    // else if(email===""){
    //   alert("Please fill up email input")
    // }else{
    //   // alert("Please enter all input");
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/")

    
  

  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='inputBox' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      { error && !name &&<span className='invalid-input'>Enter valid name!!</span>}
      <input className='inputBox' type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)} />
      { error && !email &&<span className='invalid-input'>Enter valid email!!</span>}
      <input className='inputBox' type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      { error && !password &&<span className='invalid-input'>Enter valid password!!</span>}
      <button className='appButton' type='button' onClick={collectData}>Sign Up</button>
    </div>
  )
}

export default Signup