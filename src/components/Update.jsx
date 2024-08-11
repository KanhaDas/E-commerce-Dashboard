import React, { useState ,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'; 
const Update = () => {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory]=useState("");
  const [company,setCompany]=useState("");
  const navigate=useNavigate();
  
  const params=useParams();

  useEffect(()=>{
     getProductDetails();
  },[])
  const getProductDetails=async()=>{
    // console.log(params)
    let result= await fetch(`http://localhost:5000/product/${params.id}`);
    result= await result.json();
    console.warn(result)
    setName(result[0].name)
    setPrice(result[0].price)
    setCategory(result[0].category)
    setCompany(result[0].company)

  }
  
  const handleUpdate = async()=>{
   
 
    console.log(name,price,category,company)

    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
      method:"put",
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result=await result.json();

    console.log(result)
    navigate("/")
  }
  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input type="text" placeholder='Enter Product name' 
      className='inputBox' value={name} onChange={(e)=>setName(e.target.value)}/>
   
      <input type="text" placeholder='Enter product price' 
      className='inputBox'value={price} onChange={(e)=>setPrice(e.target.value)}
      />
      
      <input type="text" placeholder='Enter product category' 
      className='inputBox'value={category} onChange={(e)=>setCategory(e.target.value)}/>
      
      <input type="text" placeholder='Enter product company'
      className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)} />
      
       <button className='appButton' onClick={handleUpdate} >Update product</button>
    </div>
  )
}

export default Update