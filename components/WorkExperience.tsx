"use client";

import * as React from "react";
import ExperienceCard from "./ExperienceCard";

interface ExperienceProps {}

const WorkExperience: React.FunctionComponent<ExperienceProps> = (props) => {
  return (
    <div
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10 justify-evenly ma-auto items-center snap-x"
    >
      <h3 className="absolute top-20 uppercase tracking-[15px] text-4xl text-[#283618]">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory overflow-hidden">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
