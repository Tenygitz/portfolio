import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./ProgressBar.css"


function ProgressBar() {
    const controls = useAnimation();
    const [shouldAnimate, setShouldAnimate] = useState(false);
  
const progressBarVariants = {
  initial: { width: 0 },
  animate: { width: '100%', transition: { duration: 2 } },
};
useEffect(() => {
    if (shouldAnimate) {
      controls.start('animate');
    }
  }, [shouldAnimate, controls]);
  useEffect(() => {
    setShouldAnimate(true);
}, []);


  return (
    <motion.div className='ProgressBar'
        style={{ backgroundColor: '#4CAF50', height: '10px' }}
        variants={progressBarVariants}
        initial="initial"
        animate={controls}>
    </motion.div>
  )
}

export default ProgressBar
