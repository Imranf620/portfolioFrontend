import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && inView) {
      controls.start("visible");
    }
  }, [controls, hasMounted, inView]);

  return (
    <motion.div
      ref={ref}
      className="h-max mt-14 flex overflow-y-hidden flex-col gap-8 p-3"
      initial="hidden"
      animate={controls}
      style={{ overflow: "hidden" }} // Prevent scrollbar during animation
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0,  },
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex flex-col gap-2 overflow-y-hidden"
        style={{ overflow: "hidden" }}
      >
        <motion.h1
          className="text-4xl font-bold h-11 text-[#040C2C] overflow-y-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="pr-40"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00FFFF] font-semibold">
            Full Stack Developer{" "}
          </span>
          <br />
          Font-End & Back-End
        </motion.p>
      </div>
      <motion.div
        className="overflow-y-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="overflow-y-hidden">
          I am a passionate MERN stack developer proficient in both frontend and
          backend development. With expertise in MongoDB, Express.js, React.js,
          and Node.js, I specialize in crafting robust and scalable web
          applications. My approach combines creativity with technical
          excellence to deliver seamless user experiences and efficient backend
          solutions. As a dedicated learner, I constantly strive to stay updated
          with the latest technologies and industry trends to push the
          boundaries of innovation. Let's collaborate to build the next
          generation of web experiences together.
        </p>
      </motion.div>
      <div className="flex flex-col justify-center overflow-y-hidden items-center gap-3 sm:flex-row sm:justify-start">
        <a href="#contact" className="overflow-y-hidden">
          <motion.button
            className=" text-center text-nowrap overflow-y-hidden text-white bg-black px-[30vw] py-3 rounded border-black border-[1px] text-2xl font-bold transition-all ease-in-out duration-700 hover:bg-white hover:text-black sm:px-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </a>
        <a href="./CV.pdf" className="overflow-y-hidden">
          <motion.button
            className="text-center overflow-y-hidden border-[1px] text-nowrap text-black bg-white px-[20vw] py-3 rounded border-black text-2xl font-bold transition-all ease-in-out duration-700 hover:bg-black hover:text-white sm:px-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default About;
