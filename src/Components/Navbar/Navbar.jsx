import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'


export const Navbar = () => {
  return (
    <div className='nav_Top' id="nav-menu" >
      <div style={{  fontWeight: "600"}}  >
  <HashLink    className='active'  to='#home' style={{ textDecoration: "none" }}><h1>Gourav</h1></HashLink>        
      </div>
      <div className='nav_Item' >
        <ul  className='hash' >
          <li class="nav-link home"  > <HashLink  style={{ textDecoration: "none" }}  className='active'  to='#home'>Home</HashLink>  </li>
          <li class="nav-link about" ><HashLink style={{ textDecoration: "none" }}   to='#about'>About Me</HashLink> </li>
          <li class="nav-link skills" > <HashLink style={{ textDecoration: "none" }}  to='#skills'>Skills  </HashLink></li>
          <li class="nav-link projects" > <HashLink style={{ textDecoration: "none" }}  to='#projects'>Projects  </HashLink></li>
          <li class="nav-link contact" >  <HashLink style={{ textDecoration: "none" }}  to='#contact'>Contact </HashLink></li>
          <li class="nav-link resume" >  <HashLink style={{ textDecoration: "none" }} >Resume </HashLink></li>
        </ul>
      </div>
    </div>

  )
}
