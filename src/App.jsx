import "./App.css";
import line from "./assets/line.svg";
import bigglow from "./assets/bigglow.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import figma from "./assets/figma.svg";
import instagram from "./assets/instagram.svg";
import profile from "./assets/profile.svg";
import dotp from "./assets/dotpattern.svg";
import dd from "./assets/aboutbg.svg";
import tpinkdot from "./assets/tpinkdot.svg";
import pinkdot from "./assets/pinkdot.svg";
import skillsbg from "./assets/skillsbg.svg";
import project from "./assets/project.svg";
import contact from "./assets/contact.svg";
import GraphemeSplitter from "grapheme-splitter";
import menu from "./assets/menu.svg";
import x from "./assets/x.svg";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import ShowMoreContainer from "./showmore";
import emailjs from "@emailjs/browser";

function App() {
  const [projectCount, setProjectCount] = useState(null);
<<<<<<< Updated upstream
  const [deployDate, setDeployDate] = useState(null);
=======

  const html = 95;
  const css = 80;
  const react = 79;
  const Bootstrap = 80;
  const Tailwind = 90;
  const Figma = 50;
  const JavaScript = 75;
  const node = 65;
  const circumference = 500;
>>>>>>> Stashed changes
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = "nfp_hYqDLSxYm5E8ter5R1BxaRLygoenGC3Dbd0d"; // Replace 'YOUR_NETLIFY_ACCESS_TOKEN' with your actual token
        const response = await fetch("https://api.netlify.com/api/v1/sites", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const projects = await response.json();
        setProjectCount(projects.length);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  const [repositoryCount, setRepositoryCount] = useState(null);
  const fetchRepositories = async () => {
    try {
      const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
 
      if (!token) {
        throw new Error("GitHub token not found");
      }
    
      const response = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
    
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
    
      const repositories = await response.json();
      setRepositoryCount(repositories.length);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };
  
  
  

  useEffect(() => {
    fetchRepositories();
  }, []);
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [senderName, setSenderName] = useState("");
  const resetForm = () => {
    form.current.reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.textContent = "Sending...";
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .sendForm("service_uu3nyde", "template_jsxdavw", form.current, {
        publicKey: "kugwCCsQnP9-UAMTy",
        ...formData,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Name:", name);
          console.log("Email:", email);
          console.log("Message:", message);
          btn.textContent = "Send Email";
          setSenderName(e.target.name.value);
          setShowAlert(true);
          resetForm();
          setTimeout(() => {
            setShowAlert(false);
          }, 7000);
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mobile = {
    transition: {
      duration: 0.9,
    },
  };
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.netlify.com/api/v1/sites", {
        headers: {
          Authorization: "Bearer nfp_hYqDLSxYm5E8ter5R1BxaRLygoenGC3Dbd0d",
        },
      });

      console.log(response);

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const [activeNavItem, setActiveNavItem] = useState(null);

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
      },
    }),
  };

  const navs = [
    { href: "#home", id: "1", content: "HOME" },
    { href: "#about", id: "3", content: "ABOUT" },
    { href: "#projects", id: "2", content: "PROJECTS" },
    { href: "#contact", id: "", content: "CONTACT" },
  ];
  const splitter = new GraphemeSplitter();
<<<<<<< Updated upstream
=======
  const text =
    "Meet Excel , a talented web developer with a passion for crafting elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, React and more, Their keen eye for detail,coupled with their commitment to staying abreast of industry trends,ensures that every project they undertake is not only visually stunning but also optimized for peak performance.".split(
      " "
    );
>>>>>>> Stashed changes
  return (
    <>
    
    
      <section
        id="home"
        className={` h-[99vh]  flex flex-col justify-between items-center ${
          darkMode
            ? "light-mode b bg-gradient-to-br from-55% from-[#595959] to-[#a5a5a5] via-[#f2f2f2] to-[#666666] to-[#a4a4a4] text-black"
            : "dark-mode text-[#456789] bg-gradient-to-br from-40% from-[#120720] to-black via-purple-600 to-[#F237F6C2] to-purple-900 "
        }`}
      >
        <div className="flex items-center justify-center w-11/12   mt-6  ">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, origin: 1 }}
<<<<<<< Updated upstream
            className=" shadow-inset    top-0 z-10  w-full rounded-[3.125rem] items-center  flex text-center justify-between flex-row p-2"
=======
            className={`shadow-inset lg:border  text-start  h-fit grid grid-cols-3  w-11/12  p-6  md:gap-7 lg:fixed  top-0 z-40 mt-1 pt-3  backdrop-blur-[192px]  rounded-[1.125rem]   lg:flex lg:text-center  ${
              darkMode
                ? "bg-[#555555] border-[#555555]   text-[#CDC9C3]"
                : "border-[#c213ff] "
            }`}
