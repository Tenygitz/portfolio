import React, { useState } from 'react';
import {motion} from "framer-motion"
import "./SideBar.css"
import Links from './Links'
import ToggleBtn from './ToggleBtn'
function SideBar() {
  const[open,setOpen]=useState(false)
  const variants={
   open:{
   clipPath:"circle(1200px at 50px 50px)",
   transition:{
    type:"spring",
    stiffness:20,
   }},
   closed:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,

      },
   },
  }
  return (
    <motion.div className='SideBar' animate={open ?"open":"closed"}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
        <ToggleBtn setOpen={setOpen} variants={variants}/>
    </motion.div>
  )
}

export default SideBar