import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"



const Login = () => {
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem("user")
    if(auth){
    navigate('/')
  }},[])

  const handleLogin=async()=>{
    let result= await fetch("http://localhost:5000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result= await result.json();
    console.log(result)
      
    if(result.name){
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/")
      }
    else {
      alert("Please enter valid data")
    }
      }
  return (
    <div className='login'>
      <h1 className='heading'>Login</h1>
      <input className='inputBox' type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
      <input className='inputBox' type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className='appButton' type='button' onClick={handleLogin}>Login</button>

    </div>
  )
}

export default Login