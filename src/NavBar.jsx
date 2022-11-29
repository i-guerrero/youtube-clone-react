import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <nav className='nav'>
      <img src={ require('./ytLogo.png') }/>
      {/* <img src="ytMyLogo.png" alt="ytMyLogo" /> */}
       {/* <Link to="/" className='site-title'>Youtube</Link> */}
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    </div>
  )
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <Link to={href} {...props}>
        {children}
      </Link>

    </li>
  )
}