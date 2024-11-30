import React from 'react'
import './Header.css'
import { Link } from 'react-router'

function Header() {
  return (
    <div className='NavBar'>
      <li > <Link className='link' to={'/'} >Home</Link></li>
      <li> <Link className='link' to = {'/About'}>About</Link></li>
      <li> <Link className='link' to = {'/Products'}>Products</Link></li>
      
    </div>
  )
}

export default Header
