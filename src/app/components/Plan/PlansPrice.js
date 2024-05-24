"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const PlansPrice = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  

  const buttonStyle = {
    color: "#fff",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "50px",
    cursor: "pointer",
    border: "none",

  };

  const activeButtonStyle = {
    padding: "8px 20px",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    background: "linear-gradient(90deg, #9A57EE, #F35CB9, #EE9A3D)",
    backgroundClip: "text",
    color: "transparent",
    
  };

  const activePlanBtn = {
    background: "#0009",
    borderRadius: "35px",
  };

  // Define card data for each tab
  const tabContents = {
    Yearly: [
      {
        id: 1,
        title: "Bikini Noob",
        content: "Play around with our Kinki AI.",
        price: "$19.69 USD",
        month: "/month",
        billed: "billed Annualy",
        btn: " Create Account",
        li1: " ✔  400 means/ month",
        li2: " ✔  Uploaded Images",
        li3: " ✔  2 reality modes",
        li4: " ✔  Undress anyone",
        li5: " ✔  Sculpt your dream body type",
        li6: " ✔  Generate High-qualiy images",
        li7: " ✔  Seamless face swapping",
        li8: " ✔  Industry-leading encryption for privacy",
        li9: " ✔  Intuitive interface",
      },

      {
        id: 2,
        title: "Bikini Pro",
        content: "Have more control over your dream sexy characters",
        price: "$49.69 USD",
        month: "/month",
        billed: "billed Annualy",
        btn: " Get started",
        li1: " ✔  Everything included in Bikini noob",
        li2: " ✔  1000 moans/month",
        li3: " ✔  5 reality modes",
        li4: " ✔  Advanced body sculpting features",
        li5: " ✔  Create your own AI influencers",
        li6: " ✔  Priority customer support",
        li7: " ✔  adult themes",
        li8: " ✔  Ameteur sex position templates",
      },
      {
        id: 3,
        title: "Bikini master",
        content: "Create the world of pleasure where you are the Sex Master",
        price: "$69.69 USD",
        month: "/month",
        billed: "Billed Annualy",
        btn: " Create Account",
        li1: " ✔  Everything included in Bikini Pro",
        li2: " ✔   2500 moans/month",
        li3: " ✔  10 reality modes",
        li4: " ✔  Collection of HOTEST sex position",
        li5: " ✔  Video creation (coming soon)",
        li6: " ✔  Create your sex slave",
        li7: " ✔  Personalized history",
        li8: " ✔  Worldbuilding",
        li9: " ✔  Gallery management",
      },
      // Add more card data as needed
    ],
    "6 Months": [
      {
        id: 4,
        title: "Bikini Noob",
        content: "Play around with our Kinki AI.",
        price: "$33.99 USD",
        month: "/month",
        billed: "billed every 6 month",
        btn: " Create Account",
        li1: " ✔  400 means/ month",
        li2: " ✔  Uploaded Images",
        li3: " ✔  2 reality modes",
        li4: " ✔  Undress anyone",
        li5: " ✔  Sculpt your dream body type",
        li6: " ✔  Generate High-qualiy images",
        li7: " ✔  Seamless face swapping",
        li8: " ✔  Industry-leading encryption for privacy",
        li9: " ✔  Intuitive interface",
      },

      {
        id: 5,
        title: "Bikini Pro",
        content: "Have more control over your dream sexy characters",
        price: "$53.99 USD",
        month: "/month",
        billed: "billed every 6 month",
        btn: " Get started",
        li1: " ✔  Everything included in Bikini noob",
        li2: " ✔  1000 moans/month",
        li3: " ✔  5 reality modes",
        li4: " ✔  Advanced body sculpting features",
        li5: " ✔  Create your own AI influencers",
        li6: " ✔  Priority customer support",
        li7: " ✔  adult themes",
        li8: " ✔  Ameteur sex position templates",
      },
      {
        id: 6,
        title: "Bikini master",
        content: "Create the world of pleasure where you are the Sex Master",
        price: "$73.99 USD",
        month: "/month",
        billed: "billed every 6 month",
        btn: " Create Account",
        li1: " ✔  Everything included in Bikini Pro",
        li2: " ✔   2500 moans/month",
        li3: " ✔  10 reality modes",
        li4: " ✔  Collection of HOTEST sex position",
        li5: " ✔  Video creation (coming soon)",
        li6: " ✔  Create your sex slave",
        li7: " ✔  Personalized history",
        li8: " ✔  Worldbuilding",
        li9: " ✔  Gallery management",
      },
      // Add more card data as needed
    ],
    "3 Months": [
      {
        id: 7,
        title: "Bikini Noob",
        content: "Play around with our Kinki AI.",
        price: "$39.99 USD",
        month: "/month",
        billed: "billed every 3 month",
        btn: " Create Account",
        li1: " ✔  400 means/ month",
        li2: " ✔  Uploaded Images",
        li3: " ✔  2 reality modes",
        li4: " ✔  Undress anyone",
        li5: " ✔  Sculpt your dream body type",
        li6: " ✔  Generate High-qualiy images",
        li7: " ✔  Seamless face swapping",
        li8: " ✔  Industry-leading encryption for privacy",
        li9: " ✔  Intuitive interface",
      },

      {
        id: 8,
        title: "Bikini Pro",
        content: "Have more control over your dream sexy characters",
        price: "$59.99 USD",
        month: "/month",
        billed: "billed every 3 month",
        btn: " Get started",
        li1: " ✔  Everything included in Bikini noob",
        li2: " ✔  1000 moans/month",
        li3: " ✔  5 reality modes",
        li4: " ✔  Advanced body sculpting features",
        li5: " ✔  Create your own AI influencers",
        li6: " ✔  Priority customer support",
        li7: " ✔  adult themes",
        li8: " ✔  Ameteur sex position templates",
      },
      {
        id: 9,
        title: "Bikini master",
        content: "Create the world of pleasure where you are the Sex Master",
        price: "$79.99 USD",
        month: "/month",
        billed: "billed every 3 month",
        btn: " Create Account",
        li1: " ✔  Everything included in Bikini Pro",
        li2: " ✔   2500 moans/month",
        li3: " ✔  10 reality modes",
        li4: " ✔  Collection of HOTEST sex position",
        li5: " ✔  Video creation (coming soon)",
        li6: " ✔  Create your sex slave",
        li7: " ✔  Personalized history",
        li8: " ✔  Worldbuilding",
        li9: " ✔  Gallery management",
      },
      // Add more card data as needed
    ],
  };

  return (
    <div className="container mx-auto px-0 py-4">
      <div
        className="flex items-center justify-between bg-white w-[28%] rounded-pill mx-auto py-1 px-1 rounded-full"
        style={{ backgroundColor: "#261E2B" }}
      >
        {tabs.map((tab) => (
          <div
            className="PlansBtn "
            style={tab === activeTab ? activePlanBtn : null}
          >
            <motion.button
              style={tab === activeTab ? activeButtonStyle : buttonStyle}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {tab}
            
              </motion.button>
          </div>
        ))}
      </div>

      <div className="mt-9 w-[80%] mx-auto flex justify-between relative">
        
        {tabContents[activeTab].map((card) =>
          card.id == 2 || card.id == 5 || card.id == 8 ? (
            <div
              className="middle-card relative p-0 w-[30%] "
              style={{ borderRadius: "15px" }}
            >
              <div
                key={card.id}
                className={`text-white  py-[25px] px-[20px]   ${
                  card.id === 2 || card.id === 5 || card.id === 8
                    ? "middle-border"
                    : ""
                }`}
                style={{ borderRadius: "15px" }}
              >
                {card.id == 1 || card.id == 4 || card.id == 7 ? (
                  <h3 className="text-2xl font-semibold shade-h1 w-[60%] mt-5">
                    {card.title}
                  </h3>
                ) : (
                  <h3 className="text-2xl font-semibold shade-h1 w-[60%]">
                    {card.title}
                  </h3>
                )}
                <button className="popular absolute top-[-17px] left-[35%] py-1 px-4 ">
                  <span className="text-lg font-bold">✦</span> Popular
                </button>
                <p className="text-sm" style={{ color: "#afb0c6" }}>
                  {card.content}
                </p>
                <h1 className="text-2xl text-center font-bold pt-[40px]">
                  {card.price}
                </h1>
                <h3 className="text-center py-2">{card.month}</h3>
                <h3 className="text-center " style={{ color: "#afb0c6"}}>
                  {card.billed}
                </h3>
                {card.id === 1 || card.id === 4 || card.id === 7 ? (
                  <div className="Pricing-btn my-5">
                    {" "}
                    <button
                      className={`text-white    ${
                        card.id === 1 || card.id === 4 || card.id === 7
                          ? "Pricing-btn2 "
                          : "Pricing-btn"
                      }`}
                    >
                      {card.btn}
                    </button>{" "}
                  </div>
                ) : (
                  <button className="Pricing-btn my-5">{card.btn}</button>
                )}

                <ul>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li1}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li2}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li3}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li4}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li5}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li6}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li7}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li8}
                  </li>
                  <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                    {card.li9}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div
              key={card.id}
              className={`relative text-white w-[30%] border py-[25px] px-[30px]  ${
                card.id === 2 ? "" : ""
              }`}
              style={{ borderRadius: "15px" }}
            >
              {card.id == 3 || card.id == 6 || card.id == 9 ? (
                <button className="hottest absolute top-[-17px] left-[35%]  py-1 px-4 font-bold">
                  <span className="text-lg">⚡</span> Hottest
                </button>
              ) : (
                ""
              )}

              {card.id == 1 || card.id == 4 || card.id == 7 ? (
                <h3 className="text-2xl font-semibold shade-h1 w-[60%] mt-5">
                  {card.title}
                </h3>
              ) : (
                <h3 className="text-2xl font-semibold shade-h1 w-[65%]">
                  {card.title}
                </h3>
              )}
              <p className="text-sm" style={{ color: "#afb0c6" }}>
                {card.content}
              </p>
              <h1 className="text-2xl text-center font-bold pt-[40px]">
                {card.price}
              </h1>
              <h3 className="text-center py-2">{card.month}</h3>
              <h3 className="text-center " style={{ color: "#afb0c6" }}>
                {card.billed}
              </h3>
              {card.id === 1 || card.id === 4 || card.id === 7 ? (
                <div className="Pricing-btn my-5">
                  {" "}
                  <button
                    className={`text-white    ${
                      card.id === 1 || card.id === 4 || card.id === 7
                        ? "Pricing-btn2 "
                        : "Pricing-btn"
                    }`}
                  >
                    {card.btn}
                  </button>{" "}
                </div>
              ) : (
                <button className="Pricing-btn my-5">{card.btn}</button>
              )}

              <ul>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li1}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li2}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li3}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li4}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li5}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li6}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li7}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li8}
                </li>
                <li className="py-2 text-sm" style={{ color: "#afb0c6" }}>
                  {card.li9}
                </li>
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PlansPrice;
