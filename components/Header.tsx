'use client';

import { motion } from 'framer-motion'
import * as React from 'react';
import { SocialIcon } from 'react-social-icons'

interface HeaderProps {
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    // >
    //   <h1>Hello, World!</h1>
    // </motion.div>
    <header className="sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
            initial={{
                x:-500,
                opacity: 0,
                scale: 1,
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1,
            }}  
            transition={{
                delay: 0.5,
                duration: 1,
            }}
         className="flex flex-row items-center">
            <SocialIcon 
            network='linkedin'
            url="https://linkedin.com/in/linduan"
            fgColor='#606c38'
            bgColor='transparent' />

            <SocialIcon 
            network='github'
            fgColor='#606c38'
            bgColor='transparent'/>

        </motion.div>

        <motion.div
            initial={{
                x:500,
                opacity: 0,
                scale: 1,
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1,
            }}  
            transition={{
                delay: 0.5,
                duration: 1.5,
            }} 
        className="flex flex-row items-center text-[#283618] cursor-pointer">
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#606c38"
            bgColor="transparent"
            />

            <p className='uppercase hidden md:inline-flex text-sm text-[#283618]'>
                Get in touch
            </p>

        </motion.div>
        
    </header>  
    );
};

export default Header;