>>>>>>> Stashed changes
          >
            <p className="font-[K2D] font-extrabold   text-[1.6rem]   lg:text-[2.5rem]">
              Excel
            </p>

            <motion.span
              className={` absolute lg:relative lg:block   lg:w-10/12 ${
                !toggleMenu
                  ? "hidden"
                  : "block absolute top-[-3.8vh] z-30 left-[-4vw]  w-[100vw] lg:relative  "
              }`}
            >
              <div
                className={`rounded h-[99vh]    py-9 lg:py-0 flex lg:h-fit lg:flex-row flex-col justify-start gap-10 lg:justify-between items-center ${
                  darkMode ? "bg-[#595959]" : "bg-[#120720]"
                }`}
              >
                <div>
                  <ul className="font-inter font-medium flex flex-col gap-10 lg:flex-row">
                    {navs.map((nav) => (
                      <motion.li
                      whileHover={{color:'#EB03FF'}}
                        key={nav.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={
                          activeNavItem === nav.href
<<<<<<< Updated upstream
                            ? "active border-b-4  border-b-[#F237F6C2] rounded-sm"
                            : ""
                        }
                        onClick={() => {
                          setActiveNavItem(nav.href);
                        }} 
                      >
                        <a 
                        className={
                          activeNavItem === nav.href
                            ? "active pb-3 h-full  "
                            : ""
                        }
                         onClick={() => setActiveNavItem(nav.href)} href={nav.href}>{nav.content}</a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className=" flex flex-col lg:flex-row items-center gap-10 lg:gap-0  ">
                  <label class="inline-flex items-center me-5 cursor-pointer gap-3  ">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <span class=" text-sm font-medium font-[inter] text-gray-900 dark:text-gray-300">
                      DARK
                    </span>
                    <motion.div
                      onClick={toggleDarkMode}
                      layout
                      class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#EB03FF]"
                    ></motion.div>
                    <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">
                      LIGHT
                    </span>
                  </label>
                  <span>
                    <a href="#contact">
                         <motion.button
                      whileTap={{ scale: 0.75 }}
                      type="button"
                      className="opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[10.4rem]  w-[10rem] rounded-[3.125rem] bg-[#EB03FF] text-center p-3"
=======
                            ? "scale-x-100 origin-left"
                            : " group-hover:scale-x-50 "
                        } ${darkMode ? "bg-[#CDC9C3] " : "bg-[#c213ffc2]"}`}
                      ></div>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="  w-full  flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0  ">
                <label class="inline-flex  w-fit items-center me-5 cursor-pointer gap-3  ">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <span class=" text-sm font-medium font-[inter] t">DARK</span>
                  <motion.div
                    onClick={toggleDarkMode}
                    layout
                    class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:-gray-300 after: after:rounded-full after:h-4 after:w-4 after:transition-all dark:-gray-600 peer-checked:bg-[#EB03FF]"
                  ></motion.div>
                  <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">
                    LIGHT
                  </span>
                </label>
                <span>
                  <a href="#contact">
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      type="button"
                      className={`opacity-50 hover:opacity-100 text-center p-3 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[10.4rem]  w-[10rem] rounded-[3.125rem] ${
                        darkMode
                          ? " bg-[#CDC9C3] text-[#120720]"
                          : "bg-[#EB03FF]"
                      }`}
>>>>>>> Stashed changes
                    >
                      Contact Me 
                    </motion.button>
                    </a>
                 
                  </span>
                </div>
              </div>
            </motion.span>

            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  lg:hidden z-30  focus:outline-none   dark:text-gray-400 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </motion.nav>
        </div>
        <div className=" text-white w-11/12 lg:relative">
          <div className="flex  flex-col lg:flex-row lg:justify-between  items-end gap-16   lg:items-end">
            <div className="flex gap-6  font-[inter] flex-col sm:pt-11 lg:p-0  font-normal text-[1.6rem] lg:w-[20rem] lg:h-[70vh]  ">
              <p
                className={` font-[K2D] lg:w-[34.5rem] w-fit  lg:h-[20rem]  font-extrabold  lg:text-[7.0rem]  lg:oh-3/6 text-[3.2rem] ${
<<<<<<< Updated upstream
                  darkMode ? "light-mode" : "dark-mode text-white"
=======
                  darkMode
                    ? "light-mode text-[#555555]"
                    : "dark-mode text-white"
>>>>>>> Stashed changes
                }`}
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
                    "προέχω 🇬🇷",
                    1000,
                    "tayọ 🇳🇬",
                    1000,
                  ]}
                  speed={20}
                  repeat={Infinity}
                />
              </p>

              <motion.div
                initial={{ width: "100%", y: "40vw", opacity: 0 }}
                animate={{ width: "100%", y: 0, opacity: 1 }}
                transition={{ duration: 1, origin: 0 }}
                className="flex  justify-center items-center flex-row-reverse lg:flex-row text-start w-[70%] p-2 "
              >
                <picture className="w-1/12 ">
                  <img src={line} alt="" />
                </picture>
                <p>
                  I’m a front-end web developer and I work remotely from Nigeria
                </p>
              </motion.div>
            </div>

            <div className="flex w-[100%] lg:w-6/12 justify-center items-center ">
              <div className={`transform relative flex justify-center items-center h-[24rem] w-[50rem] border-t-2  custom-rounded transition ease-in duration-300 origin-bottom-right ${darkMode ? 'border-[#555555] bg-[#555555]':'border-[#eb03ff]'}`}>
        {" "}
        <div class="loader  absolute flex justify-center items-center rounded-full ">
          <div class="face  face1 border">
            <div class="circle"></div>
          </div>
          <div class="face bg-[#cdc9c3] face2">
            <div class="circle   text-[#555555]"></div>
          </div>
          <div className="absolute text-[#555555] text-2xl text-center  
          ">
    CV
          </div>
        </div>
      </div>
            </div>
            <div className="lg:h-[70vh] absolute lg:relative bottom-0 w-11/12  flex lg:flex-col  gap-16  lg:w-fit lg:gap-6">
              <a
                href="https://github.com/Excel-001?tab=overview&from=2024-03-01&to=2024-03-31"
                target="_blank"
              >
                <motion.img
                  whileInView={{ opacity: 0.5, scale: 0.8 }}
                  initial={{ width: "0vw", x: "50vw" }}
                  animate={{ width: "100%", x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 2, origin: 0.4 }}
                  src={github}
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/excel_00100/?hl=en"
                target="_blank"
              >
                <motion.img
                  initial={{ width: "0vw", x: "50vw" }}
                  animate={{ width: "100%", x: 0 }}
                  whileInView={{ opacity: 0.5, scale: 0.8 }}
                  transition={{ duration: 2, origin: 1, delay: 0.5 }}
                  src={instagram}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kelechi-chukwu-086420249/"
                target="_blank"
              >
                <motion.img
                  whileInView={{ opacity: 0.5, scale: 0.8 }}
                  initial={{ width: "0vw", x: "50vw" }}
                  animate={{ width: "100%", x: 0 }}
                  transition={{ duration: 2, origin: 1, delay: 1 }}
                  src={linkedin}
                  alt=""
                />
              </a>
              <a
                href="https://www.figma.com/files/drafts?fuid=1227526873109683985"
                target="_blank"
              >
                <motion.img
                  whileInView={{ opacity: 0.5, scale: 0.8 }}
                  initial={{ width: "0vw", x: "50vw" }}
                  animate={{ width: "100%", x: 0 }}
                  transition={{ duration: 2, origin: 1, delay: 1.5 }}
                  src={figma}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
<<<<<<< Updated upstream

      <section
        id="about"
        className={`text-white lg:flex sm:gap-12 lg:flex-col h-fit relative  py-5 items-center ${
          darkMode
            ? "bg-[#595959]"
            : "bg-[#120720] py-9 flex flex-col overflow-hidden  items-center bg-[image:var(--image-url)] bg-no-repeat bg-right"
        }`}
        style={{ "--image-url": `url(${dd})` }}
      >
        <div className=" w-11/12   flex justify-evenly relative">
          <motion.p
            initial={{
              x: -200,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: false }}
            className="font-[K2D] font-extrabold text-[3.2rem] w-full lg:text-[7.0rem] lg:w-5/12  tracking-[0.4rem]  "
          >
            About me
          </motion.p>

          <span className="lg:flex lg:justify-center hidden sm:block  absolute lg:relative right-[-3rem]  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="208"
              height="149"
              viewBox="0 0 208 149"
              fill="none"
            >
              <path
                d="M31.824 68.2916V80.7083H143L114.894 100.842L127.157 109.62L176.176 74.4999L127.157 39.3794L114.894 48.158L143 68.2916H31.824Z"
                fill="#FA00FF"
              />
            </svg>
          </span>
        </div>

        <div className=" flex lg:gap-4 lg:flex-row flex-col  lg:justify-between  w-11/12">
          <picture className="lg:w-5/12 flex sm:w-9/12 w-11/12 md:w-7/12 ">
            <img className="w-[100%]" src={profile} alt="" />
          </picture>  
=======
   


      <div
        className={` ${
          darkMode ? "bg-[#CDC9C3] text-[#555555]" : "bg-[#120720] text-white"
        }`}
      >
        <section
          id="about"
          className={` lg:flex w-11/12 m-auto sm:gap-12 lg:flex-col h-fit relative  py-5 items-center `}
        >
          <motion.p className="font-[K2D]  transition-all ease-in font-extrabold text-[3.2rem] w-full lg:text-[7.0rem] lg:w-5/12  tracking-[0.4rem]  ">
            About me
          </motion.p>

          <div className=" flex lg:gap-8 lg:flex-row flex-col  lg:justify-between  w-11/12">
            <picture className="lg:w-5/12 flex sm:w-9/12 w-11/12 md:w-7/12 ">
              <img className="w-[100%]" src={profile} alt="" />
            </picture>
            <motion.p className="  flex   text-center lg:text-start flex-col justify-center font-[inter] lg:gap-14 text-[1rem] lg:text-lg lg:w-7/12  ">
              <div className="flex flex-wrap gap-1">
                {text.map((el, i) => (
                  <motion.span
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ opacity: 0.5 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: i / 30,
                    }}
                    key={i}
                  >
                    <p> {el}</p>
                  </motion.span>
                ))}
              </div>

              <span className=" flex justify-between  relative items-center lg:items-end">
                <a href="#contact" className=" m-auto md:m-0">
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    type="button"
                    className={`opacity-50 hover:opacity-100 text-center p-3 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[10.4rem]  w-[10rem] rounded-[3.125rem] ${
                      darkMode ? " bg-[#120720] text-[#cdc9c3]" : "bg-[#EB03FF]"
                    }`}
                  >
                    Contact Me
                  </motion.button>
                </a>

                <picture className=" hidden md:block absolute right-0 lg:relative">
                  {" "}
                  <img src={dotp} alt="" />
                </picture>
              </span>
            </motion.p>
          </div>
        </section>

        <section className={` flex justify-center  bg-no-repeat`}>
          <div className="w-11/12 flex flex-col gap-12 my-[5vh]">
            <motion.p
              initial={{
                x: -200,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: false }}
              className="font-[K2D] font-extrabold lg:text-[7.0rem]   tracking-[0.4rem] text-[3.2rem]  "
            >
              My Skills
            </motion.p>
            {/* mobile view of skills  */}
            <section className="md:hidden ">
              <span>
                <p>
                  Figma <i>{Figma}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={`rounded-e-2xl h-full w-[50%] ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>
              <span>
                <p>
                  NodeJs <i>{node}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={`h-full w-[65%]  rounded-e-2xl ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>{" "}
              <span>
                <p>
                  JavaScript <i>{JavaScript}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={` h-full w-[75%]  rounded-e-2xl ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>
              <span>
                <p>
                  React <i>{react}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={` h-full w-[79%]  rounded-e-2xl ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>{" "}
              <span>
                <p>
                  Bootstrap <i>{Bootstrap}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={` h-full w-[80%]  rounded-e-2xl ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>{" "}
              <span>
                <p>
                  CSS <i>{css}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={` h-full w-[80%]  rounded-e-2xl ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>
              <span>
                {" "}
                <span>
                  <p>
                    Tailwind <i>{Tailwind}%</i>
                  </p>
                  <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                    <div
                      className={` h-full w-[90%]  rounded-e-2xl ${
                        darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                      }`}
                    ></div>
                  </div>
                </span>
                <p>
                  html <i>{html}%</i>
                </p>
                <div className=" h-3 rounded-2xl bg-slate-600  w-full">
                  <div
                    className={` h-full w-[95%]  rounded-e-2xl ${
                      darkMode ? "bg-[#555555]" : "bg-[#9733ee]"
                    }`}
                  ></div>
                </div>
              </span>
            </section>
            {/* desktop view of skills  */}
            <section className="hidden  md:grid grid-cols-9">
              <section className=" grid lg:col-span-3 col-span-3  grid-rows-3 justify-center ">
                <div className=" bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10   shadow-lg rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={html}
                          text={html}
                          styles={buildStyles({
                            rotation: 0.25,
                            pathColor: `rgba(62, 152, 199, 56)`,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium  sm:text-xl ">HTML5</p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-6/12 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#E65100"
                          d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                        ></path>
                        <path
                          fill="#FF6D00"
                          d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                        ></path>
                        <path
                          fill="#EEE"
                          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="  bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={css}
                          text={css}
                          styles={buildStyles({
                            rotation: 0.25,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium text-start   sm:text-xl ">
                      CSS
                    </p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-6/12 m-auto"
                        width="91px"
                        height="91px"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M6 28L4 3H28L26 28L16 31L6 28Z"
                            fill="#1172B8"
                          ></path>{" "}
                          <path
                            d="M26 5H16V29.5L24 27L26 5Z"
                            fill="#33AADD"
                          ></path>{" "}
                          <path
                            d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                            fill="white"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="  bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden  p-2 bg-inherit rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={JavaScript}
                          text={JavaScript}
                          styles={buildStyles({
                            rotation: 0.25,
                            pathColor: `rgba(62, 152, 199, 56)`,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium text-start  sm:text-xl">
                      JavaScript
                    </p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-6/12 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="JavaScript"
                        role="img"
                        viewBox="0 0 512 512"
                        width="91px"
                        height="91px"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <rect
                            width="512"
                            height="512"
                            rx="15%"
                            fill="#f7df1e"
                          ></rect>
                          <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="  bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden  bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={Bootstrap}
                          text={Bootstrap}
                          styles={buildStyles({
                            rotation: 0.25,
                            pathColor: `rgba(62, 152, 199, 56)`,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium text-start  sm:text-xl ">
                      Bootstrap
                    </p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-6/12 m-auto"
                        width="91px"
                        height="91px"
                        viewBox="0 0 256 256"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
                              fill="#563D7C"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
                              fill="#FFFFFF"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
              <motion.section
                animate={{ rotate: 360 }}
                className={`border rounded-full border-dashed flex m-auto p-10  justify-center col-span-3   ${
                  darkMode ? "border-[#555555]" : "border-[#9733ee]"
                }`}
                // className=" border-[#9733ee] "
              >
                {" "}
                <div class="h-fit col-span-3 lg:col-span-1 m-auto  w-fit relative">
                  <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
                    <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center ">
                      <div className="text-[2rem] font-[italic]">95%</div>
                      <div>Satisfied</div>
                    </div>
                  </div>
                  <svg
                    className=" absolute top-0  left-0 h-[160px] w-[160px] "
                    xmlns="http://w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop
                          offset="0%"
                          stop-color={`${darkMode ? "#120720" : "#da22ff"}`}
                        />
                        <stop
                          offset="100%"
                          stop-color={`${darkMode ? "#555555" : "#9733ee"}`}
                        />
                      </linearGradient>
                    </defs>
                    <circle
                      className="circle2"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </motion.section>

              <section className=" grid  lg:col-span-3 col-span-3  grid-rows-3 justify-center ">
                <div className=" bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={react}
                          text={react}
                          styles={buildStyles({
                            rotation: 0.25,
                            pathColor: `rgba(62, 152, 199, 56)`,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium  sm:text-xl ">React</p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-6/12 m-auto"
                        width="92px"
                        height="92px"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                            fill="#53C1DE"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                            fill="#53C1DE"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="  bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={Figma}
                          text={Figma}
                          styles={buildStyles({
                            rotation: 0.25,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium text-start   sm:text-xl">
                      Figma
                    </p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-8/12 m-auto"
                        width="91px"
                        height="91px"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                            fill="#1ABCFE"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                            fill="#0ACF83"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                            fill="#FF7262"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                            fill="#F24E1E"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                            fill="#A259FF"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="  bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={Tailwind}
                          text={Tailwind}
                          styles={buildStyles({
                            rotation: 0.25,
                            pathColor: `rgba(62, 152, 199, 56)`,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium text-start  sm:text-xl">
                      Tailwind
                    </p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-8/12 m-auto"
                        fill="#000000"
                        width="91px"
                        height="91px"
                        viewBox="-2.4 -2.4 28.80 28.80"
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="  bg-transparent row-span-1 py-8 w-full h-fit">
                  <div
                    className={`items-center  justify-between  px-10  shadow-lg    rounded-2xl h-20 flex ${
                      darkMode
                        ? "bg-[#555555]  text-[#CDC9C3]"
                        : " bg-[#2d1a45]"
                    }`}
                  >
                    <div class="flex  items-center lg:h-32 w-24 h-24 lg:w-32  justify-center  overflow-hidden  bg-inherit p-2  rounded-full">
                      <div className="">
                        <CircularProgressbar
                          value={node}
                          text={node}
                          styles={buildStyles({
                            rotation: 0.25,
                            pathColor: `rgba(62, 152, 199, 56)`,
                            textColor: "#fff",
                            pathColor: "#9733ee",
                            // trailColor: '#679843',
                            backgroundColor: "#2d1a45",
                          })}
                        />
                      </div>
                    </div>
                    <p class="ml-10 font-medium text-start  sm:text-xl ">
                      Node
                    </p>
                    <div class=" text-xl font-medium   sm:block">
                      <svg
                        className=" w-8/12 m-auto"
                        width="91px"
                        height="91px"
                        viewBox="0 -99 512 512"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <defs>
                            {" "}
                            <linearGradient
                              x1="68.1884411%"
                              y1="17.4868311%"
                              x2="27.8226935%"
                              y2="89.7551419%"
                              id="linearGradient-1"
                            >
                              {" "}
                              <stop stop-color="#41873F" offset="0%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#418B3D" offset="32.88%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#419637" offset="63.52%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#3FA92D" offset="93.19%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#3FAE2A" offset="100%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                            <path
                              id="path-2"
                              d="M57.903386,1.84920993 C56.0541761,0.809029345 53.8582393,0.809029345 52.0090293,1.84920993 L3.351693,29.9340858 C1.50248307,30.9742664 0.462302483,32.9390519 0.462302483,35.0194131 L0.462302483,91.3047404 C0.462302483,93.3851016 1.61805869,95.3498871 3.351693,96.3900677 L52.0090293,124.474944 C53.8582393,125.515124 56.0541761,125.515124 57.903386,124.474944 L106.560722,96.3900677 C108.409932,95.3498871 109.450113,93.3851016 109.450113,91.3047404 L109.450113,35.0194131 C109.450113,32.9390519 108.294357,30.9742664 106.560722,29.9340858 L57.903386,1.84920993 L57.903386,1.84920993 Z"
                            >
                              {" "}
                            </path>{" "}
                            <linearGradient
                              x1="43.2765472%"
                              y1="55.168777%"
                              x2="159.245277%"
                              y2="-18.3061379%"
                              id="linearGradient-4"
                            >
                              {" "}
                              <stop stop-color="#41873F" offset="13.76%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#54A044" offset="40.32%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#66B848" offset="71.36%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#6CC04A" offset="90.81%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                            <linearGradient
                              x1="-4413.77%"
                              y1="13.43%"
                              x2="5327.93%"
                              y2="13.43%"
                              id="linearGradient-5"
                            >
                              {" "}
                              <stop stop-color="#6CC04A" offset="9.191646%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#66B848" offset="28.64%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#54A044" offset="59.68%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#41873F" offset="86.24%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                            <linearGradient
                              x1="-4.38880435%"
                              y1="49.9972065%"
                              x2="101.499239%"
                              y2="49.9972065%"
                              id="linearGradient-6"
                            >
                              {" "}
                              <stop stop-color="#6CC04A" offset="9.191646%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#66B848" offset="28.64%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#54A044" offset="59.68%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#41873F" offset="86.24%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                            <linearGradient
                              x1="-9713.77%"
                              y1="36.21%"
                              x2="27.93%"
                              y2="36.21%"
                              id="linearGradient-7"
                            >
                              {" "}
                              <stop stop-color="#6CC04A" offset="9.191646%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#66B848" offset="28.64%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#54A044" offset="59.68%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#41873F" offset="86.24%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                            <linearGradient
                              x1="-103.860714%"
                              y1="50.2754209%"
                              x2="100.796849%"
                              y2="50.2754209%"
                              id="linearGradient-8"
                            >
                              {" "}
                              <stop stop-color="#6CC04A" offset="9.191646%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#66B848" offset="28.64%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#54A044" offset="59.68%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#41873F" offset="86.24%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                            <linearGradient
                              x1="130.613025%"
                              y1="-211.06936%"
                              x2="4.39327731%"
                              y2="201.605387%"
                              id="linearGradient-9"
                            >
                              {" "}
                              <stop stop-color="#41873F" offset="0%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#418B3D" offset="32.88%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#419637" offset="63.52%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#3FA92D" offset="93.19%">
                                {" "}
                              </stop>{" "}
                              <stop stop-color="#3FAE2A" offset="100%">
                                {" "}
                              </stop>{" "}
                            </linearGradient>{" "}
                          </defs>{" "}
                          <g fill="none">
                            {" "}
                            <path
                              d="M253.110609,313.094357 C251.376975,313.094357 249.758916,312.632054 248.256433,311.823025 L232.884876,302.692551 C230.573363,301.421219 231.72912,300.958916 232.422573,300.727765 C235.543115,299.687585 236.120993,299.456433 239.357111,297.607223 C239.703837,297.376072 240.16614,297.491648 240.512867,297.722799 L252.30158,304.772912 C252.763883,305.004063 253.341761,305.004063 253.688488,304.772912 L299.80316,278.074944 C300.265463,277.843792 300.496614,277.38149 300.496614,276.803612 L300.496614,223.523251 C300.496614,222.945372 300.265463,222.48307 299.80316,222.251919 L253.688488,195.669526 C253.226185,195.438375 252.648307,195.438375 252.30158,195.669526 L206.186907,222.251919 C205.724605,222.48307 205.493454,223.060948 205.493454,223.523251 L205.493454,276.803612 C205.493454,277.265914 205.724605,277.843792 206.186907,278.074944 L218.78465,285.356208 C225.603612,288.823476 229.87991,284.77833 229.87991,280.733183 L229.87991,228.146275 C229.87991,227.452822 230.457788,226.759368 231.266817,226.759368 L237.161174,226.759368 C237.854628,226.759368 238.548081,227.337246 238.548081,228.146275 L238.548081,280.733183 C238.548081,289.863657 233.57833,295.180135 224.910158,295.180135 C222.251919,295.180135 220.171558,295.180135 214.277201,292.290745 L202.141761,285.356208 C199.136795,283.622573 197.287585,280.386456 197.287585,276.919187 L197.287585,223.638826 C197.287585,220.171558 199.136795,216.93544 202.141761,215.201806 L248.256433,188.503837 C251.145824,186.885779 255.075395,186.885779 257.964786,188.503837 L304.079458,215.201806 C307.084424,216.93544 308.933634,220.171558 308.933634,223.638826 L308.933634,276.919187 C308.933634,280.386456 307.084424,283.622573 304.079458,285.356208 L257.964786,312.054176 C256.462302,312.74763 254.728668,313.094357 253.110609,313.094357 Z M267.326411,276.456885 C247.100677,276.456885 242.939955,267.210835 242.939955,259.351693 C242.939955,258.658239 243.517833,257.964786 244.326862,257.964786 L250.336795,257.964786 C251.030248,257.964786 251.608126,258.427088 251.608126,259.120542 C252.532731,265.24605 255.190971,268.251016 267.441986,268.251016 C277.150339,268.251016 281.311061,266.055079 281.311061,260.854176 C281.311061,257.84921 280.155305,255.653273 265.014898,254.15079 C252.417156,252.879458 244.558014,250.105643 244.558014,240.050564 C244.558014,230.688939 252.417156,225.141309 265.592777,225.141309 C280.386456,225.141309 287.66772,230.226637 288.592325,241.321896 C288.592325,241.668623 288.476749,242.01535 288.245598,242.362077 C288.014447,242.593228 287.66772,242.824379 287.320993,242.824379 L281.311061,242.824379 C280.733183,242.824379 280.155305,242.362077 280.039729,241.784199 C278.652822,235.42754 275.069977,233.347178 265.592777,233.347178 C254.959819,233.347178 253.688488,237.045598 253.688488,239.819413 C253.688488,243.171106 255.190971,244.211287 269.522348,246.060497 C283.738149,247.909707 290.441535,250.567946 290.441535,260.507449 C290.325959,270.678104 282.004515,276.456885 267.326411,276.456885 Z"
                              fill="#539E43"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M110.027991,104.711512 C110.027991,102.631151 108.872235,100.666366 107.023025,99.6261851 L58.0189616,71.4257336 C57.2099323,70.9634312 56.2853273,70.7322799 55.3607223,70.6167043 L54.8984199,70.6167043 C53.9738149,70.6167043 53.0492099,70.9634312 52.2401806,71.4257336 L3.23611738,99.6261851 C1.38690745,100.666366 0.231151242,102.631151 0.231151242,104.711512 L0.346726862,180.52912 C0.346726862,181.5693 0.924604966,182.609481 1.84920993,183.071783 C2.7738149,183.649661 3.92957111,183.649661 4.73860045,183.071783 L33.8636569,166.428894 C35.7128668,165.388713 36.868623,163.423928 36.868623,161.343567 L36.868623,125.861851 C36.868623,123.78149 38.0243792,121.816704 39.8735892,120.776524 L52.2401806,113.610835 C53.1647856,113.032957 54.2049661,112.801806 55.2451467,112.801806 C56.2853273,112.801806 57.3255079,113.032957 58.1345372,113.610835 L70.5011287,120.776524 C72.3503386,121.816704 73.5060948,123.78149 73.5060948,125.861851 L73.5060948,161.343567 C73.5060948,163.423928 74.661851,165.388713 76.5110609,166.428894 L105.636117,183.071783 C106.560722,183.649661 107.716479,183.649661 108.641084,183.071783 C109.565688,182.609481 110.143567,181.5693 110.143567,180.52912 L110.027991,104.711512 L110.027991,104.711512 Z"
                              fill="#333333"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M345.571106,0.346726862 C344.646501,-0.115575621 343.490745,-0.115575621 342.681716,0.346726862 C341.757111,0.924604966 341.179233,1.84920993 341.179233,2.88939052 L341.179233,78.013544 C341.179233,78.7069977 340.832506,79.4004515 340.139052,79.862754 C339.445598,80.2094808 338.752144,80.2094808 338.058691,79.862754 L325.807675,72.8126411 C323.958465,71.7724605 321.762528,71.7724605 319.913318,72.8126411 L270.909255,101.128668 C269.060045,102.168849 267.904289,104.133634 267.904289,106.213995 L267.904289,162.730474 C267.904289,164.810835 269.060045,166.775621 270.909255,167.815801 L319.913318,196.131828 C321.762528,197.172009 323.958465,197.172009 325.807675,196.131828 L374.811738,167.815801 C376.660948,166.775621 377.816704,164.810835 377.816704,162.730474 L377.816704,21.8437923 C377.816704,19.6478555 376.660948,17.68307 374.811738,16.6428894 L345.571106,0.346726862 L345.571106,0.346726862 Z M341.063657,144.122799 C341.063657,144.700677 340.832506,145.16298 340.370203,145.394131 L323.611738,155.102483 C323.149436,155.333634 322.571558,155.333634 322.109255,155.102483 L305.35079,145.394131 C304.888488,145.16298 304.657336,144.585102 304.657336,144.122799 L304.657336,124.706095 C304.657336,124.128217 304.888488,123.665914 305.35079,123.434763 L322.109255,113.726411 C322.571558,113.49526 323.149436,113.49526 323.611738,113.726411 L340.370203,123.434763 C340.832506,123.665914 341.063657,124.243792 341.063657,124.706095 L341.063657,144.122799 L341.063657,144.122799 Z"
                              fill="#333333"
                            >
                              {" "}
                            </path>{" "}
                            <g transform="translate(401.047404, 70.501129)">
                              {" "}
                              <path
                                d="M107.600903,53.7426637 C109.450113,52.7024831 110.490293,50.7376975 110.490293,48.6573363 L110.490293,34.9038375 C110.490293,32.8234763 109.334537,30.8586907 107.600903,29.8185102 L58.9435666,1.61805869 C57.0943567,0.577878104 54.8984199,0.577878104 53.0492099,1.61805869 L4.04514673,29.9340858 C2.19593679,30.9742664 1.04018059,32.9390519 1.04018059,35.0194131 L1.04018059,91.5358916 C1.04018059,93.6162528 2.19593679,95.5810384 4.04514673,96.621219 L52.7024831,124.359368 C54.551693,125.399549 56.7476298,125.399549 58.4812641,124.359368 L87.9530474,107.94763 C88.8776524,107.485327 89.4555305,106.445147 89.4555305,105.404966 C89.4555305,104.364786 88.8776524,103.324605 87.9530474,102.862302 L38.717833,74.5462754 C37.793228,73.9683973 37.2153499,73.0437923 37.2153499,72.0036117 L37.2153499,54.3205418 C37.2153499,53.2803612 37.793228,52.2401806 38.717833,51.7778781 L54.0893905,42.9941309 C55.0139955,42.4162528 56.1697517,42.4162528 57.0943567,42.9941309 L72.4659142,51.7778781 C73.3905192,52.3557562 73.9683973,53.2803612 73.9683973,54.3205418 L73.9683973,68.1896163 C73.9683973,69.2297968 74.5462754,70.2699774 75.4708804,70.7322799 C76.3954853,71.310158 77.5512415,71.310158 78.4758465,70.7322799 L107.600903,53.7426637 L107.600903,53.7426637 Z"
                                fill="#333333"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M55.2451467,51.0844244 C55.5918736,50.8532731 56.0541761,50.8532731 56.4009029,51.0844244 L65.7625282,56.5164786 C66.1092551,56.7476298 66.3404063,57.0943567 66.3404063,57.5566591 L66.3404063,68.4207675 C66.3404063,68.88307 66.1092551,69.2297968 65.7625282,69.4609481 L56.4009029,74.8930023 C56.0541761,75.1241535 55.5918736,75.1241535 55.2451467,74.8930023 L45.8835214,69.4609481 C45.5367946,69.2297968 45.3056433,68.88307 45.3056433,68.4207675 L45.3056433,57.5566591 C45.3056433,57.0943567 45.5367946,56.7476298 45.8835214,56.5164786 L55.2451467,51.0844244 L55.2451467,51.0844244 Z"
                                fill="#539E43"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                            <g transform="translate(134.067720, 70.501129)">
                              {" "}
                              <mask id="mask-3" fill="white">
                                {" "}
                                <use xlink:href="#path-2"> </use>{" "}
                              </mask>{" "}
                              <use
                                fill="url(#linearGradient-1)"
                                xlink:href="#path-2"
                              >
                                {" "}
                              </use>{" "}
                              <g mask="url(#mask-3)">
                                {" "}
                                <path d="M51.8934537,1.84920993 L3.12054176,29.9340858 C1.27133183,30.9742664 0,32.9390519 0,35.0194131 L0,91.3047404 C0,92.6916479 0.577878104,93.9629797 1.50248307,95.0031603 L56.2853273,1.15575621 C54.8984199,0.924604966 53.2803612,1.04018059 51.8934537,1.84920993 L51.8934537,1.84920993 Z">
                                  {" "}
                                </path>{" "}
                                <path d="M56.6320542,125.052822 C57.0943567,124.937246 57.5566591,124.706095 58.0189616,124.474944 L106.791874,96.3900677 C108.641084,95.3498871 109.79684,93.3851016 109.79684,91.3047404 L109.79684,35.0194131 C109.79684,33.51693 109.103386,32.014447 108.063205,30.9742664 L56.6320542,125.052822 L56.6320542,125.052822 Z">
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M106.676298,29.9340858 L57.7878104,1.84920993 C57.3255079,1.61805869 56.7476298,1.38690745 56.2853273,1.27133183 L1.50248307,95.1187359 C1.96478555,95.696614 2.54266366,96.1589165 3.12054176,96.5056433 L52.0090293,124.590519 C53.3959368,125.399549 55.0139955,125.6307 56.5164786,125.168397 L107.94763,31.089842 C107.600903,30.6275395 107.1386,30.2808126 106.676298,29.9340858 L106.676298,29.9340858 Z"
                                  fill="url(#linearGradient-4)"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                              <g mask="url(#mask-3)">
                                {" "}
                                <g transform="translate(0.000000, -9.246050)">
                                  {" "}
                                  <path
                                    d="M109.79684,100.55079 L109.79684,44.2654628 C109.79684,42.1851016 108.525508,40.220316 106.676298,39.1801354 L57.7878104,11.0952596 C57.2099323,10.7485327 56.6320542,10.5173815 55.9386005,10.4018059 L109.450113,101.822122 C109.681264,101.475395 109.79684,101.013093 109.79684,100.55079 L109.79684,100.55079 Z"
                                    fill="none"
                                  >
                                    {" "}
                                  </path>{" "}
                                  <path
                                    d="M3.12054176,39.1801354 C1.27133183,40.220316 0,42.1851016 0,44.2654628 L0,100.55079 C0,102.631151 1.38690745,104.595937 3.12054176,105.636117 L52.0090293,133.720993 C53.1647856,134.414447 54.4361174,134.645598 55.8230248,134.414447 L3.46726862,39.0645598 L3.12054176,39.1801354 L3.12054176,39.1801354 Z"
                                    fill="none"
                                  >
                                    {" "}
                                  </path>{" "}
                                  <path
                                    fill="url(#linearGradient-5)"
                                    fill-rule="evenodd"
                                    d="M50.3909707,0.809029345 L49.6975169,1.15575621 L50.6221219,1.15575621 L50.3909707,0.809029345 Z"
                                  >
                                    {" "}
                                  </path>{" "}
                                  <path
                                    d="M106.791874,105.636117 C108.178781,104.827088 109.218962,103.440181 109.681264,101.937698 L56.0541761,10.4018059 C54.6672686,10.1706546 53.1647856,10.2862302 51.8934537,11.0952596 L3.351693,39.0645598 L55.7074492,134.530023 C56.4009029,134.414447 57.2099323,134.183296 57.903386,133.836569 L106.791874,105.636117 L106.791874,105.636117 Z"
                                    fill="url(#linearGradient-6)"
                                    fill-rule="evenodd"
                                  >
                                    {" "}
                                  </path>{" "}
                                  <path
                                    fill="url(#linearGradient-7)"
                                    fill-rule="evenodd"
                                    d="M111.299323,104.711512 L110.952596,104.133634 L110.952596,104.942664 L111.299323,104.711512 Z"
                                  >
                                    {" "}
                                  </path>{" "}
                                  <path
                                    d="M106.791874,105.636117 L58.0189616,133.720993 C57.3255079,134.06772 56.6320542,134.298871 55.8230248,134.414447 L56.7476298,136.148081 L110.83702,104.827088 L110.83702,104.133634 L109.450113,101.822122 C109.218962,103.440181 108.178781,104.827088 106.791874,105.636117 L106.791874,105.636117 Z"
                                    fill="url(#linearGradient-8)"
                                    fill-rule="evenodd"
                                  >
                                    {" "}
                                  </path>{" "}
                                  <path
                                    d="M106.791874,105.636117 L58.0189616,133.720993 C57.3255079,134.06772 56.6320542,134.298871 55.8230248,134.414447 L56.7476298,136.148081 L110.83702,104.827088 L110.83702,104.133634 L109.450113,101.822122 C109.218962,103.440181 108.178781,104.827088 106.791874,105.636117 L106.791874,105.636117 Z"
                                    fill="url(#linearGradient-9)"
                                    fill-rule="evenodd"
                                  >
                                    {" "}
                                  </path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
        <section className="  m-auto lg:py-11 pb-11 gap-5 w-11/12  items-center ">
          <section className=" mb-5 hidden lg:grid   justify-center  grid-cols-3 bg-opacity-100  m-auto  backdrop-blur-3xl fadeintop">
            <div class="h-fit col-span-3  lg:col-span-1 m-auto  w-fit  relative">
              <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
                <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center">
                  <div className="text-[2rem] font-[italic]" id="number">
                    {projectCount === null ? (
                      <p className="text-sm">Loading...</p>
                    ) : (
                      <p> {projectCount}</p>
                    )}
                  </div>
                  <div>deployed</div>
                </div>
              </div>
              <svg
                className="absolute top-0  left-0 h-[160px] w-[160px]"
                xmlns="http://w3.org/2000/svg"
                version="1.1"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#da22ff" />
                    <stop offset="100%" stop-color="#9733ee" />
                  </linearGradient>
                </defs>
                <circle
                  className="circle1"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="h-fit col-span-3 lg:col-span-1 lg:invisible m-auto  w-fit relative">
              <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
                <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center ">
                  <div className="text-[2rem] font-[italic]">95%</div>
                  <div>Satisfied</div>
                </div>
              </div>
              <svg
                className=" absolute top-0  left-0 h-[160px] w-[160px] "
                xmlns="http://w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#da22ff" />
                    <stop offset="100%" stop-color="#9733ee" />
                  </linearGradient>
                </defs>
                <circle
                  className="circle2"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="h-fit lg:col-span-1 col-span-3  m-auto w-fit relative">
              <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
                <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center ">
                  <div className="text-[2rem] font-[italic]">
                    {" "}
                    {repositoryCount === null ? (
                      <p>10+</p>
                    ) : (
                      <p> {repositoryCount}</p>
                    )}
                  </div>
                  <div>Repositries</div>
                </div>
              </div>
              <svg
                className=" absolute top-0  left-0 h-[160px] w-[160px]"
                xmlns="http://w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#da22ff" />
                    <stop offset="100%" stop-color="#9733ee" />
                  </linearGradient>
                </defs>
                <circle
                  className="circle3"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </section>
          <ol class="items-center z-10 backdrop-blur-[6rem]   p-5    sm:flex flex-wrap">
            <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0  lg:h-[13rem] sm:w-3/6 lg:w-3/12">
              <div class="flex flex-col lg:flex-row items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold ${darkMode ? "" : ""}`}>
                  Graduated from high School
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  August, 2022
                </time>
                <p
                  className={`text-base font-normal ${
                    darkMode ? "" : "text-gray-500"
                  }`}
                >
                  At this point, i faced the real world. it was the phase in my
                  life were i knew that i had to get a value the world will be
                  happy to see😤
                </p>
              </div>
            </li>
            <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0 lg:h-[13rem] sm:w-3/6 lg:w-3/12">
              <div class="flex flex-col lg:flex-row items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold ${darkMode ? "" : ""}`}>
                  Programming
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  January 2, 2023
                </time>
                <p
                  className={`text-base font-normal ${
                    darkMode ? "" : "text-gray-500"
                  }`}
                >
                  The whole dream of bring imagination to life all started the
                  day i registered for a Programming class. i knew in that eaxct
                  momment that i owe the world some coding masterclass.
                </p>
              </div>
            </li>
            <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0 lg:h-[13rem] sm:w-3/6 lg:w-3/12">
              <div class="flex flex-col lg:flex-row items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold ${darkMode ? "" : ""}`}>
                  First Internship.
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  August 3, 2023
                </time>
                <p
                  className={`text-base font-normal ${
                    darkMode ? "" : "text-gray-500"
                  }`}
                >
                  Six months after learning HTML, CSS and Javascript, i got an
                  internship as a web developer at <code>DAFE SOFTWARE</code>
                </p>
              </div>
            </li>
            <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0 lg:h-[13rem]  sm:w-3/6 lg:w-3/12">
              <div class="flex flex-col lg:flex-row items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold ${darkMode ? "" : ""}`}>
                  Nile Univeraity (JUPEB)
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  October 7, 2023
                </time>
                <p
                  className={`text-base font-normal ${
                    darkMode ? "" : "text-gray-500"
                  }`}
                >
                  I got into NIle for one year programme after which i had the
                  intention of studying Cyber security.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="projects">
          <div className=" ">
            <motion.p className="font-[K2D] m-auto font-extrabold lg:text-[7.0rem] text-[2.2rem] text-center w-fit  flex sm:w-[70vw] lg:w-fit  h-fit   tracking-[0.4rem]  bg-right-bottom bg-no-repeat pb-9  ">
              My Projects
            </motion.p>

            <ShowMoreContainer>
              {data.map((site) => (
                <motion.div
                  key={site.id}
                  variants={fadeInAnimationVariants}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "linear", duration: 0.1 }}
                  viewport={{ once: true }}
                  href={site.url}
                  whileHover={{ y: -30 }}
                  className="       lg:col-span-1 col-span-2       cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300  group bg-opacity-15 "
                >
                  <a href={site.url} className="" target="_blank">
                    <img
                      src={site.screenshot_url}
                      className="  rounded-lg skew-y-12  h-fit group "
                      alt=""
                    />
                    <div className=" md:text-center md:text-sm text-xs font-[inter]  skew-y-12   origin-bottom   relative -bottom-24 opacity-0 group-hover:opacity-100 group-hover:bottom-[-0.73rem]  delay-75 duration-700 transition-all group-hover:block font-medium  lg:invisible  group-hover:visible   rounded-lg  shadow-lg  text-bold">
                      <p className>
                        Deployed:{" "}
                        {new Date(site.created_at).toLocaleDateString()}
                      </p>
                      <p>{site.account_name}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </ShowMoreContainer>
          </div>
        </section>

        <section
          id="contact"
          className={` h-fit -[#120720]   gap-[6rem] ${
            darkMode ? "" : "bg-[image:var(--image-url)] bg-no-repeat"
          } `}
          style={{ "--image-url": `url(${contact})` }}
        >
>>>>>>> Stashed changes
          <motion.p
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            className="  flex gap-9 text-center lg:text-start flex-col justify-center font-[inter] lg:gap-14 text-[1rem] lg:text-lg lg:w-7/12  "
          >
            Meet Excel , a talented web developer with a passion for crafting
            elegant and functional digital solutions. Armed with expertise in
            HTML,CSS, JavaScript, React and more, Their keen eye for
            detail,coupled with their commitment to staying abreast of industry
            trends,ensures that every project they undertake is not only
            visually stunning but also optimized for peak performance.
            <span className=" flex justify-between  relative items-center lg:items-end">
              <a href="#contact" className=" m-auto md:m-0">
                <motion.button
                whileTap={{ scale: 0.75 }}
                type="button"
                className=" m-auto hover:bg-opacity-100 lg:h-12 z-40 flex-grow-0 hover:opacity-100 hover:ease-in  font-bold not-italic font-[inter] bg-opacity-40 lg:w-[12.4rem] sm:w-[15rem] rounded-[3.125rem] bg-[#F237F6]  backdrop-filter backdrop-blur-3xl w-[12rem] text-center p-3"
              >
                Contact Me
              </motion.button>
              </a>
              
              <picture className=" hidden md:block absolute right-0 lg:relative">
                {" "}
                <img src={dotp} alt="" />
              </picture>
            </span>
          </motion.p>
        </div>
      </section>

      <section
        className={`text-white flex justify-center  bg-no-repeat ${
          darkMode ? "bg-[#595959]" : "bg-[#120720] bg-[image:var(--image-url)]"
        }`}
        style={{ "--image-url": `url(${skillsbg})` }}
      >
        <div className="w-11/12 flex flex-col gap-12 my-[5vh]">
          <motion.p
            initial={{
              x: -200,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: false }}
            className="font-[K2D] font-extrabold lg:text-[7.0rem]   tracking-[0.4rem] text-[3.2rem]  "
          >
            My Skills
          </motion.p>
          <div
            ref={ref}
            className=" gap-12 flex flex-col lg:flex-row flex-wrap"
          >
            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
              transition={{ duration: .5, ease: "easeOut" }}
              className=" flex  font-[inter]  lg:w-2/5 justify-between font-normal"
            >
              <p>CSS</p>
              <picture className="flex justify-evenly w-9/12">
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
              transition={{ duration: .5, ease: "easeIn" }}
              className=" flex font-[inter] lg:w-2/5 justify-between font-normal"
            >
              <p className="">Bootstrap </p>
              <picture className="flex  justify-evenly w-9/12">
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
              transition={{ duration: .5, ease: "easeIn" }}
              className=" flex font-[inter] lg:w-2/5 justify-between font-normal"
            >
              <p>Javascript </p>
              <picture className="flex justify-evenly w-9/12">
                <img src={pinkdot} alt="" />
                <img src={pinkdot} alt="" />
                <img src={pinkdot} alt="" />
                <img src={pinkdot} alt="" />
                <img src={tpinkdot} alt="" />
                <img src={tpinkdot} alt="" />
                <img src={tpinkdot} alt="" />
              </picture>
            </motion.div>
            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
              transition={{ duration: .5, ease: "easeIn" }}
              className=" flex lg:w-2/5 justify-between font-[inter] font-normal"
            >
              <p className="">React</p>
              <picture className="flex justify-evenly w-9/12">
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
              transition={{ duration: .5, ease: "easeIn" }}
              className=" flex lg:w-2/5 justify-between font-[inter] font-normal"
            >
              <p>Tailwind</p>
              <picture className="flex justify-evenly w-9/12">
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
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
              transition={{ duration: .5, ease: "easeIn" }}
              className=" flex font-[inter] lg:w-2/5 justify-between font-normal"
            >
              <p className="">Node.js</p>
              <picture className="flex justify-evenly w-9/12">
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
              transition={{ duration: .5, ease: "easeIn" }}
              className="flex font-[inter] lg:w-2/5 justify-between font-normal"
            >
              <p className="">HTML</p>
              <picture className="flex  justify-evenly w-9/12">
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
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 500 }}
              transition={{ duration: .5, ease: "easeIn" }}
              className=" flex font-[inter] lg:w-2/5 justify-between font-normal"
            >
              <p className="">Figma</p>
              <picture className="flex justify-evenly w-9/12">
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
        </div>
      </section>
      <section
        className={`text-white py-11 gap-5 flex flex-col items-center ${
          darkMode ? "bg-[#595959]" : "bg-[#120720] "
        }`}
      >
        <section className="kk bg-opacity-100 w-[100vw]  backdrop-blur-3xl fadeintop">
          <div class="h-[160px] w-[160px] relative">
            <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
              <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center">
                <div className="text-[2rem] font-[italic]" id="number">
                  {projectCount === null ? (
                    <p>Loading...</p>
                  ) : (
                    <p> {projectCount}</p>
                  )}
                </div>
                <div>deployed</div>
              </div>
            </div>
            <svg
              className="absolute top-0  left-0 h-[160px] w-[160px]"
              xmlns="http://w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#da22ff" />
                  <stop offset="100%" stop-color="#9733ee" />
                </linearGradient>
              </defs>
              <circle
                className="circle1"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="h-[160px] w-[160px] relative">
            <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
              <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center ">
                <div className="text-[2rem] font-[italic]">95%</div>
                <div>Satisfied</div>
              </div>
            </div>
            <svg
              className=" absolute top-0  left-0 h-[160px] w-[160px] "
              xmlns="http://w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#da22ff" />
                  <stop offset="100%" stop-color="#9733ee" />
                </linearGradient>
              </defs>
              <circle
                className="circle2"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="h-[160px] w-[160px] relative">
            <div class="outer w-[160px] h-[160px] flex rounded-[50%] justify-center items-center p-0">
              <div class="inner grid rounded-[50%] w-[80%] h-[80%] justify-center items-center ">
                <div className="text-[2rem] font-[italic]">
                  {" "}
                  {repositoryCount === null ? (
                    <p>10+</p>
                  ) : (
                    <p> {repositoryCount}</p>
                  )}
                </div>
                <div>Repositries</div>
              </div>
            </div>
            <svg
              className=" absolute top-0  left-0 h-[160px] w-[160px]"
              xmlns="http://w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#da22ff" />
                  <stop offset="100%" stop-color="#9733ee" />
                </linearGradient>
              </defs>
              <circle
                className="circle3"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </section>
        <ol class="items-center z-10 backdrop-blur-[6rem]  w-11/12   sm:flex flex-wrap">
          <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0  lg:h-[13rem] sm:w-3/6 lg:w-3/12">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Graduated from high School
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August, 2022
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                At this point, i faced the real world. it was the phase in my
                life were i knew that i had to get a value the world will be
                happy to see😤
              </p>
            </div>
          </li>
          <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0 lg:h-[13rem] sm:w-3/6 lg:w-3/12">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Programming
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January 2, 2023
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                The whole dream of bring imagination to life all started the day
                i registered for a Programming class. i knew in that eaxct
                momment that i owe the world some coding masterclass.
              </p>
            </div>
          </li>
          <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0 lg:h-[13rem] sm:w-3/6 lg:w-3/12">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                First Internship.
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 3, 2023
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Six months after learning HTML, CSS and Javascript, i got an
                internship as a web developer at <code>DAFE SOFTWARE</code>
              </p>
            </div>
          </li>
          <li class="relative flex lg:flex-col gap-3  mb-6 sm:mb-0 lg:h-[13rem]  sm:w-3/6 lg:w-3/12">
            <div class="flex flex-col lg:flex-row items-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div class=" sm:flex lg:w-full bg-gray-200 lg:h-0.5 w-1 h-5/6 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Nile Univeraity (JUPEB)
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                October 7, 2023
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                I got into NIle for one year programme which i had the intention
                of studying Cyber security.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        id="projects"
        className={`text-white py-11 flex flex-col gap-10   items-center bg-[image:var(--image--url)] bg-no-repeat ${
          darkMode ? "bg-[#595959]" : "bg-[#120720] "
        }`}
        style={{ "--image--url": `url(${project})` }}
      >
        <div className="overflow-hidden flex justify-center ">
          <motion.p
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: false }}
            className="font-[K2D]   font-extrabold lg:text-[7.0rem] text-[3.2rem] text-center w-11/12  flex sm:w-[70vw]     tracking-[0.4rem] bg-[image:var(--image--url)] bg-right-bottom bg-no-repeat pb-9  "
            style={{ "--image--url": `url(${x})` }}
          >
            My Projects
          </motion.p>
        </div>
   
          <ShowMoreContainer className=" ">
              {data.map((site) => (
            <motion.div
              key={site.id}
              variants={fadeInAnimationVariants}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear" }}
              viewport={{ once: true }}
              href={site.url}
              whileHover={{ scale: 1.1, translateX: -2, translateY: -2 }}
              style={{ "--image-url": `url(${site.screenshot_url})` }}
              className=" w-9/12 m-auto relative    lg:w-3/12 sm:w-5/12  flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-contain  bg-no-repeat h-[15rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300  group bg-opacity-15 "
            >
              <a href={site.url} target="_blank">
                <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500 hidden  group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-70  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
                  <p>Region:{site.functions_region}</p>
                  <p>Last update:{new Date(site.updated_at).toLocaleDateString()}</p>
                  <p>Author: {site.account_name}</p>
                </div>

                <div className="flex flex-col gap-2 absolute   w-fit  md:w-4/5 lg:-right-[0] right-0 z-10  bottom-0 font-[inter]  bg-blue-900 font-medium   lg:gap-4   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
                  <p className="font-[K2D] font-bold text-[1rem]">
                    {site.name}
                  </p>
                  <p className=" font-[roboto]   font-light"> { `Deployed:`} {new Date(site.created_at).toLocaleDateString()}</p>
                </div>
              </a>
            </motion.div>
          ))}
          </ShowMoreContainer>
        
   
      </section>

      <section
        id="contact"
        className={` h-fit border-[#120720] text-white bg-[image:var(--image-url)] bg-no-repeat gap-[6rem] ${
          darkMode ? "bg-[#595959]" : "bg-[#120720]"
        }`}
        style={{ "--image-url": `url(${contact})` }}
      >
        <motion.p
          initial={{
            x: 200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: false }}
          className="font-[K2D] font-extrabold lg:text-[7.0rem] text-center text-[3.2rem]   tracking-[0.4rem]  "
        >
          Contact Me
        </motion.p>
        {showAlert && (
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "linear", duration: 0.8 }}
          className="bg-[#49212161] border border-[#49212161] text-[1.2rem] text-center rounded-lg text-white px-4 py-3  w-11/12 md:w-6/12 h-full m-auto  relative mb-4"
          role="alert"
        >
          <div className="flex relative justify-between  w-full ">
            <p className="w-8/12"></p>
            <span
              className="right-0 relative "
              onClick={() => setShowAlert(false)}
            >
<<<<<<< Updated upstream
              <img className=" w-9" src={menu} alt="" />
            </span>
          </div>
          <p>Email sent successfully!</p>
          <p>
            Hey {senderName}, your email has been sent. Excel will get back to
            you soon
=======
              <span className="flex flex-col w-10/12 lg:w-5/12 ">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name here..."
                  className="w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] focus:bg-[#49212161] after:bg-[#49212161] outline-none"
                />
              </span>
              <span className="flex flex-col w-10/12 lg:w-5/12 ">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here..."
                  className="w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none"
                />
              </span>
              <span className="flex flex-col w-10/12 lg:w-5/12  text-start">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                  className="focus:p-5 h-[15rem] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none"
                />
              </span>
              <span>
                <button
                  type="submit"
                  className={`opacity-50 hover:opacity-100 text-center p-3 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[10.4rem]  w-[10rem] rounded-[3.125rem] ${
                    darkMode ? " bg-[#120720] text-[#cdc9c3]" : "bg-[#EB03FF]"
                  }`}
                  whileTap={{ scale: 0.75 }}
                >
                  {submitted ? "Send Email" : "Send Email"}
                </button>
              </span>
            </form>
          )}
          <p className=" flex relative h-12  items-center text-center mt-11 justify-center">
            All Right Reserved by Rohan Patil || developed by {"{Excel}"}
