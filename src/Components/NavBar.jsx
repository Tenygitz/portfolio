import React from 'react';
import {motion} from "framer-motion"
import "./NavBar.css"
import SideBar from './SideBar';

function NavBar() {
  return (
    <div className='NavBar'>
        <SideBar/>
        <div className='Header'>
            <span>Teny Baby</span>
            <div className='SocialMedia'>
                <motion.a whileHover={ {scale:1.3}} target="_blank" href="https://github.com/Tenygitz?tab=overview&from=2023-12-01&to=2023-12-31">< img src="./github.png" alt="Github" className='Icons'/></motion.a>
                <motion.a whileHover={ {scale:1.3}} target="_blank" href="https://www.linkedin.com/in/tenybaby/" >< img src="./linkedin.png" alt="Linkedin" className='Icons'/></motion.a>
                <motion.a whileHover={ {scale:1.3}} target="_blank" href="#">< img src="./facebook.png" alt=""className='Icons'/></motion.a>
                <motion.a whileHover={ {scale:1.3}} target="_blank" href="https://www.instagram.com/teny__baby_">< img src="./instagram.png" alt=""className='Icons'/></motion.a>
                
            </div>

        </div>
    </div>
  )
}

export default NavBar