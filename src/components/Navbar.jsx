import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='dr-nav-section' >
        <div className='dr-nav'>
            {/* links */}
            <div className='dr-links'>
                {/* logo */}
                <div className='dr-logo'></div>
                {/* List */}
                <ul className='dr-lists'>
                    <li>Home</li>
                    <li>Project</li>
                    <li>Who</li>
                    <li>Concat</li>
                </ul>
            </div>
            {/* Icon */}
            <NavLink className='dr-Icons' to='https://github.com/dargoncc' target='_blank'>
                <img src="../img/github.svg" alt="" />
            </NavLink>
        </div>
    </nav>
  )
}
