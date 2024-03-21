import React from 'react';
import {motion} from 'framer-motion'; 

import "./Skills.css";
const skills=[{
  id:1,
  title:"Html",
  img:"./html.png",
 
},
{
  id:2,
  title:"css",
  img:"./css-3.png",
  
},
{
  id:3,
  title:"javascript",
  img:"./js-file.png",
 
},
{
  id:4,
  title:'react js' ,
  img:"./structure.png"
},
{
  id:5,
  title:'Responsive Design' ,
  img:"./responsive-design.png"
},
{
  id:6,
  title:'redux' ,
  img:"./atom.png"
},
{
  id:7,
  title:'Git' ,
  img:"./code.png"
},
{
  id:8,
  title:'Wordpress' ,
  img:"./wordpress.png"
},
{
  id:9,
  title:'Cpanel' ,
  img:"./cloud-server.png"
},
{
  id:10,
  title:'Elementor' ,
  img:"./elementor.png"
},

]
const textvarirants={
  initial:{
      x:-500,
      opacity:0

  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:2,
          staggerChildren:0.5
      },
  },
 
}

export default function Skills() {

  return (<>
   <div className='headingParallelax'>
  <h1>Skills</h1>
  </div>
    <div className='Skills' >
  
      <motion.div className='SkillContainer' variants={textvarirants} initial="initial" animate="animate">
      {skills.map(skills=>(
        <motion.button className='iconBtn' key={skills.id} variants={textvarirants}
      
     
     
    ><motion.div className='containerIner'   variants={textvarirants}>
      <motion.img  variants={textvarirants}
        src={skills.img}
        alt="icon"
      />{skills.title}</motion.div>
    </motion.button>))}
</motion.div>
        <div className='mountainss'></div>
      <div className='planetss' ></div>
      <div className='stars'></div>
    
    </div></>
  )
}
