import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className='desktopMenuListItem'>Home </Link>
            <Link className='desktopMenuListItem'> About</Link>
            <Link className='desktopMenuListItem'> Portfolio</Link>
            <Link className='desktopMenuListItem'> Clients</Link>




        </div>
        <button className='desktopMenuBtn'>
            <img src="" alt="" className="desktopMenuImg"></img>
            Contact me

        </button>


    </nav>
  )
}

export default Navbar