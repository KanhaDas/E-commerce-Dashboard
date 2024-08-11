import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
// import logo from "../assets/logo1.jpg"
const Nav = () => {
  const auth=localStorage.getItem("user")
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <img src="https://das-solutions.com/wp-content/uploads/2020/01/48E38BEC-D957-42FD-AD61-8881C36754CC.png" alt="logo" className='logo' />
      {
        auth ?
        <ul className='nav-ul'>
        <li>
          <Link to="/" className='a'>Products</Link>
        </li>
        <li>
          <Link to="/add"className='a'>Add Products</Link>
        </li>
        <li>
          <Link to="/update"className='a'>Update Products</Link>
        </li>
        <li>
          <Link to="/profile"className='a'>Profile</Link>
          </li>
          <li><Link onClick={logout} to="/signup"className='a'>Logout ({JSON.parse(auth).name})</Link> </li>
          </ul>
        :
        <ul  className='nav-ul nav-right'>
           <li><Link to="/signup"className='a'>Signup</Link></li>
           <li> <Link to="/login"className='a'>Login</Link></li>
        </ul>
       
      }
      </div>
  )
}

export default Nav
