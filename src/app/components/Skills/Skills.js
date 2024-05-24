import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="max-h-min bg-gray-100 flex flex-col sm:grid sm:grid-cols-2 pb-14 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col justify-center items-center bg-white mt-12 pt-8 mx-3 rounded"
        whileHover={{ scale: 1.1 }}
      >
        <div>
          {" "}
          <FontAwesomeIcon
            icon={faTv}
            className=" text-gray-400 text-3xl border-[1px] border-gray-400  rounded-full p-6"
          />
        </div>
        <div className="text-gray-400">
          <h1>Full Stack Development</h1>
        </div>
        <div className="text-gray-400 font-light text-start p-8 pb-16">
          "Bringing together frontend and backend technologies, I offer
          comprehensive full-stack development services. Using Node.js,
          Express.js, and MongoDB, I create a solid foundation for your web
          application's functionality and data management needs. Meanwhile, on
          the frontend, I design intuitive user interfaces tailored to your
          project's specifications, ensuring a seamless and visually appealing
          user experience from start to finish."
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center bg-white mt-12 pt-8 mx-3 rounded"
        whileHover={{ scale: 1.1 }}
      >
        <div>
          {" "}
          <FontAwesomeIcon
            icon={faTv}
            className=" text-gray-400 text-3xl border-[1px] border-gray-400  rounded-full p-6"
          />
        </div>
        <div className="text-gray-400">
          <h1>Front End Development:</h1>
        </div>
        <div className="text-gray-400 font-light text-start p-8 pb-16">
          "I specialize in crafting engaging and responsive user interfaces
          using custom CSS, Sass, Tailwind CSS, or Bootstrap, depending on
          project requirements. With a keen eye for design and attention to
          detail, I ensure that the frontend of your web application is visually
          appealing and optimized for usability across various devices and screen
          sizes."
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center bg-white mt-12 pt-8 mx-3 rounded"
        whileHover={{ scale: 1.1 }}
      >
        <div>
          {" "}
          <FontAwesomeIcon
            icon={faTv}
            className=" text-gray-400 text-3xl border-[1px] border-gray-400  rounded-full p-6"
          />
        </div>
        <div className="text-gray-400">
          <h1>Backend Development:</h1>
        </div>
        <div className="text-gray-400 font-light text-start p-8 pb-16">
          "On the backend, I leverage the power of Node.js and Express.js to
          build robust and scalable server-side applications. With MongoDB as
          the database management system, I ensure efficient data storage and
          retrieval. Additionally, I implement authentication and authorization
          systems to safeguard your application's data and resources, providing
          peace of mind for both you and your users."
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
