import React,{useRef} from 'react';
import {motion,useScroll,useSpring,useTransform} from "framer-motion"
import "./Portfolio.css";

const item=[{
    id:1,
    title:"Abez Energy Management",
    img:"abez.jpg",
    des:"Utilizing WordPress's versatility, I integrated interactive elements and sleek layouts to engage visitors and convey the essence of energy efficiency. From intuitive navigation to compelling visuals, every aspect of the site was crafted to reflect the client's commitment to sustainability.  ",
    https:"https://abez.us/energy-management-services/energy_management_company_usa/",
    git:"#"
},
{
    id:2,
    title:" Car Valeting services",
    img:"yeovil.webp",
    des:"This project highlights my expertise in crafting visually stunning and user-friendly websites. Specifically tailored for a car wash business, the site boasts a sleek design, intuitive navigation, and engaging content. With a focus on customer convenience, it features online booking functionalities and detailed service descriptions ",
    https:"https://yeovilcarvaleting.co.uk/",
    git:"#"
    
},{
    id:3,
    title:"Linkedin clone",
    img:"linkedinclone.png",

    des:"LinkedIn clone developed with React.js and Redux, leveraging Firebase as the backend. This project demonstrates my proficiency in front-end development and state management using industry-standard tools. I implemented key features such as post uploads, comment sections, and a like functionality, offering users a seamless social networking experience. Through meticulous design and functionality, Created login page, register page and  homepage  ",
    git:"https://github.com/Tenygitz/linkedin"
},
{
    id:4,
    title:"Amazone clone",
    img:"amazon.webp",

    des:"Amazon clone built with React.js and Redux. This project showcases my proficiency in front-end development and state management techniques. I meticulously designed and implemented essential features including login and register pages, offering users a seamless authentication process. Additionally, I integrated a comprehensive shopping cart functionality, allowing users to add products  ",
    git:"https://github.com/Tenygitz/amazon"
},
{
    id:5,
    title:"Qoutes generator",
    img:"generator.jpg",
    
    des:"This project showcases my expertise in modern front-end development and state management techniques. With a focus on scalability and performance,I implemented robust features to deliver a seamless user experience. Leveraging React.js's component-based architecture and Redux's centralized state management,",
    https:"https://qoutes-generator-theta.vercel.app/",
    git:"https://github.com/Tenygitz/Qoutes_generator"
},


]
const Single=({item})=>{
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        
        
    });
    const y=useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <article ref={ref}>
            <motion.div className='container' style={{y:y}}>
                <div className='wrappers'>
                
              <img src={item.img}/>
         
              <div className='textContainer'>
                <h2>{item.title}</h2>
                <p>{item.des}</p>
                <div className='btnInfo'>
                <button>
  <a href={`${item.git}`} target="_blank" rel="noopener noreferrer">
    <img src="./code.png" alt="GitHub link" />
  </a>
</button>
<button>
  <a href={`${item.https}`} target="_blank" rel="noopener noreferrer">
    See Demo
  </a>
</button>
                </div>
              </div>
              </div>
            
            </motion.div>
        </article>
    )
}

function Portfolio() {
    const ref=useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"]
    });
    const scaleX=useSpring(
        scrollYProgress,{
            stiffness:100,
            damping:30
        }
    )
  return (
    <div className='Portfolio' ref={ref}>
        <div className='Progress'>
            <h1>Featured Work</h1>
            <motion.div className='progressBar'style={{scaleX:scaleX}}>

            </motion.div>
        </div>
        {
            item.map(items=>(
                <Single item={items} key={items.id}/>
            ))
        }
        </div>
  )
}

export default Portfolio
