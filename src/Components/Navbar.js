import React from 'react';
import '../CSS/Navbar.css';
import {FaBars} from 'react-icons/fa'
import {
    Link
  } from "react-router-dom";

function Navbar() {
    const handleClickMenu = ()=> {
        console.log('clicked');
       const menu = document.getElementById('menu');
       console.log(menu.classList); 
       menu.classList.toggle('hidden');
    }
  return (
    <div>
        <nav className='nav-bar'>
        <div className='logo'>Rocky's Pizza</div>
        <div className='menu-bar'>{<FaBars style={{color:'#094067'}} onClick={handleClickMenu} />}</div>
        <ul className='menu-items'>
                <li className='menu-item'>
                    <Link className='item' to={'/'}>Home</Link>
                </li>
                <li className='menu-item'>
                    <Link className='item' to={'/menu'}>Menu</Link>
                </li>
                <li className='menu-item'>
                    <Link className='item' to={''}>About</Link>
                </li>
                <li className='menu-item'>
                    <Link className='item' to={''}>Contact</Link>
                </li>
                <li className='menu-item'>
                    <Link className='order-button' to={''}><button>Login</button></Link>
                </li>
        </ul>
        </nav>
        <ul className='menu-items-mobile hidden' id='menu'>
                <li className='menu-item'>
                    <Link className='item' to={'/'}>Home</Link>
                </li>
                <li className='menu-item'>
                    <Link className='item' to={'/menu'}>Menu</Link>
                </li>
                <li className='menu-item'>
                    <Link className='item' to={''}>About</Link>
                </li>
                <li className='menu-item'>
                    <Link className='item' to={''}>Contact</Link>
                </li>
                <li className='menu-item'>
                    <Link className='order-button' to={''}><button>Login</button></Link>
                </li>
        </ul>
    </div>
  )
}

export default Navbar