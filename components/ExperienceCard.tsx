"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface Props {}

const ExperienceCard: React.FunctionComponent<Props> = (props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 p-10 flex-shrink-0
    w-[450px] md:w-[600px] xl:w-[700px] border-[#85905f] text-[#283618] border-2 bg-[#e9edc9]
    cursor-pointer hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden snap-center
    h-[70vh] overflow-y-auto"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/images/austin-logo.jpg"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-xl ">Frontend Developer & Product Owner</h4>
        <p className="font-bold text-lg">Austin Hospital</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/images/ts-logo.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/react-logo-white.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/redis-logo.png"
          />
          {/* Tech used */}
        </div>
        <p className="py-3 "> March 2024 - June 2024</p>
        <ul className="list-disc space-y-2 ml-2 text-base">
          <li>
            Led a team of six to develop a Python script-based internal website,
            utilizing Agile methodologies with Confluence and Trello for project
            management, improving project completion time.
          </li>
          <li>
            Acted as Project Owner, liaising with clients to gather product
            requirements, showcase development progress, and adjust development
            strategies, resulting in great client satisfaction.
          </li>
          <li>
            Developed a login interface and RESTful API using Redux and JWT,
            enabling secure global user authentication and improving login speed
            by 15%.
          </li>
          <li>
            Utilized TypeScript and Next.js for designing and developing page
            layouts, enhancing user interface and experience, which reduced page
            load times by 20%
          </li>
          <li>
            Implemented Redis to monitor long-running script executions,
            providing user notifications upon completion, reducing response time
            delays by 35%.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
