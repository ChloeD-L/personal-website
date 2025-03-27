"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface SkillProps {
  name: string;
  icon: string;
  proficiency: number;
  directionLeft?: boolean;
}

const Skill: React.FunctionComponent<SkillProps> = ({
  name,
  icon,
  proficiency,
  directionLeft,
}) => {
  return (
    <div className="group relative flex flex-col items-center gap-2">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="cursor-pointer"
      >
        <img
          src={icon}
          alt={name}
          className="rounded-xl object-contain w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white top-0 left-0 h-20 w-20 rounded-xl">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-primary opacity-100">
              {proficiency}%
            </p>
          </div>
        </div>
      </motion.div>
      <p className="text-sm text-foreground/70 text-center">{name}</p>
    </div>
  );
};

export default Skill;
