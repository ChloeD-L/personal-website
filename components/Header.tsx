"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { FileDown } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDownloadResume = () => {
    const resumeUrl = "/documents/Lynn_Duan_Resume.pdf";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Lin_Duan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center mb-8 transition-all duration-200 w-full ${
        isScrolled
          ? "bg-[#FFFBF2]/95 backdrop-blur-md shadow-sm border-b border-[#E8E6E1]"
          : ""
      }`}
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          network="linkedin"
          url="https://linkedin.com/in/linduan"
          fgColor="#606c38"
          bgColor="transparent"
        />

        <SocialIcon
          network="github"
          fgColor="#606c38"
          bgColor="transparent"
        />
      </motion.div>

      <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto z-20 pt-5 gap-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
        onClick={handleDownloadResume}
        className="flex flex-row items-center text-[#283618] cursor-pointer hover:text-[#606c38] transition-colors"
      >
        <FileDown className="h-6 w-6 mx-2" />
        <p className="uppercase hidden md:inline-flex text-sm">
          Download Resume
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
