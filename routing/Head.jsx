import { NavLink } from 'react-router-dom';
import React from 'react'

const Head = () => {
  return (
    <>
          <header>
    <ul>
        <li><NavLink to={"/"}>home</NavLink></li>
        {/* here link work as anchor and to as href but it is good as it does not load the page */}
        {/* Navlink has same as link but it also has class name active which is for styling  */}
        <li><NavLink to={"/about"}>abt</NavLink></li>
        <li><NavLink to={"/contact"}>cntct</NavLink></li>
    </ul>
    </header>
    </>
  )
}

export default Head
