import React, { useState ,useEffect} from 'react';
import {motion} from "framer-motion"
import "./Cursor.css";


function Cursor() {
    const [postion,setPosition]=useState({x:0,y:0})

    useEffect(() => {
      const mouseMove=(e)=>{
        setPosition({x:e.clientX,y:e.clientY})
      }
    window.addEventListener("mousemove",mouseMove)
      return () => {
        window.removeEventListener("mousemove",mouseMove)
      }
    }, [])
    
  return (
    <motion.div className='Cursor' animate={{x:postion.x+10,y:postion.y+10}}>
      
    </motion.div>
  )
}

export default Cursor