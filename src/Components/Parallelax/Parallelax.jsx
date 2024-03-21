import React,{useRef} from 'react';
import {motion,useScroll,useTransform} from "framer-motion";
import "./Parallelax.css";


function Parallelax({type}) {

    const  ref=useRef()

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const yText=useTransform(scrollYProgress,[0,3],["0%","200%"])
    const yBg=useTransform(scrollYProgress,[0,1],["0%","200%"])
  return (<>
  <div className='headingParallelax'>
  <h1>Experience</h1>
  </div>
    <motion.div className='Parallelax' ref={ref} >
   
      <div className='experience'>

      
        <div className='leftSection'>
          <h3>Intens in React Js</h3>
           <p>During my internship in React, specialized in creating dynamic webpages, harnessing the power of this cutting-edge JavaScript library. However, developed a deep understanding of React's component-based architecture, enabling me to build interactive user interfaces efficiently. Through hands-on projects, well gained expertise in state management and data handling, ensuring seamless user experiences</p>
           <h5>2022- August to Septemebr 2022</h5>
           <h4>Global infonet</h4>
        </div>
        <div className='middleSection'>
          <div className='line'>
          <div className='Circle'>

            </div>
            
          </div>
         
        </div>
        <div className='rightSection'>
        <div className='leftSection'>
        <h3>Interns in Wordpress Development</h3>
           <p>Building static,dynamic  and e-commerce websites using popular page builders like Elementor and WP Bakery. Utilizing these tools, Developed visually appealing and user-friendly websites tailored to specific client needs and preferences. Additionally, learned to manage web hosting using cPanel, ensuring smooth deployment and maintenance of the websites created. </p>
           <h5>2021-september  to April-2022</h5>
           <h4>Excelsis Deo</h4>


        </div>
        <div className='leftSection'>
        <h3>Interns in Wordpress Development</h3>
          <p>During my internship in WordPress Web Development, gained hands-on experience in building static and e-commerce websites using popular page builders like Elementor and WP Bakery. Utilizing these tools, Developed visually appealing and user-friendly websites tailored to specific client needs and preferences. Additionally,learned to manage web hosting using cPanel, ensuring smooth deployment and maintenance of the websites  created. </p>
           <h5>2021-March to August -2021</h5>
           <h4>Bramma it sol pvt</h4>


        </div></div>
      </div>
      <motion.div className='mountains'></motion.div>
      <motion.div className='planets' style={{y:yBg,
      backgroundImage:`url(${type=="Services"?"/planets.png":"/sun.png"})`
    }}></motion.div>
      <motion.div className='star'style={{x:yBg}}></motion.div>
    </motion.div></>
  )
}

export default Parallelax