"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Code,
  Globe,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import GlobeGlobe from "./aboutComponents/GlobeGlobe";

interface FloatingIcon {
  id: number;
  icon: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
}

const About = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  const techIcons = [
    "/images/tech/react-logo.png",
    "/images/tech/ts-logo.png",
    "/images/tech/nextjs-logo.png",
    "/images/tech/nodejs-logo.png",
    "/images/tech/python-logo.png",
    "/images/tech/aws-logo.png",
    "/images/tech/docker-logo.png",
    "/images/tech/mongodb-logo.png",
    "/images/tech/postgresql-logo.png",
  ];

  useEffect(() => {
    const newIcons = techIcons.map((icon, index) => ({
      id: index,
      icon,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 20 + 20,
      speed: Math.random() * 20 + 15,
      rotation: Math.random() * 15 - 7.5,
    }));

    setIcons(newIcons);
  }, []);

  return (
    <div className="relative min-h-screen px-4 py-16 pt-28 overflow-hidden">
      <div className="container mx-auto z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent text-center mb-8 sm:mb-16">
          ABOUT ME
        </h2>
        <div className="flex flex-col sm:h-[calc(100vh-128px-96px)] sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:grid-rows-4 overflow-hidden">
          {/* 1. Tech Enthusiast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/10 overflow-hidden p-6 sm:col-span-2 lg:col-span-2 sm:row-span-2 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.2)] transition-all duration-300"
          >
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  Tech Enthusiast
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Passionate about building scalable and maintainable systems, I
                thrive on solving technical challenges and optimizing system
                performance. With experience across front-end, back-end, and
                DevOps, I bridge the gap between business requirements and
                technical implementation.
              </p>
              <p className="text-foreground/60 mt-4">
                Always eager to explore new technologies, I am committed to
                delivering high-quality, efficient solutions.
              </p>
            </div>
          </motion.div>

          {/* 2. Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border p-6 col-span-1 sm:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare />
              </div>
              <h3 className="text-lg font-semibold">
                Let&apos;s work together
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-2">
              <p className="text-foreground/70">on your next project</p>
              <button className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 transition-colors px-4 py-2 rounded-lg text-primary">
                <Mail className="w-4 h-4" />
                <span className="text-sm">lynn.duan.dev@gmail.com</span>
              </button>
            </div>
          </motion.div>

          <div className="flex gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:col-span-2 lg:col-span-2 sm:row-span-1">
            {/* 4. Location Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-primary/10 p-6 transition-all duration-300 col-span-1 sm:col-span-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin />
                </div>
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <div>
                <p className="text-foreground/70 text-lg font-medium">
                  Melbourne, Australia
                </p>
                <p className="text-foreground/50 text-sm mt-2">
                  Available for remote work
                </p>
              </div>
              {/* <div className="block sm:hidden">
                <GlobeGlobe size={100} />
              </div>
              <div className="hidden sm:block">
                <GlobeGlobe size={200} />
              </div> */}
            </motion.div>

            {/* 5. Time Zone Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 p-6 col-span-1 row-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Clock />
                </div>
                <h3 className="text-lg font-semibold">Time Zone</h3>
              </div>
              <div>
                <p className="text-foreground/70 text-lg font-medium">
                  I&apos;m very flexible with
                </p>
                <p className="text-primary font-bold">
                  time zone communications
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. Tech Stack Icon Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 p-6 col-span-1 row-span-2"
          >
            <div className="grid grid-cols-3 gap-4 place-items-center h-full">
              {techIcons.slice(0, 9).map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10"
                >
                  <img
                    src={icon}
                    alt="Tech icon"
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 6. Collaboration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 p-6 col-span-1 sm:col-span-3 row-span-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users />
              </div>
              <h3 className="text-lg font-semibold">Collaboration</h3>
            </div>
            <div>
              <p className="text-foreground/90 text-lg font-medium mb-4">
                I prioritize client collaboration, fostering open communication
              </p>
              <div className="flex -space-x-4 mt-2">
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-background overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-background overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-background overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-500"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-background overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. World Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 col-span-3 row-span-1 p-0 overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/images/world-map-dots.png')] bg-cover bg-center opacity-30"></div>
              <div className="absolute top-0 left-0 p-6 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 backdrop-blur-md flex items-center justify-center text-primary">
                    <Globe />
                  </div>
                  <h3 className="text-lg font-semibold">Remote</h3>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <h4 className="text-2xl font-bold">Available Worldwide</h4>
                <p className="text-foreground/70">
                  Experienced in remote collaboration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
