"use client";

import { motion } from "framer-motion";
import * as React from "react";

const skillCategories = {
  frontend: [
    { name: "React", icon: "/images/tech/react-logo.png", proficiency: 90 },
    { name: "TypeScript", icon: "/images/tech/ts-logo.png", proficiency: 85 },
    { name: "Next.js", icon: "/images/tech/nextjs-logo.png", proficiency: 85 },
    {
      name: "TailwindCSS",
      icon: "/images/tech/tailwind-css-logo.png",
      proficiency: 90,
    },
  ],
  backend: [
    { name: "Node.js", icon: "/images/tech/nodejs-logo.png", proficiency: 85 },
    { name: "Python", icon: "/images/tech/python-logo.png", proficiency: 80 },
    { name: "FastAPI", icon: "/images/tech/fastapi-logo.png", proficiency: 75 },
    { name: "Express", icon: "/images/tech/express-logo.png", proficiency: 85 },
  ],
  database: [
    {
      name: "PostgreSQL",
      icon: "/images/tech/postgresql-logo.png",
      proficiency: 80,
    },
    { name: "MongoDB", icon: "/images/tech/mongodb-logo.png", proficiency: 85 },
    { name: "Redis", icon: "/images/tech/redis-logo.png", proficiency: 75 },
  ],
  devops: [
    { name: "AWS", icon: "/images/tech/aws-logo.png", proficiency: 80 },
    { name: "Docker", icon: "/images/tech/docker-logo.png", proficiency: 85 },
    {
      name: "GitHub Actions",
      icon: "/images/tech/github-actions-logo.png",
      proficiency: 80,
    },
  ],
};

interface SkillCardProps {
  category: string;
  skills: Array<{ name: string; icon: string; proficiency: number }>;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        bg-background-light/5 backdrop-blur-sm p-3 sm:p-6 rounded-xl
        flex flex-col lg:flex-row
        gap-2 lg:gap-10 xl:gap-16
        mx-6 lg:mx-2
      "
    >
      <h3 className="text-xl font-bold mb-2 sm:mb-4 uppercase tracking-wider text-primary/80 text-center lg:text-left min-w-[120px]">
        {category}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex gap-4 items-center group"
          >
            <div className="relative w-10 h-10 sm:w-16 sm:h-16 mb-1 sm:mb-3">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-base sm:text-xl font-bold text-center text-primary/70">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section className="py-8 sm:py-24 px-2 pt-24 container mx-auto min-h-screen">
      <div className="text-center mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent mb-2 sm:mb-4"
        >
          SKILLS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground/70 max-w-7xl mx-auto text-base px-4 sm:px-0"
        >
          My technical toolkit spans across frontend, backend, database and
          cloud technologies.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCard
            key={category}
            category={category}
            skills={skills}
          />
        ))}
      </div>
    </section>
  );
}
