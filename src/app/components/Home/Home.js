"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import About from "../About/About";
import ImageComp from "../ImageComp/ImageComp";
import Skills from "../Skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();

      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" h-[100vh] relative top-0 overflow-hidden " id="home">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="image  w-[100vw] h-[100vh] absolute"
        ></motion.div>
        <div className=" blackbg w-[100vw] h-[100vh] absolute "> </div>
        <div
          className={`w-[100vw] flex justify-between items-center z-[999] py-4 px-8 fixed transition-all duration-300 ${
            scrolled ? "bg-white shadow" : "bg-transparent"
          } ${isOpen == true ? "navopen" : ""}`}
        >
          <Link href="#home">
            <div
              className={`text-black  ${
                scrolled ? "text-black" : "bg-transparent"
              } ${isOpen == true ? "portopen" : ""}`}
            >
              <img src="./android-chrome-192x192.png" className="rounded-full" width={30} height={30} alt="" />
            </div>
          </Link>
          <div
            className={` hidden  lg:flex gap-12 lg:text-sm font-semibold   ${
              scrolled ? "text-black" : "bg-transparent"
            } ${isOpen == true ? "verticalnav" : ""}`}
          >
            <Link href="#home" className={`home `}>
              {" "}
              HOME{" "}
            </Link>
            <Link href="#about"> ABOUT </Link>
            <Link href="#skills"> SERVICES </Link>
            <Link href="#portfolio"> PORTFLIO </Link>
            <Link href="#contact"> CONTACT </Link>
          </div>
          <div
            className={`flex  items-center gap-4  ${
              isOpen == true ? "rightopen" : ""
            }`}
          >
            <Link href="#contact">
              <button
                className={`text-sm bg-transparent py-3 font-semibold px-7 border-black border-[1px] rounded ${
                  isOpen == true ? "btnopen" : ""
                }  `}
              >
                Contact Me
              </button>
            </Link>
            {!scrolled && (
              <div className={`hamburger-menu  `} onClick={toggleMenu}>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open "
                      : "hamburger-menu__bar "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open "
                      : "hamburger-menu__bar "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open "
                      : "hamburger-menu__bar "
                  }
                ></div>
              </div>
            )}
            {scrolled && (
              <div className={`hamburger-menu  `} onClick={toggleMenu}>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open black-ham  "
                      : "hamburger-menu__bar black-ham  "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open black-ham  "
                      : "hamburger-menu__bar black-ham  "
                  }
                ></div>
                <div
                  className={
                    isOpen
                      ? "hamburger-menu__bar open black-ham  "
                      : "hamburger-menu__bar black-ham  "
                  }
                ></div>
              </div>
            )}
          </div>
        </div>

        <motion.div
          animate={{ y: [20, -20] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-white flex  items-center justify-center flex-col gap-3 mt-[30vh] overflow-hidden  "
        >
          <motion.h5
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-2xl lg:text-3xl font-bold"
          >
            Hello
          </motion.h5>
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-bold overflow-hidden lg:text-6xl "
          >
            I am <span className="text-[#00FFFF] ">Imran Farooq</span>.
          </motion.h1>
          <motion.h5
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-xl lg:text-2xl lg:font-semibold overflow-hidden"
          >
            MERN STACK DEVELOPER
          </motion.h5>

          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex gap-1 mt-2 h-min overflow-hidden "
          >
            <a href="https://www.linkedin.com/in/imranfarooqqaisrani">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-1xl   border-transparent border-2 rounded-full p-3  fontawesome"
              />
            </a>
            <a href="mailto:imranf620@gmail.com">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-1xl   border-transparent border-2 rounded-full p-3  fontawesome"
              />
            </a>
            <a href="https://wa.me/+923176565404">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-1xl   border-transparent border-2 rounded-full p-3  fontawesome"
              />
            </a>
            <a href="https://github.com/Imranf620">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-1xl   border-transparent border-2 rounded-full p-3  fontawesome"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="imagecom">
        <ImageComp />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
