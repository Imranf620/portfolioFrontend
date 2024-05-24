import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCalendarAlt,
  faLink,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { text } from "@fortawesome/fontawesome-svg-core";

const images = [
  {
    src: "/Clikkle.png",
    alt: "Clikkle",
    text: " Developed a SaaS platform offering cloud storage, hosting, e-signatures, ad services, presentation tools, and secure email.",
    link: "https://www.clikkle.com/",
  },
  {
    src: "/advocate.png",
    alt: "Advocate Iron tech",
    text: "Developed extensive databases for case searches, implemented user control systems, designed React front-end, and created backend functions for case management and client-lawyer interactions.",
    link: "https://advocateiron.tech/",
  },
  {
    src: "/image1.png",
    alt: "Image Web 2",
    text: "Developed a MERN Stack E-commerce Store having stripe payment and authentication with social accounts.",
  },
  {
    src: "/image3.png",
    alt: "Image Web 3",
    text: "Developed a business Web Application with  socket io having real time chat system and used Chatbot Api's for better experience. ",
  },
  {
    src: "/image4.png",
    alt: "Image Web 5",
    text: "Developed a Blogging Application with Next Js for better SEO and Speed Optimization.",
  },
  {
    src: "/image5.png",
    alt: "Image Web 4",
    text: "Developed a landing page for pre-launching mobile applictaion for marketing purposes.",
  },
];

const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="mt-16 h-max flex flex-col justify-center items-center mx-2 overflow-y-hidden ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <p>I love what I do. I take great pride in what I do.</p>
        <hr className="w-36 h-1 bg-slate-400" />
      </div>

      <div className="mt-12">
        <button className="bg-black text-white px-12 py-3 rounded">ALL</button>
      </div>

      <motion.div
        className="flex flex-col overflow-y-hidden items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group w-80 h-60 overflow-hidden bg-contain"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg w-full h-full object-cover transition-transform duration-300"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={image.link}
                className="text-white text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col justify-between items-center  p-10">
                  <FontAwesomeIcon icon={faLink} />
                  <h1 className="text-sm text-center">{image.text}</h1>
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="flex flex-col justify-center items-center bg-slate-100 w-full gap-8 mt-20 py-16 rounded sm:grid grid-cols-3"
      >
        <StatCard icon={faBagShopping} end={50} label="Total Projects" />
        <StatCard icon={faSmile} end={20} label="Happy Clients" />
        <StatCard icon={faCalendarAlt} end={1} label="Years of Experience" />
      </motion.div>
    </div>
  );
};

const StatCard = ({ icon, end, label }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const increment = end / 100;
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < end) {
            return prev + increment;
          } else {
            clearInterval(interval);
            return end;
          }
        });
      }, 20);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="flex flex-col justify-center items-center gap-2">
      <FontAwesomeIcon icon={icon} className="text-gray-400 text-3xl" />
      <h1 className="text-black text-3xl font-bold">{Math.ceil(count)}+</h1>
      <h1 className="text-gray-400">{label}</h1>
    </div>
  );
};

export default Portfolio;
