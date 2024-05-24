import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const field in formData) {
      if (formData[field].trim() === "") {
        toast.error("Please fill all the fields", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
    }

    try {
      await axios.post("https://portfoliobackend-ldpf.onrender.com/send-email", formData);
      toast.success("Email sent successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="h-min p-4">
      <ToastContainer />
      <div>
        <h1 className="text-4xl font-bold pl-4 mt-10 overflow-y-hidden">Contact Info</h1>
        <div className="flex flex-col gap-4 my-6 pl-4">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-cyan-400" />
            Address: Multan Punjab, Pakistan
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faPhone} className="text-cyan-400" />
            Phone: +923 176 565 404
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faGoogle} className="text-cyan-400" />
            Email: imranf620@gmail.com
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold pl-4 mt-10 overflow-y-hidden">Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col px-4 mt-10 gap-8 sm:grid sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name*"
              className="border border-gray-500 rounded outline-none pl-6 py-3 placeholder:text-xl"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email*"
              className="border border-gray-500 rounded outline-none pl-6 py-3 placeholder:text-xl"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject*"
              className="border border-gray-500 rounded outline-none pl-6 py-3 placeholder:text-xl"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              className="border border-gray-500 rounded outline-none pl-6 py-3 placeholder:text-xl"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              className="border border-gray-500 rounded outline-none pl-6 py-3 pb-20 placeholder:text-xl sm:col-span-2"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-10 text-center border text-black bg-white py-3 rounded border-black text-2xl font-bold transition-all duration-700 px-5 hover:bg-black hover:text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
