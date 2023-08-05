import React from 'react'
import './contact.css'

import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { TiPhoneOutline } from 'react-icons/ti';
import { BsWhatsapp } from 'react-icons/bs';



export const Contact = () => {
  return (
    <div  id='contact' >
      <h1  >Contact Me</h1>
      <div style={{borderBottom:"2px solid #00abf0",width:"120px" ,marginBottom:"10px", marginTop:"5px",borderBottomRightRadius:"5px",borderTopRightRadius:"5px" }}  ></div>
      <p>Let's Talk</p>
      <div className='main_Contact' >
        <div className='start_Div' >
          <div className='details_Div'>
            <div><p>LOCATION</p>
              <p>Gandhidham, Gujarat <br /> India </p>
            </div>
            <div className='icon_Contact' >
              <CiLocationOn />
            </div>
          </div>
          <div className='details_Div' >
            <div><p>EMAIL</p>
              <p>prasadgourav46@gmail.com</p>
            </div>
            <div className='icon_Contact' >
              <AiOutlineMail />
            </div>
          </div>
          <div className='details_Div' >
            <div><p>PHONE</p>
              <p>+91 94266 89899</p>
            </div>
            <div className='icon_Contact' >
              <TiPhoneOutline />
            </div>
          </div>
          <div className='details_Div' >
            <div><p>WHATSAPP</p>
              <p>+91 94266 89899</p>
            </div>
            <div className='icon_Contact' >
              <BsWhatsapp />
            </div>
          </div>
        </div>
        <div>
          <img width={"730px"} src="https://www.techuz.com/blog/wp-content/uploads/2018/08/How-to-hire-web-developers-from-India.gif" alt="COntact_Pic" />
        </div>
      </div>
    </div>
  )
}
