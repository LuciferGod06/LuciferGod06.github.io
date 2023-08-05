import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import "./Home.css"
import { FaGithub, FaSquareTwitter, FaLinkedin, FaDiscord } from "react-icons/fa6";
import image3 from './image3.png'
import image4 from './image4.jpg'


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

  return (
    <div className='Top_Div' id='home' >
      <div >
        <h3 >Hello, It's Me</h3>
        <h1 >Gourav Prasad !</h1>

        <h3>And I'm a <span ref={element}  ></span></h3>
        <br></br>
        <a href='https://drive.google.com/file/d/1S5dX1O2SYdDBfpXgtOooaGxMmq5q4pWb/view?usp=sharing'>
          <button > Download Resume</button>
        </a>


        <div className='icon_Div'>
          <a href="https://github.com/LuciferGod06"  ><FaGithub /></a>
          <a href="https://twitter.com/prasadgourav46"><FaSquareTwitter /></a>
          <a href="https://www.linkedin.com/in/gourav-prasad-388708155/"><FaLinkedin /></a>
          <a href="https://discord.com/channels/@me"><FaDiscord /></a>
        </div>

      </div>
      <div className='image_Div' >
        <img width={"300px"} src={image3} alt="profile photo" />
      </div>
    </div>
  )
}
