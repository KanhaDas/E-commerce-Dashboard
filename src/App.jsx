
import './App.css'
import Footer from './components/Footer'

import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './components/Signup'
import Private from './components/Private'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import Update from './components/Update'


function App() {
  
  return (
  <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route element={<Private/>}>
    <Route path='/' element={<ProductList/> }/>
    <Route path='/add' element={<AddProduct/> }/>
    <Route path='/update/:id' element={<Update/> }/>

    <Route path='/logout' />

    <Route path='/profile' element={<h1>Profile component</h1> }/>
    
    </Route>
    <Route path='/signup' element={<Signup/> }/>
    <Route path='/login' element={<Login/> }/>
  </Routes>
  </BrowserRouter>
 <Footer/>
  </>
  )
}

export default App
