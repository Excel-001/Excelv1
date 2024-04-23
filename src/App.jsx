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
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";

function App() {
  const [projectCount, setProjectCount] = useState(null);

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
      const token =
        "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"; // Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your actual token
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
            className=" shadow-inset    top-0 z-10  w-full rounded-[3.125rem] items-center  flex text-center justify-between flex-row p-2"
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
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      type="button"
                      className="opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[10.4rem]  w-[10rem] rounded-[3.125rem] bg-[#EB03FF] text-center p-3"
                    >
                      Contact Me
                    </motion.button>
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
                  darkMode ? "light-mode" : "dark-mode text-white"
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
              <img src={bigglow} className="" alt="" />
            </div>
            <div className="lg:h-[70vh] absolute lg:relative bottom-0  flex lg:flex-col  gap-16  lg:w-fit lg:gap-6">
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
              <motion.button
                whileTap={{ scale: 0.75 }}
                type="button"
                className=" hover:bg-opacity-100 lg:h-12 z-10 flex-grow-0 hover:opacity-100 hover:ease-in  font-bold not-italic font-[inter] bg-opacity-40 lg:w-[12.4rem] sm:w-[15rem] rounded-[3.125rem] bg-[#F237F6]  backdrop-filter backdrop-blur-3xl w-6/12 text-center p-3"
              >
                Contact Me
              </motion.button>
              <picture className=" absolute right-0 lg:relative">
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
              transition={{ duration: 1, ease: "easeOut" }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
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
              transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
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
              transition={{ duration: 1, delay: 2 }}
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
      <div
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
                    <p>Loading...</p>
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
                I got into NIle for one year programme which i had the intertion
                of studying Cbyer security.
              </p>
            </div>
          </li>
        </ol>
      </div>

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
        <div className=" gap-10 w-11/12 flex flex-wrap justify-around ">
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
              className=" w-3/4 lg:w-3/12 sm:w-5/12  flex-wrap backdrop-blur-[123px] bg-[image:var(--image-url)] bg-contain  bg-no-repeat h-[15rem]  shadow-lg rounded-[16px] cursor-pointer   hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group bg-opacity-15 "
            >
              <a href={site.url} target="_blank">
                <div className="absolute font-[inter] bottom-0  font-medium w-[100%] h-[100%] backdrop-blur-[3rem]   -rotate-0   transition-all ease-in-out duration-500 hidden  group-hover:block bg-[#000] backdrop-opacity-15 bg-opacity-70  px-5 py-5 lg:hidden  rounded-lg text-sm shadow-lg text-white text-bold">
                  <p>Region:{site.functions_region}</p>
                  <p>Last update:{site.updated_at}</p>
                  <p>Author: {site.account_name}</p>
                </div>

                <div className="flex flex-col gap-2 lg:-right-[3rem] right-0 z-10 lg:bottom-[10%] bottom-0 font-[inter] absolute bg-blue-900 font-medium  w-fit lg:gap-4   -rotate-0  lg:hidden transition-all ease-in-out duration-500  lg:group-hover:block   p-1  rounded-lg text-sm shadow-lg text-white text-bold">
                  <p className="font-[K2D] font-bold text-[1rem]">
                    {site.name}
                  </p>
                  <p className=" font-[roboto] font-light">{site.created_at}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
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