>>>>>>> Stashed changes
          </p>
          <svg
            className=" w-1/6 md:w-2/12 sm:w-2/12  mx-auto  my-5 "
            viewBox="0 0 117 117"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title></title> <desc></desc> <defs></defs>{" "}
              <g
                fill="none"
                fill-rule="evenodd"
                id="Page-1"
                stroke="none"
                stroke-width="1"
              >
                {" "}
                <g fill-rule="nonzero" id="correct">
                  {" "}
                  <path
                    d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                    fill="#17AB13"
                    id="Shape"
                  ></path>{" "}
                  <path
                    d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                    fill="#4A4A4A"
                    id="Shape"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="text-end">Excel Chukwu</p>
        </motion.div>
        )}
        {!showAlert && (
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="flex flex-col mt-[10vh] items-center lg:gap-[2.5rem] gap-6"
          >
            <span className="flex flex-col w-10/12 lg:w-5/12 text-white">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name here..."
                className="w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] focus:bg-[#49212161] after:bg-[#49212161] outline-none"
              />
            </span>
            <span className="flex flex-col w-10/12 lg:w-5/12 text-white">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here..."
                className="w-[100%] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none"
              />
            </span>
            <span className="flex flex-col w-10/12 lg:w-5/12 text-white text-start">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here..."
                className="focus:p-5 h-[15rem] placeholder:text-[#D9D9D9D9] placeholder:text-[1rem] placeholder:font[inter] p-2 rounded-[2rem] bg-[#49212161] outline-none"
              />
            </span>
            <span>
              <button
                type="submit"
                className="opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[12.4rem] rounded-[3.125rem] bg-[#EB03FF] w-[13rem] text-center p-3"
                whileTap={{ scale: 0.75 }}
              >
                {submitted ? "Send Email" : "Send Email"}
              </button>
            </span>
          </form>
        )}
   {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear", duration: 0.8 }}
            className="bg-[#49212161] border border-[#49212161] text-[1.2rem] text-center rounded-lg text-white px-4 py-3  w-11/12 md:w-6/12 h-full m-auto  relative mb-4"
            role="alert"
          >
            <div className="flex relative justify-between  w-full ">
              <p className="w-8/12"></p>
              <span
                className="right-0 relative "
                onClick={() => setShowAlert(false)}
              >
                <img className=" w-9" src={menu} alt="" />
              </span>
            </div>
            <p>Email sent successfully!</p>
            <p>
              Hey {senderName}, your email has been sent. Excel will get back to
              you soon
            </p>
            <svg
              className=" w-1/6 md:w-2/12 sm:w-2/12  mx-auto  my-5 "
              viewBox="0 0 117 117"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title> <desc></desc> <defs></defs>{" "}
                <g
                  fill="none"
                  fill-rule="evenodd"
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                >
                  {" "}
                  <g fill-rule="nonzero" id="correct">
                    {" "}
                    <path
                      d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                      fill="#17AB13"
                      id="Shape"
                    ></path>{" "}
                    <path
                      d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                      fill="#4A4A4A"
                      id="Shape"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <p className="text-end">Excel Chukwu</p>
          </motion.div> */}
        <p className=" flex relative h-12  items-center text-center mt-11 justify-center">
          All Right Reserved by Rohan Patil || developed by {'{Excel}'}
        </p>
      </section>

    </>
  );
}

export default App;
