import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

import pdf from '../Gourav_Prasad_Resume.pdf'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,

} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
// import {HiMenuAlt1} from 'react-icons/hi'
import {RiMenu3Fill} from 'react-icons/ri'


export const Navbar = () => {

  
  const handleDownload = ()=>{
    window.open('https://drive.google.com/file/d/1n9rZ2it582R0KadAXlK9qTGQd1PydY13/view?usp=sharing');
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div className='nav_Top' id="nav-menu" >
      <div style={{  fontWeight: "600",fontSize:"33px"}}  >
  <HashLink    className='active'  to='#home' style={{ textDecoration: "none" }}><h1>Gourav</h1></HashLink>        
      </div>
      <div className='nav_Item' >
        <ul  className='hash' >
          <li class="nav-link home"  > <HashLink  style={{ textDecoration: "none" }}  className='active'  to='#home'>Home</HashLink>  </li>
          <li class="nav-link about" ><HashLink style={{ textDecoration: "none" }}   to='#about'>About Me</HashLink> </li>
          <li class="nav-link skills" > <HashLink style={{ textDecoration: "none" }}  to='#skills'>Skills  </HashLink></li>
          <li class="nav-link projects" > <HashLink style={{ textDecoration: "none" }}  to='#projects'>Projects </HashLink></li>
          <li class="nav-link contact" >  <HashLink style={{ textDecoration: "none" }}  to='#contact'>Contact </HashLink></li>
          <li class="nav-link resume" >  <HashLink   style={{ textDecoration: "none" }} download={pdf} onClick={handleDownload} id="resume-button-1" rel="noreferrer" > Resume  </HashLink></li>
        </ul>
      </div>
      <div className='DrawerNavbar'>
  
      <RiMenu3Fill ref={btnRef} colorScheme='teal' onClick={onOpen} style={{fontSize:"24px"}} />
  
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    </div>

  )
}
 