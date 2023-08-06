import React from 'react'
import css from "./image/css.png";
import html5 from "./image/html5.png";
import mern from "./image/mern.png";
import redux from "./image/redux.png";
import react from "./image/react.png";
import mongodb from "./image/mongodb.png";
import js from "./image/js.png";
import netlify from './image/download.png'
import java from './image/java.jpg'
import './skills.css'
import charka from './image/images.jpeg'


export const Skills = () => {
  return (
    <div id='skills' style={{ padding: "5% 10% 2% 10%", textAlign: "left" }} >
      <h1 style={{marginBottom:"0"}} >Skills </h1>
      <div style={{borderBottom:"2px solid #00abf0",width:"60px" ,marginBottom:"10px", marginTop:"5px",borderBottomRightRadius:"5px",borderTopRightRadius:"5px" }}  ></div>
      <p style={{marginTop:"0"}}>What I know</p>
      <div className='icon_Div' >
        <div  ><img class="skills-card-img" src={html5} alt="csa" />
          <p class="skills-card-name" >HTML</p>
        </div>
        <div><img class="skills-card-img" src={css} alt="css" />
          <p class="skills-card-name" >CSS</p>
        </div>
        <div><img class="skills-card-img" src={js} alt="js" />
          <p  class="skills-card-name" >JS</p>
        </div>
        <div><img class="skills-card-img" src={java} alt="js" />
          <p class="skills-card-name">JAVA</p>
        </div>
        <div><img class="skills-card-img" src={mern} alt="mern" />
          <p class="skills-card-name" >MERN</p>
        </div>
        <div><img class="skills-card-img" src={redux} alt="redux" />
          <p class="skills-card-name" >REDUX</p>
        </div>
        <div><img class="skills-card-img" src={react} alt="react" />
          <p class="skills-card-name" >REACT</p>
        </div>
        <div><img class="skills-card-img" src={mongodb} alt="mongodb" />
          <p class="skills-card-name" >MONGODB</p>
        </div>
        <div><img class="skills-card-img" src={netlify} alt="netlify" />
          <p class="skills-card-name" >NETLIFY</p>
        </div>
        <div><img class="skills-card-img" src={charka} alt="netlify" />
          <p class="skills-card-name" >CHAKRA UI</p>
        </div>
      </div>
    </div>
  )
}
