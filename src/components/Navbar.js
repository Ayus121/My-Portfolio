import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const Navbar = () => {
  return (
	<div>
		
	<nav class="navbar">
    <Link to=""> <i class="fas fa-home"></i> <span>Home</span> </Link>
    <Link to="/about"> <i class="fas fa-user"></i> <span>About</span> </Link>
    <Link to="/education"> <i class="fas fa-briefcase"></i> <span>Education</span> </Link>
    <Link to="/project"> <i class="fas fa-book"></i> <span>Project</span> </Link>
    <Link to="/contact"> <i class="fas fa-address-book"></i> <span>Contact</span> </Link>
    </nav>
	</div>
  )
}

export default Navbar