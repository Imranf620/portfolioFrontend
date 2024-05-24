import React from 'react';
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';

const Page = () => {
  return (
    <div>
      <Head>
      <link rel="icon" href="/favicon.ico" />

      </Head>
      <ToastContainer /> 
      <Home />
    </div>
  );
}

export default Page;
