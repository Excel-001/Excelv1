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
import {motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import x from './assets/x.svg';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
function App() {

   
  
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
{id:'1', content: "HOME" },
{id:'2', content: "PROJECTS" },
{id:'3', content: "ABOUT" },
{id:'', content: "CONTACT" }
  ]
  const splitter = new GraphemeSplitter();
  return (
    <>
  
    <section className='bg-gradient-to-br   relative h-[99vh]
  from-40% from-[#120720] to-black via-purple-600 to-yellow-400 to-purple-900 flex flex-col justify-between items-center'>
   <div className='flex items-center justify-center w-11/12 mt-6  '>
      <motion.nav 
      initial={{opacity:0,}}
      animate={{opacity:1}}
      transition={{duration:2, origin:1}}
      className=' shadow-inset    w-full rounded-[3.125rem] items-center text-[#FFFFFF] flex text-center justify-between flex-row p-2'>
        <p className='font-[K2D] font-extrabold text-white text-[1.6rem]  lg:text-[2.5rem]'>
  Excel Chukwu 
        </p>
        
        
        <div className=' hidden lg:block' >
      
        <ul className='font-[inter] font-medium lg:flex gap-10 lg:flex-row'>
  {navs.map((nav) => (
    <motion.li
      key={nav.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ borderBottom: "4px solid #686953" }} 
    >
      {nav.content}
    </motion.li>
  ))}
</ul>
      
       
          </div>
            <div className=' lg:flex items-center  hidden'>
         <label class="inline-flex items-center me-5 cursor-pointer gap-3 ">
  <input type="checkbox" value="" class="sr-only peer"/>
  <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">LIGHT</span>
  <motion.div layout class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-[#C213FF] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#EB03FF]"></motion.div>
  <span class=" text-sm font-medium font-[inter] text-gray-900 dark:text-gray-300">DARK</span>
</label>
<span>
  <motion.button whileTap={{  scale: 0.75 }}  type="button" className='opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[12.4rem] rounded-[3.125rem] bg-[#EB03FF] text-center p-3'>Contact Me</motion.button> 
</span>
         </div> 
      </motion.nav>

     
    </div>
     <div className=' text-white w-11/12 lg:relative'>
  
        <div className='flex  flex-col lg:flex-row lg:justify-between  items-end gap-16   lg:items-end'>

          
          <div className='flex gap-6  font-[inter] flex-col   font-normal text-[1.6rem] lg:w-[20rem] lg:h-[70vh]  '>

                <p className='font-[K2D] lg:w-[34.5rem] w-fit  font-extrabold  lg:text-[7.0rem]  lg:oh-3/6 text-[3.2rem] '>
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
  <section className=' py-9 bg-[#120720] text-white flex flex-col overflow-hidden  items-center bg-[image:var(--image-url)] bg-no-repeat bg-right' style={{'--image-url': `url(${dd})`}}>
    <div className=' w-11/12  flex justify-evenly relative'>
      <p className='font-[K2D] font-extrabold text-[3.2rem] w-full lg:text-[7.0rem] lg:w-4/12 tracking-[0.4rem]  '>
  About me
        </p>

        <span className='flex lg:justify-center  absolute lg:relative right-[-3rem]  items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="208" height="149" viewBox="0 0 208 149" fill="none">
  <path d="M31.824 68.2916V80.7083H143L114.894 100.842L127.157 109.62L176.176 74.4999L127.157 39.3794L114.894 48.158L143 68.2916H31.824Z" fill="#FA00FF"/>
</svg>   
        </span>
   
    </div>

<div className=' flex lg:flex-row flex-col lg:justify-between lg:gap-2  w-11/12'>
  <picture className='lg:w-5/12 flex w-11/12 '>
    <img className='w-[100%]' src={profile} alt="" />
  </picture>
  <p 
    whileInView={{ opacity: .5, scale: .8}}
    initial={{ width: "0vw", x: "50vw" }}
     animate={{ width: "100%", x: 0 }}
     transition={{ duration: 2, origin: 1, delay:1.5 }}
  className='  flex gap-9 text-center lg:text-start flex-col justify-center font-[inter] lg:gap-14 text-xl lg:w-7/12  ' >
  Meet Excel , a talented web developer with a passion for crafting 
elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, React  and more, Their keen eye for detail,coupled with theircommitment to staying abreast of industry trends,ensures that every project they undertake is not only visually stunning but
 also optimizedfor peak performance.
 <span className=' flex justify-between relative items-center lg:items-end'>
  <motion.button whileTap={{scale: 0.75}} type="button" className=' hover:bg-opacity-100 lg:h-12 w-[10rem] flex-grow-0 hover:opacity-100 hover:ease-in  font-bold not-italic font-[inter] bg-opacity-40 lg:w-[12.4rem] rounded-[3.125rem] bg-[#F237F6]  backdrop-filter backdrop-blur-3xl text-center p-3'>Contact Me</motion.button>
<picture className=' absolute right-0 lg:relative'> <img src={dotp} alt="" /></picture>
</span>

  </p>
 

</div>

  </section>

  <section className='bg-[#120720] text-white flex justify-center   bg-[image:var(--image-url)] bg-no-repeat' style={{'--image-url': `url(${skillsbg})`}}>
    <div className='w-11/12 flex flex-col gap-12 my-[5vh]'>
    <p className='font-[K2D] font-extrabold lg:text-[7.0rem]   tracking-[0.4rem] text-[3.2rem]  '>
   <TypeAnimation
        sequence={[
          "  My Skills ",
          1000,
      
        ]}
  
        speed={20}
        repeat={Infinity}
  
      />
        </p>
        <div className=' gap-12 flex flex-col flex-wrap'>
<motion.div
  initial={{opacity: 0, y: 700}}
  animate={{opacity: 1, y: 0}}
  whileInView={{opacity:1, scale:1}}
  transition={{duration: 3, ease: "easeOut"}}
  viewport={{once: false}}
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
<div className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
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
</div>
<div className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
  <p className=''>Javascript </p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={tpinkdot} alt="" /> 
    <img src={tpinkdot} alt="" />
    <img src={tpinkdot} alt="" />
  </picture>
</div>
<div className=' flex lg:w-2/5 justify-between font-[inter] font-normal'>
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
</div>
<div className=' flex lg:w-2/5 justify-between font-[inter] font-normal'>
  <p className=''>Tailwind</p>
  <picture className='flex justify-evenly w-9/12'>
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" /> 
    <img src={pinkdot} alt="" />
    <img src={pinkdot} alt="" />
  </picture>
</div>
<div className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
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
</div>
<div className='flex font-[inter] lg:w-2/5 justify-between font-normal'>
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
</div>
<div className=' flex font-[inter] lg:w-2/5 justify-between font-normal'>
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
</div>
        </div>
            <picture className=" flex justify-end">
      <img className='w-[19rem] hidden lg:block h-[19rem] rounded-full shadow-gray-600 shadow-lg' src={excel} alt="" />
    </picture>   
    </div>

  
  </section>

  <section className=' text-white flex flex-col gap-10  items-center bg-[#120720]  bg-[image:var(--image--url)] bg-no-repeat' style={{'--image--url': `url(${project})`}} >
 
    <div className="overflow-hidden flex justify-center ">
    <p className='font-[K2D] font-extrabold lg:text-[7.0rem] text-[3.2rem] text-center w-11/12 flex lg:w-[52vw]    tracking-[0.4rem] bg-[image:var(--image--url)] bg-right-bottom bg-no-repeat pb-9  ' style={{'--image--url': `url(${x})`}}>
    My Projects
    
        </p>
    </div>
    <div className=' gap-10 w-11/12 flex flex-wrap justify-between '  >
  <motion.div
variants={fadeInAnimationVariants}
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1}}
transition={{ease: "linear"}}
viewport={{ once: false }}
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
viewport={{ once: false }}
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
viewport={{ once: false }}
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
viewport={{ once: false }}
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
viewport={{ once: false }}
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
viewport={{ once: false }}
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
  
   <section className='bg-[#120720] h-fit border-[#120720] text-white bg-[image:var(--image-url)] bg-no-repeat gap-[6rem]' style={{'--image-url': `url(${contact})`}}>
   <p className='font-[K2D] font-extrabold lg:text-[7.0rem] text-center text-[3.2rem]   tracking-[0.4rem]  '>
   Contact Me
        </p>
        <div className='flex flex-col mt-[10vh]  items-center lg:gap-[4rem] gap-6'>
          <span className='flex flex-col w-10/12 lg:w-5/12 text-white  '>
            <label htmlFor="">Name:</label>
            <input type="text" placeholder='Enter your name here...' className=' w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1.3rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none'  />
          </span>
          <span className='flex flex-col w-10/12  lg:w-5/12 text-white  '>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder='Enter your email here...' className=' w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1.3rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none'  />
          </span>
          <span className='flex flex-col w-10/12  lg:w-5/12 text-white  text-start '>
            <label htmlFor="">Message:</label>
            <input type="text" placeholder='Enter your message here...' className=' focus:placeholder: h-[15rem] flex justify-start items-start placeholder:text-[#D9D9D9D9] placeholder:text-[1.3rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none'  />
          </span>
        </div>
        <div>
          
        </div>
   </section>
    </>
  )
}

export default App
