import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import "./Home.css"
import { FaGithub, FaSquareTwitter, FaLinkedin, FaDiscord } from "react-icons/fa6";

import image3 from './image3.png'
import pdf from '../Gourav_Prasad_Resume.pdf'


export const Home = () => {
  const element = useRef(null);

  useEffect(() => {

    const typed = new Typed(element.current, {
      strings: ["Frontend Developer", "Backend Developer", 'MERN Stack Developer']
      ,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    })
    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1IFg0Jb3JQMFfd4Wxmus-3plSkPLt5d8l/view?usp=sharing');
  }
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.download = 'Gourav_Prasad_Resume.pdf';
  //   link.href = {pdf};
  //   document.body.appendChild(link)
  //   link.click();
  //   link.remove();
  // };


  return (
    <div className='Top_Div' id='home' >
      <div  >
        <h3 data-aos="fade-right" data-aos-duration="1000" >Hello, It's Me</h3>
        <h1  data-aos="fade-right" data-aos-duration="1500" >Gourav Prasad !</h1>

        <h3 data-aos="fade-right" data-aos-duration="2000"  >And I'm a <span ref={element}  ></span></h3>
        <br></br>
        <a href={pdf}  target={'_blank'} rel="noreferrer" download={'Gourav_Prasad_Resume'}>
          <button data-aos="fade-right" data-aos-duration="3000"  onClick={handleDownload}  id="resume-button-1" > Download Resume</button>
        </a>
        {/* <a href={pdf} target={"_blank"}  rel='noreferrer' >
          <button id="resume-button-1" onClick={handleDownload}>View Resume</button>
        </a> */}

        <div className='icon_Div'  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">  
          <a href="https://github.com/LuciferGod06" target='_blank' rel="noreferrer" id="contact-github" ><FaGithub  /></a>
          <a href="https://twitter.com/prasadgourav46" target='_blank' rel="noreferrer"><FaSquareTwitter /></a>
          <a href="https://www.linkedin.com/in/gourav-prasad-388708155/" target='_blank' rel="noreferrer" id="contact-linkedin" ><FaLinkedin /></a>
          <a href="https://discord.com/channels/@me" target='_blank' rel="noreferrer"><FaDiscord /></a>
        </div>

      </div> 
      <div className='image_Div'  data-aos="fade-down"  data-aos-duration="1000" >
        <img  src={image3} alt="profile " class="home-img" />
      </div>
    </div>
  )
}
