import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const date= new Date();
  const year= date.getFullYear();
  return (
    <div className='bg-dark text-light p-3 '>
     <h5 className='text-center'> All Rights Reserved &copy; {year} <NavLink target='_blank' style={{textDecoration:'none', color:'#fff'}} to='https://www.linkedin.com/in/dev-akshaypatidar/'>Akshay Patidar</NavLink></h5>
      </div>
  )
}

export default Footer