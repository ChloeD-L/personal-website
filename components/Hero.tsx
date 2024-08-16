'use client';

import * as React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'

interface HeroProps {
}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  const [text, count] = useTypewriter({
    words:["Chloe ", "a Software Engineer", "a Full Stack Developer"],
    loop: true,
    deleteSpeed: 200,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
      <BackgroundCircle />
      <img className="relative rounded-full h-32 w-32 object-cover"
      src='/images/photo.png' alt='hero' width={200} height={200} />
      <div>
        <h2 className='text-sm uppercase text-[#384b23] pb-2 tracking-[5px]'>
          Software Engineer | Full Stack Developer
        </h2>
      </div>
      <h1 className="text-4xl font-bold text-center text-[#283618]">
        <span>Hi, I'm {text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>

      <div className='pt-5 flex space-x-4 z-20'>
        <Link href="#about">
          <button className='heroButton'> About</button>
        </Link>
        <Link href="#experience">
          <button className='heroButton'> Experience</button>
        </Link>
        <Link href="skills">
          <button className='heroButton'> Skills</button>
        </Link>
        <Link href="projects">
          <button className='heroButton'> Projects</button>
        </Link>
      </div>
    </div>
    
  );
};

export default Hero;
