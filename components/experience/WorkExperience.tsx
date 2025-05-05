"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ExperienceProps {}

const WorkExperiences = [
  {
    title: "Full Stack Developer",
    company: "CISO Success",
    location: "Melbourne, Australia",
    period: "Nov 2024 - Present",
    companyLogo: "/images/qrisk-logo.png",
    description: `I built and integrated key features for a risk analysis platform, 
    including secure authentication, type-safe APIs, and CI/CD pipelines on AWS. Using NextAuth.js with JWT and middleware,
     I enabled role-based access control. 
     I also implemented GitHub Actions and Docker deployments, reducing manual overhead and improving development velocity.`,
    technologies: [
      { name: "TypeScript", icon: "/images/tech/ts-logo.png" },
      { name: "React", icon: "/images/tech/react-logo.png" },
      { name: "Next.js", icon: "/images/tech/nextjs-logo.png" },
      { name: "Python", icon: "/images/tech/python-logo.png" },
      { name: "FastAPI", icon: "/images/tech/fastapi-logo.png" },
      { name: "AWS", icon: "/images/tech/aws-logo.png" },
    ],
    highlights: [
      {
        title: "Authentication System",
        description:
          "Implemented secure authentication system with role-based access control",
        metrics: "Enhanced security and improved user management.",
        tech: ["NextAuth.js", "JWT"],
        image: "/images/projects/auth.png", // 脱敏后的系统架构图
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Implemented GitHub Actions-based CI/CD pipelines, improving deployment efficiency and automation.",
        metrics: "Reduced manual deployment efforts by 80%",
        tech: ["GitHub Actions", "Docker", "AWS EC2"],
        image: "/images/projects/cicd.png",
      },
      {
        title: "Risk Analysis Dashboard",
        description:
          "Built interactive dashboard for risk assessment visualization",
        metrics: "40% faster load time",
        tech: ["React", "TailwindCSS", "tRPC"],
        image: "/images/projects/dashboard-demo.png", // 脱敏后的界面
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nuvc.AI",
    location: "Melbourne, Australia",
    period: "Oct 2024 - Present",
    companyLogo: "/images/nuvc-logo-black.png",
    description: `I contributed to a responsive, AI-driven investment platform by refining 
    swipe-based UI logic and collaborating with designers and backend engineers.
     Through local reducer optimization and Agile sprint planning, 
     I improved state management and delivery efficiency across key components.`,
    technologies: [
      { name: "TypeScript", icon: "/images/tech/ts-logo.png" },
      { name: "React", icon: "/images/tech/react-logo.png" },
      { name: "Next.js", icon: "/images/tech/nextjs-logo.png" },
      { name: "tRPC", icon: "/images/tech/trpc.png" },
      { name: "Prisma", icon: "/images/tech/prisma.png" },
    ],
    highlights: [
      {
        title: "Data Management System",
        description:
          "Developed an optimized document and user session management system.",
        metrics: "Improved data retrieval speed by 30%",
        tech: ["Prisma", "tRPC", "PostgreSQL"],
        image: "/images/projects/data-management.png",
      },
      {
        title: "Mobile Responsive UI",
        description:
          "Implemented responsive design to improve accessibility across devices.",
        metrics: "Increased mobile engagement by 20%",
        tech: ["TailwindCSS", "Framer Motion"],
        image: "/images/projects/responsive-ui.png",
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Austin Hospital",
    location: "Melbourne, Australia",
    period: "Mar 2024 - Jun 2024",
    companyLogo: "/images/austin-logo.jpg",
    description: `I led development of a hospital-facing web tool for secure script execution and version tracking. 
      I gathered requirements from clients, implemented JWT-based authentication with Redux, 
      and delivered features like script history and notification systems under tight timelines.`,
    technologies: [
      { name: "TypeScript", icon: "/images/tech/typescript.png" },
      { name: "React", icon: "/images/tech/react.png" },
      { name: "Next.js", icon: "/images/tech/nextjs.png" },
      { name: "Redux", icon: "/images/tech/redux.png" },
      { name: "JWT", icon: "/images/tech/jwt.png" },
    ],
    highlights: [
      {
        title: "Internal Web App Development",
        description:
          "Led a team of six to build an internal web tool for managing and running Python scripts.",
        metrics: "Improved efficiency of running automated hospital scripts.",
        tech: ["React", "Next.js", "Redux", "JWT"],
        image: "/images/projects/hospital-web-app.png",
      },
      {
        title: "Secure Authentication",
        description:
          "Implemented role-based authentication and access control using JWT and Redux.",
        metrics: "Enhanced security and user access control.",
        tech: ["Redux", "JWT", "NextAuth.js"],
        image: "/images/projects/hospital-auth.png",
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "EverYoung AI",
    location: "Sydney, Australia",
    period: "Feb 2024 - Jun 2024",
    companyLogo: "/images/everyoung-logo.png",
    description: `At EverYoung AI, I worked on integrating OpenAI’s function calling with Airtable to enhance scheduling and task reminders in a backend system. I developed automation features using TypeScript and RESTful APIs, reducing manual work and improving completion rates. Additionally, I collaborated with product and design teams to improve user interaction within a React Native app, while actively participating in Agile sprints to align with team goals and ensure on-time delivery.

`,
    technologies: [
      { name: "TypeScript", icon: "/images/tech/typescript.png" },
      { name: "OpenAI API", icon: "/images/tech/openai.png" },
      { name: "AWS", icon: "/images/tech/aws.png" },
      { name: "Airtable", icon: "/images/tech/airtable.png" },
    ],
    highlights: [
      {
        title: "OpenAI API Integration",
        description:
          "Developed backend function calls using OpenAI API to enhance AI-powered reminders.",
        metrics: "Increased task completion rates.",
        tech: ["OpenAI API", "TypeScript", "Airtable"],
        image: "/images/projects/openai-reminder.png",
      },
      {
        title: "Automated Scheduling System",
        description:
          "Designed an AI-driven task scheduling system using OpenAI and AWS Lambda.",
        metrics: "Reduced manual scheduling effort.",
        tech: ["AWS Lambda", "OpenAI API"],
        image: "/images/projects/ai-scheduler.png",
      },
    ],
  },
];

const WorkExperience: React.FunctionComponent<ExperienceProps> = () => {
  return (
    <section className="py-20 flex flex-col justify-start min-h-screen pt-32 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center "
      >
        WORK EXPERIENCE
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 to-primary/20" />

        {WorkExperiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-8 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 translate-x-[22px] translate-y-[32px]">
              <div className="w-[14px] h-[14px] rounded-full bg-primary border-4 border-background relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              </div>
            </div>

            <div className="pl-4 sm:pl-10 md:pl-16">
              {/* Company Info */}
              <div className="flex items-center gap-4 mb-2 lg:mb-6 ml-12">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm flex items-center justify-center p-2 border border-primary/10 shadow-lg">
                  <img
                    src={experience.companyLogo}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-foreground/70 flex items-center gap-2 font-medium text-sm md:text-base">
                    {experience.company} | {experience.location}
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">
                    {experience.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/70 mb-4 lg:px-16 md:px-10 md:pl-16 pl-12 pr-6">
                {experience.description}
              </p>

              {/* Experience Card */}
              <ExperienceCard highlights={experience.highlights} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
