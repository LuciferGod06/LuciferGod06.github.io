import React from 'react'
import baillie from './baliee.PNG'
import overstock from './overstock.png'
import alcazar from './alcazar.png'

import redux from '../Skills/image/redux.png';
import react from "../Skills/image/react.png";
import charka from "../Skills/image/images.jpeg";
import js from "../Skills/image/js.png";
import html from '../Skills/image/html5.png'
import css from '../Skills/image/css.png'

import './Project.css'


export const Projects = () => {
  return (
    <div id='project' style={{ padding: "50px 10% 0 10%" }} >
      <h1 style={{ textAlign: 'left', marginBottom: '0px' }}>Project</h1>
      <div style={{ borderBottom: "2px solid #00abf0", width: "80px", marginBottom: "10px", marginTop: "5px", borderBottomRightRadius: "5px", borderTopRightRadius: "5px" }}  ></div>
      <p style={{ textAlign: "left", marginTop: "0px", paddingBottom: "10px" }} >What I Do</p>
      <div className='projectMainContainer' >
        <div className='topBox'>
          <div >
            <img src={baillie} alt="" className='projectImages' />
          </div>
          <div>
            <h1>Bialetti</h1>
            <p>Bialetti Italia is a captivating web application that pays homage to the renowned Italian brand, Bialetti, famous for its exceptional coffee machines, cookware, and small kitchen appliances.</p>
            <h4>Tech Stack :</h4>
            <div className='projectSkills' >
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={charka} alt="chakra" />
              <img src={js} alt="js" />
            </div>
          </div>
        </div>
        <div className='topBox' >
          <div >
            <img src={overstock} alt="" className='projectImages' />
          </div>
          <div>
            <h1>Overstock</h1>
            <p>Overstock.com, Inc. is an American internet retailer selling primarily furniture headquartered in Midvale, Utah, near Salt Lake City. The company sells home decor, furniture, bedding, and many other goods that are closeout merchandise.</p>
            <h4>Tech Stack :</h4>
            <div className='projectSkills' >
              <img src={html} alt="react" />
              <img src={css} alt="redux" />
              <img src={js} alt="js" />
            </div>
          </div>

        </div>
        <div className='topBox' >
          <div >
            <img src={alcazar} alt="" className='projectImages' />
          </div>
          <div>
            <h1>Alcazar</h1>
           <p>Alcazar is one of the most used travel agency website.
           Discover a world of convenience and luxury
             as we offer a comprehensive array of facilities to elevate every aspect of your getaway.
              From handpicked accommodations to curated itineraries, we specialize in crafting unforgettable 
              vacations.
             </p>
            <h4>Tech Stack :</h4>
            <div className='projectSkills' >
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={charka} alt="chakra" />
              <img src={js} alt="js" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
