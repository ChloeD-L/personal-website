"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Calendar,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="py-28  h-screen "
      style={{
        background: `
        radial-gradient(
          600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(188,108,37,0.15),
          transparent 40%
        )
      `,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent text-center mb-16">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 p-6"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Email</h3>
              <p className="text-foreground/70">
                Ready to discuss opportunities
              </p>
              <a
                href="mailto:lynn.duan.dev@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                lynn.duan.dev@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Schedule Meeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 p-6"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Schedule a Call</h3>
              <p className="text-foreground/70">
                Let&apos;s discuss your project
              </p>
              <button className="px-4 py-2 bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg text-primary">
                Book a Meeting
              </button>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-light/10 backdrop-blur-md rounded-2xl border border-primary/10 p-6"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Social Links</h3>
              <p className="text-foreground/70">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 transition-colors rounded-xl cursor-pointer">
            <Download className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Download Resume</span>
          </div>
        </motion.div>

        {/* Quick Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-foreground/70">
            I&apos;m currently open to full-time software engineering positions
            and interesting project collaborations. Let&apos;s create something
            amazing together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
