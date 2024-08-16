'use Client';

import { motion } from 'framer-motion'
import * as React from 'react';

interface Props {
}

const BackgroundCircle: React.FunctionComponent<Props> = (props) => {
  return (
    <motion.div 
    intial={{opacity: 0}}
    animate={{
      scale: [1, 2, 2, 1],
      opacity: [0.1, 0.2, 0.6, 0.1, 0.3]
    }}
    transition={{
      
      duration: 2.5,
      // ease: 'easeInOut',
    }}


    className='relative flex justify-center items-center'>
      <div className='absolute border border-[#9baa8b] rounded-full h-[200px] w-[200px] mt-52 animate-ping-slow ' />
      <div className='absolute border border-[#9baa8b] rounded-full h-[300px] w-[300px] mt-52 animate-ping-slow' />
      <div className='absolute border border-[#9baa8b] rounded-full h-[500px] w-[500px] mt-52 animate-ping-slow ' />
      <div className='absolute border border-[#9baa8b] rounded-full h-[650px] w-[650px] mt-52 animate-pulse-slow' />



    </motion.div>

  );
};

export default BackgroundCircle;
