import React from 'react'
import baillie from './Images/baliee.PNG'
import overstock from './Images/overstock.png'
import alcazar from './Images/alcazar.png'
import portfolio from './Images/portfolio.png'


import redux from '../Skills/image/redux.png';
import react from "../Skills/image/react.png";
import charka from "../Skills/image/images.jpeg";
import js from "../Skills/image/js.png";
import html from '../Skills/image/html5.png'
import css from '../Skills/image/css.png'



import './Project.css'


export const Projects = () => {
  return (
    <div id="projects" style={{ padding: "8% 10% 0 10%" }} >
      <h1 data-aos="zoom-in" data-aos-duration='1000' style={{ textAlign: 'left', marginBottom: '0px' }}>Project</h1>
      <div data-aos="zoom-in" data-aos-duration='1000' style={{ borderBottom: "2px solid #00abf0", width: "80px", marginBottom: "10px", marginTop: "5px", borderBottomRightRadius: "5px", borderTopRightRadius: "5px" }}  ></div>
      <p data-aos="zoom-in" data-aos-duration='1000' style={{ textAlign: "left", marginTop: "0px", paddingBottom: "10px" }} >What I Do</p>
      <div className='projectMainContainer' >
        <div   class="project-card" >
          <div  data-aos="fade-right" data-aos-duration="2000"     >
            <img src={baillie} alt="" className='projectImages' />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000"   >
            <h1 class="project-title"  >Bialetti</h1>
            <p class="project-description" >Bialetti Italia is a captivating web application that pays homage to the renowned Italian brand, Bialetti, famous for its exceptional coffee machines, cookware, and small kitchen appliances.</p>
            <h4 class="project-tech-stack" >Tech Stack :</h4>
            <div  className='projectSkills' >
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={charka} alt="chakra" />
              <img src={js} alt="js" />
            </div>
            <div className='ProjectButton' >
            <a class="project-github-link" href="https://github.com/LuciferGod06/Bialetti_Project" target='_blank'rel="noreferrer"  > <button > Github Link </button> </a>
            <a class="project-deployed-link" href="https://bialetti-new-clone-project.vercel.app" target='_blank'rel="noreferrer"  ><button > View </button> </a>

          </div>
          </div>
          
        </div>
        <div  class="project-card" >
          <div  data-aos="fade-right" data-aos-duration="2000" >  
            <img src={overstock} alt="" className='projectImages'/>
          </div>
          <div  data-aos="fade-left" data-aos-duration="2000">
            <h1 class="project-title" >Overstock</h1>
            <p class="project-description" >Overstock.com, Inc. is an American internet retailer selling primarily furniture headquartered in Midvale, Utah, near Salt Lake City. The company sells home decor, furniture, bedding, and many other goods that are closeout merchandise.</p>
            <h4 class="project-tech-stack" >Tech Stack :</h4>
            <div className='projectSkills' >
              <img src={html} alt="react" />
              <img src={css} alt="redux" />
              <img src={js} alt="js" />
            </div>
            <div className='ProjectButton' >
            <a class="project-github-link" href="https://github.com/LuciferGod06/OverStock" target='_blank'rel="noreferrer"  > <button > Github Link</button></a>
            <a class="project-deployed-link" href="https://fastidious-griffin-dd67bc.netlify.app" target='_blank'rel="noreferrer"  ><button>View</button></a>

          </div>
          </div>

        </div>
        <div   class="project-card">
          <div data-aos="fade-right" data-aos-duration="2000"  >
            <img src={alcazar} alt="" className='projectImages'  />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" >
            <h1 class="project-title" >Alcazar</h1>
           <p class="project-description" >Alcazar is one of the most used travel agency website.
           Discover a world of convenience and luxury
             as we offer a comprehensive array of facilities to elevate every aspect of your getaway.
              From handpicked accommodations to curated itineraries, we specialize in crafting unforgettable 
              vacations.
             </p>
            <h4 class="project-tech-stack" >Tech Stack :</h4>
            <div className='projectSkills' >
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={charka} alt="chakra" />
              <img src={js} alt="js" />
            </div>
            <div className='ProjectButton' >
            <a class="project-github-link" href="https://github.com/LuciferGod06/Alcazar" target='_blank'rel="noreferrer"  > <button >Github Link</button></a>
            <a class="project-deployed-link" href="https://alcazar.vercel.app/" target='_blank'rel="noreferrer"  > <button>View</button></a>
            
                      </div>
          </div>

        </div>
        <div   class="project-card">
          <div data-aos="fade-right" data-aos-duration="2000"  >
            <img src={portfolio} alt="portfolio" className='projectImages'  />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" >
            <h1 class="project-title" >Portfolio</h1>
           <p class="project-description" >
           Alcazar is one of the most used travel agency website.
           Discover a world of convenience and luxury
             as we offer a comprehensive array of facil
             </p>
            <h4 class="project-tech-stack" >Tech Stack :</h4>
            <div className='projectSkills' >
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
              <img src={charka} alt="chakra" />
              <img src={js} alt="js" />
            </div>
            <div className='ProjectButton' >
            
           <a class="project-github-link" href="https://github.com/LuciferGod06/Portfolio_Gourav" target='_blank'rel="noreferrer"  >  <button >Github Link</button></a>
            <a class="project-deployed-link" href="https://64ce7cd4be3d0c4efa0eb0e8--whimsical-gingersnap-1e7176.netlify.app/" target='_blank'rel="noreferrer"  ><button> View</button></a>

          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
