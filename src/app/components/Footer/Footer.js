import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGoogle,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="h-min bg-violet-950  flex flex-col justify-center items-center mt-12 pt-12">
      <div className="flex gap-1  ">
      <a href="https://www.linkedin.com/in/imranfarooqqaisrani">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-1xl text-white   border-transparent border-2 rounded-full p-3  fontawesome"
        />
        </a>
        <a href="mailto:imranf620@gmail.com">
        
        <FontAwesomeIcon
          icon={faGoogle}
          className="text-1xl text-white    border-transparent border-2 rounded-full p-3  fontawesome"
        />
        </a>
        <a href="https://wa.me/+923176565404">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-1xl text-white    border-transparent border-2 rounded-full p-3  fontawesome"
        />
        </a>
        <a href="https://github.com/Imranf620">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-1xl text-white   border-transparent border-2 rounded-full p-3  fontawesome"
        />
        </a>
      </div>
      <div className="text-white text-center mt-3 pb-10">
        @ All Right Reserved || Developed by
        <div>
          <span className="text-[#00FFFF] "> Imran Farooq</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
