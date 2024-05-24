import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageComp = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div 
      className='h-min flex flex-col justify-center items-center'
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* <div className='w-[20vw]'>
        <motion.img 
          src="./myimg.png" 
          alt="" 
          className='object-contain w-full pb-11'
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div> */}
      <div className='flex flex-col justify-center items-center gap-2 overflow-y-hidden'>
        <motion.h1 
          className='text-3xl font-bold'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          What I'm Doing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I love what I do. I take great pride in what I do.
        </motion.p>
        <motion.hr 
          className='w-36 h-1 bg-slate-400'
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default ImageComp;
