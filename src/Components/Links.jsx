import React from 'react';
import "./Links.css"
import {motion} from "framer-motion"

const variants={
  open:{
    transition:{
      staggerChildern:0.1,
    },
  },
  close:{
    transition:{
      staggerChildern:0.5,
      staggerDirection:-1,
    },
  },
}
const itemVariants={
  open:{

     y:0,
     opacity:1,
    
  },
  close:{
   y:50,
   opacity:0,
  }
}
function Links() {
  const items=["HomePage","Skills","Experience","Portfolio","Contact"]
  return (
    <motion.div className='Links' variants={variants}>
      {items.map(item=>(
        <motion.a href={`#${item}`} key={item}  variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}
        >{item}</motion.a>
      ))}

    </motion.div>
  )
}

export default Links