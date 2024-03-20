import React,{useRef,useState} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import "./Contact.css"

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    }
}
function Contact() {
    const formRef=useRef()
    const[error,setEroor]=useState(false)
    const[success,setSuccess]=useState(false)
    console.log("error", error)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qz159ud', 'template_41i8kcv', formRef.current, {
            publicKey: 'BqhkkPx-3ou90D5Ow',
          })
          .then(
            () => {
             setSuccess(true) 
            },
            (error) => {
              setEroor(true)
            },
          );
      };
    

  return (
    <motion.div className='Contact' variants={variants} initial="initial" whileInView="animate">
      <motion.div className='contactContainer' variants={variants}>
      <motion.div className='contactContainer1' variants={variants}>
        <motion.h1>Let's Work together</motion.h1>
        <motion.div className='contactInfo' variants={variants}>
            <motion.h3 variants={variants}>E-mail</motion.h3>
            <motion.h4 variants={variants}>tenybaby1997@gmail.com</motion.h4>
        </motion.div>
        <motion.div className='contactInfo' variants={variants}>
            <motion.h3 variants={variants}>Place</motion.h3>
            <motion.h4 variants={variants}>Ernakulam, Kochi pin 682020</motion.h4>
        </motion.div>
        <motion.div variants={variants} className='contactInfo'>
            <motion.h3 variants={variants}>Phone</motion.h3>
            <motion.h4 variants={variants}>9895341669</motion.h4>
        </motion.div></motion.div>
        <div className='formContainer'>
           <motion.form ref={formRef} onSubmit={ sendEmail}className='formContainerS' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1,duration:1}}>
            <input required  type='text' placeholder='Name' name="name"/>
            <input required type="email" placeholder='Email'name="email"/>
            <textarea required placeholder='Message'name="message"/>
            <button> Submit</button>
            {error && "Opps something went wrong!"}
            {success && "Successfully send"}
        </motion.form></div>
      </motion.div>
    </motion.div>
  )
}

export default Contact