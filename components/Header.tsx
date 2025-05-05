"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { FileDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header
        className={`sticky top-0 flex items-center p-5 justify-between max-w-7xl mx-auto z-20 mb-8 transition-all duration-200 w-full ${
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
          className="flex flex-row items-center gap-4"
        >
          <SocialIcon
            network="linkedin"
            url="https://linkedin.com/in/linduan"
            fgColor="#606c38"
            bgColor="transparent"
            className="w-8 h-8"
          />

          <SocialIcon
            network="github"
            fgColor="#606c38"
            bgColor="transparent"
            className="w-8 h-8"
          />
        </motion.div>

        <nav className="hidden md:block">
          <div className="flex flex-nowrap items-center justify-between mx-auto z-20 gap-2 pt-2">
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

        <div className="flex items-center gap-4">
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
            className="hidden md:flex flex-row items-center text-[#283618] cursor-pointer hover:text-[#606c38] transition-colors"
          >
            <FileDown className="h-6 w-6" />
            <p className="uppercase text-sm ml-2">Download Resume</p>
          </motion.div>

          <button
            onClick={handleMenuClick}
            className="md:hidden text-[#283618] hover:text-[#606c38] transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#FFFBF2] flex flex-col items-center justify-start md:hidden z-50 w-full p-6 pt-10"
          >
            <div className="flex flex-col items-center gap-0 w-full">
              <div className="absolute right-8 top-2 ">
                <button
                  onClick={handleMenuClick}
                  className="text-xl font-medium text-[#283618] hover:text-[#606c38] transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <Link
                href="#about"
                onClick={handleNavClick}
                className="w-full"
              >
                <button className="text-xl font-medium text-[#283618] hover:text-[#606c38] transition-colors border-b border-[#E8E6E1]/50 p-4 w-full text-center">
                  About
                </button>
              </Link>
              <Link
                href="#experience"
                onClick={handleNavClick}
                className="w-full"
              >
                <button className="text-xl font-medium text-[#283618] hover:text-[#606c38] transition-colors border-b border-[#E8E6E1]/50 p-4 w-full text-center">
                  Experience
                </button>
              </Link>
              <Link
                href="#skills"
                onClick={handleNavClick}
                className="w-full"
              >
                <button className="text-xl font-medium text-[#283618] hover:text-[#606c38] transition-colors border-b border-[#E8E6E1]/50 p-4 w-full text-center">
                  Skills
                </button>
              </Link>
              <Link
                href="#projects"
                onClick={handleNavClick}
                className="w-full"
              >
                <button className="text-xl font-medium text-[#283618] hover:text-[#606c38] transition-colors border-b border-[#E8E6E1]/50 p-4 w-full text-center">
                  Projects
                </button>
              </Link>
              <button
                onClick={() => {
                  handleDownloadResume();
                  handleNavClick();
                }}
                className="flex items-center gap-2 text-xl font-medium text-[#283618] hover:text-[#606c38] transition-colors border-b border-[#E8E6E1]/50 p-4 w-full justify-center"
              >
                <FileDown className="h-6 w-6" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
