import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"> BrandCommerce</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item ">
      <NavLink className='nav-link' to='/'>Home</NavLink>  
     
      </li>
      <li className="nav-item ">
      <NavLink className='nav-link' to='/register'>Register</NavLink>  
      </li>
     
      <li className="nav-item ">
      <NavLink className='nav-link' to='/login'>Login</NavLink>  
     
      </li>
      <li className="nav-item ">
      <NavLink className='nav-link' to='/cart'>Cart (0)</NavLink>  
     
      </li>
    
    </ul>
   
  </div>
</nav>

</>
  )
}

export default Header