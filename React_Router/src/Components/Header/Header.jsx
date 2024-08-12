import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <ul class="flex bg-slate-600 justify-around">
        <li>
            <NavLink to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/about-us">
              About Us
            </NavLink>
        </li>
        <li>
            <NavLink to="/services">
            Services
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact-us">
            Contact US
            </NavLink>
        </li>
    </ul>
  )
}

export default Header