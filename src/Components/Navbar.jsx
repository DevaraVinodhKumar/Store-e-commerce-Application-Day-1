import React, { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonOutline} from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from './NavLinks';

//Theme object
const themes = {
    winter : "winter",
    dracula : 'dracula'
};

//getThemeFromLocalStorage
const getThemeFromLocalStorage = () => {
   return localStorage.getItem('theme') || themes.winter
}

const Navbar = () => {
  const [theme,setTheme] = useState(getThemeFromLocalStorage());

  //Function for handle theme
  const handleTheme = () => {
    const {winter,dracula} = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  }
  
  //UseEffect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme",theme);
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
           <div className='navbar-start'>
            {/* {title} */}
            <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl'>Store</NavLink>
            {/* Dropdown */}
            <div className='dropdown'>
                <label className='btn btn-ghost lg:hidden'>
                    <FaBarsStaggered tabIndex={0}
                     className='h-6 w-6'/>
                    
                </label>
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
                    <NavLinks/>
                </ul>
            </div>
           </div>
           <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal'>
                <NavLinks/>
            </ul>
           </div>
           <div className='navbar-end'>
            {/* Theme Set up */}
            <label className='swap swap-rotate'>
                <input type="checkbox" onChange={handleTheme}/>
                {/* Sun */}
                <IoSunnyOutline className='swap-on h-6 w-6'/>
                {/* Moon */}
                <IoMoonOutline className='swap-off h-6 w-6'/>
            </label>
            {/* Cart Link */}
            <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md'>
            <div className='indicator'>
                <TiShoppingCart className='w-6 h-6'/>
                <span className='indicator-item badge badge-sm badge-primary'>7</span>
            </div>
            </NavLink>
           </div>
        </div>
    </nav>
  )
}

export default Navbar;