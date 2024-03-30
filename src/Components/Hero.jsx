import React from 'react';
import {motion} from "framer-motion"
import "./Hero.css"

const textvarirants={
    initial:{
        x:-500,
        opacity:0

    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
function Hero() {
  return (
    <div className='Hero'>
        <div className='wrapper'>
        <motion.div className='textContainer' variants={textvarirants} initial="initial" animate="animate">
            <motion.h2 variants={textvarirants}>TENY BABY</motion.h2>
            <motion.h1 variants={textvarirants}>Frontend Web Developer</motion.h1>
         <motion.div className='navBtn' variants={textvarirants}>
            <motion.button variants={textvarirants} download={true}><a href="./Teny resume_e.pdf" target='_blank' >Resume</a></motion.button>
        
            <motion.button variants={textvarirants}>< a href='#Contact'>Contact me</a></motion.button>
         </motion.div>
         <motion.img animate="scrollButton" variants={textvarirants} src='./scroll.png' alt=''/>
        </motion.div>
        </div>
        <div className='imageContainer'>
         <img src='./hero.png' alt='image'/>
        </div>
    </div>
  )
}

export default Hero