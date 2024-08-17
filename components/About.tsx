"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  return (
    <div
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[15px] text-4xl text-[#283618]">
        About Me
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="/images/photo.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover 
        md:w-72 md:h-72 xl:w-[500px] xl:h-[500px] mx-10"
      />

      <div className="space-y-10 px-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#bc6c25] ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Passionate and skilled full-stack developer with a Master’s degree in
          Information Technology and hands-on experience in TypeScript,
          JavaScript and Java. Proven ability to lead teams, manage projects,
          and enhance user experiences through innovative solutions. Experienced
          in designing and implementing end-to-end features, collaborating with
          stakeholders, and utilizing agile methodologies.
        </p>
      </div>
    </div>
  );
};

export default About;
