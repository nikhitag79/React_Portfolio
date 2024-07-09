import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activateClass = 'active' to ='intro' spy={true} smoth = {true} offset = {-100} duration = {500} className='desktopMenuListItem'>Home </Link>
            <Link activateClass = 'active' to ='skills' spy={true} smoth = {true} offset = {-70} duration = {500}  Link className='desktopMenuListItem'> About</Link>
            <Link activateClass = 'active' to ='works' spy={true} smoth = {true} offset = {-50} duration = {500} Link className='desktopMenuListItem'> Portfolio</Link>
            <Link activateClass = 'active' to ='clients' spy={true} smoth = {true} offset = {-50} duration = {500} Link className='desktopMenuListItem'> Contact</Link>




        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }
        
        }>
            <img src={contactImg} alt="" className="desktopMenuImg"></img>
            Contact me

        </button>

        


    </nav>
  )
}

export default Navbar