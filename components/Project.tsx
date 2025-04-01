"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectProps {}

const Project: React.FunctionComponent<ProjectProps> = () => {
  const [viewMode, setViewMode] = useState<"grid" | "detail">("grid");

  const projects = [
    {
      title: "AMA Static Website",
      description: "A responsive static website built for AMA collaboration",
      tech: ["React", "Next.js", "TailwindCSS"],
      link: "https://www.accessmateau.com/",
      github: "https://github.com/username/ama-website",
      details: {
        features: [
          "Responsive design for all devices",
          "Optimized performance with Next.js",
          "Modern UI with TailwindCSS",
        ],
        implementation: "Details about implementation...",
        outcome: "Project impact and results...",
      },
      images: ["/images/projects/ama.png"],
    },
    // {
    //   title: "Android Task Management App",
    //   description: "A Java-based Android application for task management",
    //   tech: ["Java", "Android SDK", "SQLite"],
    //   github: "https://github.com/username/android-task-app",
    //   details: {
    //     features: [
    //       "Local data storage with SQLite",
    //       "Task creation and management",
    //       "Push notifications",
    //     ],
    //     implementation: "Details about implementation...",
    //     outcome: "Project impact and results...",
    //   },
    //   images: ["/images/projects/ama.png"],
    // },
    {
      title: "Echoes – Geotagged Memory Sharing App",
      description:
        "An Android app that allows users to capture, tag, and share multimedia travel memories on an interactive map.",
      tech: [
        "Java",
        "Android SDK",
        "Firebase",
        "Google Maps API",
        "Android Studio",
      ],
      link: "https://www.youtube.com/watch?v=lnzYH5CHiO8", // 替换为你的实际仓库链接
      details: {
        features: [
          "Interactive map with geotagged memories",
          "Support for multimedia content: photo, video, and audio",
          "Social interaction features: user profiles, memory sharing",
          "Firebase integration for authentication and real-time storage",
        ],
        implementation:
          "Built using Java in Android Studio. Integrated Google Maps API for geolocation features and Firebase for user data, media storage, authentication, and analytics. Designed a user-friendly interface to enable users to explore and share their travel experiences with others.",
        outcome:
          "The app redefines how users document and share travel memories, encouraging exploration, connection, and reflection. Successfully tested by various user personas including travelers, creators, and locals.",
      },
      images: ["/images/projects/echo-app.png"], // 替换为你的图片路径
    },
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold bg-gradient-to-r  from-primary/80 to-primary bg-clip-text text-transparent mb-4"
      >
        PROJECTS
      </motion.h2>

      {/* View Toggle */}
      {/* <div className="flex gap-2 mb-10 mt-20">
        <button
          onClick={() => setViewMode("grid")}
          className={`px-4 py-2 rounded-lg transition-all ${
            viewMode === "grid"
              ? "bg-primary text-background"
              : "bg-background hover:bg-primary/10"
          }`}
        >
          Grid View
        </button>
        <button
          onClick={() => setViewMode("detail")}
          className={`px-4 py-2 rounded-lg transition-all ${
            viewMode === "detail"
              ? "bg-primary text-background"
              : "bg-background hover:bg-primary/10"
          }`}
        >
          Detailed View
        </button>
      </div> */}

      {viewMode === "grid" ? (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-background-light rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative w-full h-auto rounded-lg overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={500}
                  height={450}
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
              <p className="text-primary-light mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1.5 bg-primary/10 rounded-md 
                      hover:bg-primary hover:text-background-light transition-all 
                      inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1.5 bg-primary/10 rounded-md 
                      hover:bg-primary hover:text-background-light transition-all 
                      inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Detailed View
        <div className="w-full max-w-4xl mx-auto px-4 space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-background-light rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            ></motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
