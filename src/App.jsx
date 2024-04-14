import './App.css';
import line from './assets/line.svg';
import bigglow from './assets/bigglow.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import figma from './assets/figma.svg';
import instagram from './assets/instagram.svg';
import profile from './assets/profile.svg';
import dotp from './assets/dotpattern.svg';
import dd from './assets/aboutbg.svg';
import tpinkdot from './assets/tpinkdot.svg';
import pinkdot from './assets/pinkdot.svg';
import skillsbg from './assets/skillsbg.svg';
import excel from './assets/excel.jpg';
import project from './assets/project.svg';
import contact from './assets/contact.svg';
import GraphemeSplitter from 'grapheme-splitter';
import x from './assets/x.svg';
import React, { useState, useRef, useEffect, } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  // State to track if the navigation menu is visible or not
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setSubmitted(true);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });
  
  const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: 200,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 2 * index,
        }
    }),
};
  const [date, setDate] = useState(new Date());
  const navs= [
{href:"#home", id:'1', content: "HOME" },
{href:"#about", id:'3', content: "ABOUT" },
{href:"#projects", id:'2', content: "PROJECTS" },
{href:"#contact",id:'', content: "CONTACT" }
  ]
  const splitter = new GraphemeSplitter();
  return (
    <>
  


    <section id='home' className={` h-[99vh] flex flex-col justify-between items-center ${darkMode ? 'light-mode b bg-gradient-to-br from-55% from-[#595959] to-[#a5a5a5] via-[#f2f2f2] to-[#666666] to-[#a4a4a4] text-black' :'dark-mode text-[#456789] bg-gradient-to-br from-40% from-[#120720] to-black via-purple-600 to-[#F237F6C2] to-purple-900 ' }`}>
   <div className='flex items-center justify-center w-11/12 mt-6  '>
      <motion.nav 
      initial={{opacity:0,}}
      animate={{opacity:1}}
      transition={{duration:2, origin:1}}
      className=' shadow-inset   z-20 top-0   w-full rounded-[3.125rem] items-center  flex text-center justify-between flex-row p-2'>
        <p className='font-[K2D] font-extrabold  text-[1.6rem]  lg:text-[2.5rem]'>
  Excel Chukwu 
        </p>
        {isNavOpen && (
        <nav>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
      )}
        
        <div className='w-9/12 flex justify-between items-center'>
                <div className=' hidden lg:block' >
        <ul className='font-[inter] font-medium lg:flex gap-10 lg:flex-row'>
  {navs.map((nav) => (
    <motion.li
    to={nav.href}
      key={nav.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={activeNavItem === nav.id ? 'active border-b-4 pb-3 border-b-[#F237F6C2] rounded-sm' : ''}
      onClick={() => setActiveNavItem(nav.id)}
    >
      <a href={nav.href}>
         {nav.content}
      </a>
     
    </motion.li>
  ))}
</ul>

      
       
          </div>
            <div className=' lg:flex items-center  hidden'>
         <label class="inline-flex items-center me-5 cursor-pointer gap-3 ">
  <input type="checkbox" value="" class="sr-only peer"/>
  <span class=" text-sm font-medium font-[inter] text-gray-900 dark:text-gray-300">DARK</span> 
  <motion.div onClick={toggleDarkMode} layout class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#EB03FF]"></motion.div>
 <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">LIGHT</span>
</label>
<span>
  <motion.button whileTap={{  scale: 0.75 }}  type="button" className='opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[12.4rem] rounded-[3.125rem] bg-[#EB03FF] text-center p-3'>Contact Me</motion.button> 
</span>
         </div> 
        </div>
  
         <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  lg:hidden  focus:outline-none   dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
       
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      </motion.nav>

     
    </div>
     <div className=' text-white w-11/12 lg:relative'>
  
        <div className='flex  flex-col lg:flex-row lg:justify-between  items-end gap-16   lg:items-end'>

          
          <div className='flex gap-6  font-[inter] flex-col   font-normal text-[1.6rem] lg:w-[20rem] lg:h-[70vh]  '>

                <p 
                className={` font-[K2D] lg:w-[34.5rem] w-fit  lg:h-[20rem]  font-extrabold  lg:text-[7.0rem]  lg:oh-3/6 text-[3.2rem] ${darkMode ? 'light-mode' :'dark-mode text-white' }`}
               
               >
   <TypeAnimation
   splitter={(str) => splitter.splitGraphemes(str)}
        sequence={[
          "Excel 🇬🇧",
          1000,
          "  التفوق🇸🇦",
          1000,
          " übertreffen🇩🇪",
          1000,
          "excelleren 🇳🇱",
          1000,
          "exceller 🇫🇷",
          1000,
          'προέχω 🇬🇷',
          1000,
          'tayọ 🇳🇬',
          1000,



        ]}
  
        speed={20}
        repeat={Infinity}
       
      />
        </p>
   
            <motion.div 
            initial={{ width: "100%", y: "40vw", opacity:0 }}
            animate={{ width: "100%", y: 0 , opacity:1 }}
             
            transition={{ duration: 1, origin: 0, }}
            className='flex  justify-center items-center flex-row-reverse lg:flex-row text-start w-[70%] p-2 '>
                  <picture className='w-1/12 '>
            <img src={line}alt="" />
          </picture>
          <p>
                I’m a front-end web 
developer and I work
remotely from Nigeria
          </p>
            </motion.div>
          
          </div>
        
    <div className='flex w-[100%] lg:w-6/12 justify-center items-center '>
     
       <img src={bigglow} className='' alt="" /> 
    </div>
<div className='lg:h-[70vh] absolute lg:relative bottom-0  flex lg:flex-col  gap-16  lg:w-fit lg:gap-6'>
  <motion.img
  whileInView={{ opacity: .5, scale: .8}}
   initial={{ width: "0vw", x: "50vw" }}
   animate={{ width: "100%", x: 0 }}
  viewport={{ once: false }}  
   transition={{ duration: 2, origin: .4 }}
   src={github} alt="" />
  <motion.img  initial={{ width: "0vw", x: "50vw" }}
    animate={{ width: "100%", x: 0 }}
    whileInView={{ opacity: .5, scale: .8}}
    transition={{ duration: 2, origin: 1, delay:0.5 }}
  src={instagram} alt="" />
  <motion.img 
  whileInView={{ opacity: .5, scale: .8}}
    initial={{ width: "0vw", x: "50vw" }}
     animate={{ width: "100%", x: 0 }}    
     transition={{ duration: 2, origin: 1, delay:1 }}
  src={linkedin} alt="" />
  <motion.img
  whileInView={{ opacity: .5, scale: .8}}
    initial={{ width: "0vw", x: "50vw" }}
     animate={{ width: "100%", x: 0 }}
     transition={{ duration: 2, origin: 1, delay:1.5 }}
     src={figma} alt="" />
</div>


        </div>
      </div>
    </section>


  <section id='about' className={`text-white lg:flex lg:flex-col py-5 items-center ${darkMode ? "bg-[#595959]":"bg-[#120720] py-9 flex flex-col overflow-hidden  items-center bg-[image:var(--image-url)] bg-no-repeat bg-right"}`}
 
  style={{'--image-url': `url(${dd})`}}>
    <div className=' w-11/12   flex justify-evenly relative'>
      <motion.p 
      initial={{
        x: -200
      }}
      whileInView={{
       x:0
      }}
      transition={{
 
       duration: 1
      }}
        viewport={{ once: false,  }}
      className='font-[K2D] font-extrabold text-[3.2rem] w-full lg:text-[7.0rem] lg:w-5/12  tracking-[0.4rem]  '>
  About me
        </motion.p>

     
        <span className='lg:flex lg:justify-center hidden  absolute lg:relative right-[-3rem]  items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="208" height="149" viewBox="0 0 208 149" fill="none">
  <path d="M31.824 68.2916V80.7083H143L114.894 100.842L127.157 109.62L176.176 74.4999L127.157 39.3794L114.894 48.158L143 68.2916H31.824Z" fill="#FA00FF"/>
</svg>   
        </span>
   
    </div>

<div className=' flex lg:gap-4 lg:flex-row flex-col  lg:justify-between  w-11/12'>
  <picture className='lg:w-5/12 flex w-11/12 '>
    <img className='w-[100%]' src={profile} alt="" />
  </picture>
  <motion.p 
     initial={{
      opacity: 0,
      x:200
    }}
    whileInView={{
      opacity: 1,
      x: 0, 
    }}
    transition={{duration: 2, delay:.3 }}
    viewport={{ once: true}}
  className='  flex gap-9 text-center lg:text-start flex-col justify-center font-[inter] lg:gap-14 text-[1rem] lg:text-lg lg:w-7/12  ' >
  Meet Excel , a talented web developer with a passion for crafting 
elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, React  and more, Their keen eye for detail,coupled with theircommitment to staying abreast of industry trends,ensures that every project they undertake is not only visually stunning but
 also optimizedfor peak performance.
 <span className=' flex justify-between  relative items-center lg:items-end'>
  <motion.button whileTap={{scale: 0.75}} type="button" className=' hover:bg-opacity-100 lg:h-12 z-10 flex-grow-0 hover:opacity-100 hover:ease-in  font-bold not-italic font-[inter] bg-opacity-40 lg:w-[12.4rem] rounded-[3.125rem] bg-[#F237F6]  backdrop-filter backdrop-blur-3xl w-6/12 text-center p-3'>Contact Me</motion.button>
<picture className=' absolute right-0 lg:relative'> <img src={dotp} alt="" /></picture>
</span> 

  </motion.p>
 

</div>

  </section>

  <section   className={`text-white flex justify-center  bg-no-repeat ${darkMode? "bg-[#595959]":"bg-[#120720] bg-[image:var(--image-url)]"}`}
style={{'--image-url': `url(${skillsbg})`}}>
    <div className='w-11/12 flex flex-col gap-12 my-[5vh]'>
    <motion.p 
     initial={{
      x: -200
    }}
    whileInView={{
     x:0
    }}
    transition={{
   

     duration: 0.8
    }}
      viewport={{ once: false, }}
    className='font-[K2D] font-extrabold lg:text-[7.0rem]   tracking-[0.4rem] text-[3.2rem]  '>
   My Skills
        </motion.p>
        <div ref={ref} className=' gap-12 flex flex-col lg:flex-row flex-wrap'>
<motion.div

  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
  transition={{duration: 1, ease: "easeOut"}}
 
 className=' flex  font-[inter]  lg:w-2/5 justify-between font-normal'>
  <p>CSS</p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={pinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</motion.div>
<motion.div
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
  transition={{duration: 1, ease: "easeOut", delay:.4 }}
className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
  <p className=''>Bootstrap </p>
  <picture className='flex  justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</motion.div>
<motion.div 
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
  transition={{duration: 1, ease: "easeOut", delay:.8}}
  className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
  <p >Javascript </p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={tpinkdot} alt="" /> 
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</motion.div>
<motion.div  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
  transition={{duration: 1, ease: "easeOut", delay:1}}
className=' flex lg:w-2/5 justify-between font-[inter] font-normal'>
  <p className=''>React</p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</motion.div>
<motion.div 
 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
 transition={{duration: 1, ease: "easeOut", delay:1.2}}
className=' flex lg:w-2/5 justify-between font-[inter] font-normal'>
  <p>Tailwind</p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
  </picture>
</motion.div>
<motion.div 
 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
 transition={{duration: 1, ease: "easeOut", delay:1.4}}
className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
  <p className=''>Node.js</p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={pinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</motion.div>
<motion.div 
 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
 transition={{duration: 1, ease: "easeOut", delay:1.6}}
className='flex font-[inter] lg:w-2/5 justify-between font-normal'>
  <p className=''>HTML</p>
  <picture className='flex  justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
  </picture>
</motion.div>
<motion.div 
 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
 transition={{duration: 1, delay:2}}
className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
  <p className=''>Figma</p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" /> 
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</motion.div>
        </div>
       
<ol class="items-center  sm:flex">
    <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0">
        <div class="flex flex-col lg:flex-row items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
 
</ol>

  
    </div>

  
  </section>

  <section id='projects' className={`text-white flex flex-col gap-10  items-center bg-[image:var(--image--url)] bg-no-repeat ${darkMode? "bg-[#595959]":"bg-[#120720] "}`}
 style={{'--image--url': `url(${project})`}} >
 
    <div className="overflow-hidden flex justify-center ">
    <motion.p 
     initial={{
       x:650
     }}
     whileInView={{
      x:0
     }}
     transition={{
    
     
      duration: 1
     }}
       viewport={{ once: false, }}
    className='font-[K2D]  font-extrabold lg:text-[7.0rem] text-[3.2rem] text-center w-11/12 flex lg:w-[52vw]    tracking-[0.4rem] bg-[image:var(--image--url)] bg-right-bottom bg-no-repeat pb-9  ' style={{'--image--url': `url(${x})`}}>
    My Projects
    
        </motion.p>
    </div>
    <div className=' gap-10 w-11/12 flex flex-wrap justify-between '  >
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: true }}
whileHover={{ scale: 1.1, translateX: -2, translateY: -2  }}
style={{'--image-url': `url(${excel})`}} 
className=" w-3/4 lg:w-3/12 flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-cover  bg-no-repeat h-[20rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15">
            <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500  lg:group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-50  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum ad cupiditate minus impedit facere cum aperiam architecto consectetur illo ipsam reprehenderit iusto qui itaque repellendus blanditiis et officiis iste, assumenda obcaecati natus, odit, deleniti nemo consequatur. Quibusdam autem commodi corrupti, aspernatur nostrum exercitationem similique.
            </div>
            <div className=" -right-[5rem] z-10 bottom-[20%] font-[inter] absolute bg-[#768569] font-medium  w-fit   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
            <p className='font-[K2D] font-bold text-[1.2rem]'>
            Project 1
            </p>
            <p className=' font-[roboto] font-light'>
                {date.toDateString()}
            </p>
            </div>
          </motion.div>
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: true}}
whileHover={{ scale: 1.1, translateX: -2, translateY: -2  }}
style={{'--image-url': `url(${excel})`}} 
className=" w-3/4 lg:w-3/12 flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-cover  bg-no-repeat h-[20rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15">
            <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500  lg:group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-50  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum ad cupiditate minus impedit facere cum aperiam architecto consectetur illo ipsam reprehenderit iusto qui itaque repellendus blanditiis et officiis iste, assumenda obcaecati natus, odit, deleniti nemo consequatur. Quibusdam autem commodi corrupti, aspernatur nostrum exercitationem similique.
            </div>
            <div className=" -right-[5rem] z-10 bottom-[20%] font-[inter] absolute bg-[#768569] font-medium  w-fit   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
            <p className='font-[K2D] font-bold text-[1.2rem]'>
            Project 1
            </p>
            <p className=' font-[roboto] font-light'>
                {date.toDateString()}
            </p>
            </div>
          </motion.div>
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: true }}
whileHover={{ scale: 1.1, translateX: -2, translateY: -2  }}
style={{'--image-url': `url(${excel})`}} 
className=" w-3/4 lg:w-3/12 flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-cover  bg-no-repeat h-[20rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15">
            <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500  lg:group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-50  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum ad cupiditate minus impedit facere cum aperiam architecto consectetur illo ipsam reprehenderit iusto qui itaque repellendus blanditiis et officiis iste, assumenda obcaecati natus, odit, deleniti nemo consequatur. Quibusdam autem commodi corrupti, aspernatur nostrum exercitationem similique.
            </div>
            <div className=" -right-[5rem] z-10 bottom-[20%] font-[inter] absolute bg-[#768569] font-medium  w-fit   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
            <p className='font-[K2D] font-bold text-[1.2rem]'>
            Project 1
            </p>
            <p className=' font-[roboto] font-light'>
                {date.toDateString()}
            </p>
            </div>
          </motion.div>
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: true }}
whileHover={{ scale: 1.1, translateX: -2, translateY: -2  }}
style={{'--image-url': `url(${excel})`}} 
className=" w-3/4 lg:w-3/12 flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-cover  bg-no-repeat h-[20rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15">
            <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500  lg:group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-50  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum ad cupiditate minus impedit facere cum aperiam architecto consectetur illo ipsam reprehenderit iusto qui itaque repellendus blanditiis et officiis iste, assumenda obcaecati natus, odit, deleniti nemo consequatur. Quibusdam autem commodi corrupti, aspernatur nostrum exercitationem similique.
            </div>
            <div className=" -right-[5rem] z-10 bottom-[20%] font-[inter] absolute bg-[#768569] font-medium  w-fit   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
            <p className='font-[K2D] font-bold text-[1.2rem]'>
            Project 1
            </p>
            <p className=' font-[roboto] font-light'>
                {date.toDateString()}
            </p>
            </div>
          </motion.div>
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: true }}
whileHover={{ scale: 1.1, translateX: -2, translateY: -2  }}
style={{'--image-url': `url(${excel})`}} 
className=" w-3/4 lg:w-3/12 flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-cover  bg-no-repeat h-[20rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15">
            <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500  lg:group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-50  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum ad cupiditate minus impedit facere cum aperiam architecto consectetur illo ipsam reprehenderit iusto qui itaque repellendus blanditiis et officiis iste, assumenda obcaecati natus, odit, deleniti nemo consequatur. Quibusdam autem commodi corrupti, aspernatur nostrum exercitationem similique.
            </div>
            <div className=" -right-[5rem] z-10 bottom-[20%] font-[inter] absolute bg-[#768569] font-medium  w-fit   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
            <p className='font-[K2D] font-bold text-[1.2rem]'>
            Project 1
            </p>
            <p className=' font-[roboto] font-light'>
                {date.toDateString()}
            </p>
            </div>
          </motion.div>
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: true }}
whileHover={{ scale: 1.1, translateX: -2, translateY: -2  }}
style={{'--image-url': `url(${excel})`}} 
className=" w-3/4 lg:w-3/12 flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-cover  bg-no-repeat h-[20rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15">
            <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500  lg:group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-50  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum ad cupiditate minus impedit facere cum aperiam architecto consectetur illo ipsam reprehenderit iusto qui itaque repellendus blanditiis et officiis iste, assumenda obcaecati natus, odit, deleniti nemo consequatur. Quibusdam autem commodi corrupti, aspernatur nostrum exercitationem similique.
            </div>
            <div className=" -right-[5rem] z-10 bottom-[20%] font-[inter] absolute bg-[#768569] font-medium  w-fit   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
            <p className='font-[K2D] font-bold text-[1.2rem]'>
            Project 1
            </p>
            <p className=' font-[roboto] font-light'>
                {date.toDateString()}
            </p>
            </div>
          </motion.div>
     
    </div>


  </section>
  
   <section id='contact' className={` h-fit border-[#120720] text-white bg-[image:var(--image-url)] bg-no-repeat gap-[6rem] ${darkMode? 'bg-[#595959]':'bg-[#120720]'}`}
  style={{'--image-url': `url(${contact})`}}>
   <motion.p 
     initial={{
       x: 200
     }}
     whileInView={{
      x:0
     }}
     transition={{

      duration: 0.8
     }}
       viewport={{ once: false,}}
   className='font-[K2D] font-extrabold lg:text-[7.0rem] text-center text-[3.2rem]   tracking-[0.4rem]  '>
   Contact Me
        </motion.p>
        <div className='flex flex-col mt-[10vh]  items-center lg:gap-[4rem] gap-6'>
          <span className='flex flex-col w-10/12 lg:w-5/12 text-white  '>
            <label htmlFor="">Name:</label>
            <input type="text" placeholder='Enter your name here...' className=' w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none'  />
          </span>
          <span className='flex flex-col w-10/12  lg:w-5/12 text-white  '>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder='Enter your email here...' className=' w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none'  />
          </span>
          <span className='flex flex-col w-10/12  lg:w-5/12 text-white  text-start '>
            <label htmlFor="">Message:</label>
            <textarea type="text" placeholder='Enter your message here...' className=' focus:p-5 h-[15rem]  placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none'  />
          </span>
                <span>
  <motion.button   whileTap={{ scale: 0.75}} onClick={handleClick}  type="button" className='opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[12.4rem] rounded-[3.125rem] bg-[#EB03FF] w-[13rem] text-center p-3'>    {submitted ? 'Submitted' : 'Submit'}</motion.button> 
</span>
        </div>
   
        <div>
 
        </div>
      
   </section>

    </>
  )
}

export default App
