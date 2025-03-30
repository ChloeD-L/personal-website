"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";

interface Skill {
  name: string;
  logo: string;
  color: string;
  category: "frontend" | "backend" | "tools";
  level: number;
}

const SkillCard: React.FC<{
  skill: {
    name: string;
    logo: string;
    color: string;
    level: number;
  };
  index: number;
  total: number;
}> = ({ skill, index, total }) => {
  const [isHovered, setIsHovered] = useState(false);

  const angle = (index / total) * Math.PI * 2;
  const radius = 150;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      initial={{ scale: 0 }}
      animate={{
        x: x + radius,
        y: y + radius,
        scale: 1,
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: index * 0.1,
      }}
    >
      <div
        className={`p-4 rounded-lg backdrop-blur-sm ${
          isHovered
            ? "bg-primary-light text-background-light"
            : "bg-background-light text-primary"
        }
          shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-w-[90px]
        `}
      >
        <div className="w-10 h-10 relative mb-2">
          <Image
            src={skill.logo}
            alt={skill.name}
            fill
            className="object-contain filter drop-shadow-sm"
            sizes={skill.name === "Node.js" ? "60px" : "40px"}
            priority
          />
        </div>
        <span className="text-sm font-medium whitespace-nowrap">
          {skill.name}
        </span>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-2 flex items-center gap-2"
          >
            <div className="w-16 h-1.5 bg-background/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-background"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-xs whitespace-nowrap">{skill.level}%</div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text] = useTypewriter({
    words: [
      "Lynn",
      "<FullStackDeveloper />",
      "{ code: 'with passion' }",
      "while(learning) { grow() }",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const skills: Skill[] = [
    {
      name: "React",
      logo: "/images/react-logo2.png",
      color: "#61DAFB",
      category: "frontend",
      level: 90,
    },
    {
      name: "TypeScript",
      logo: "/images/ts-logo.png",
      color: "#3178C6",
      category: "frontend",
      level: 85,
    },
    {
      name: "Node.js",
      logo: "/images/nodejs-logo.png",
      color: "#339933",
      category: "backend",
      level: 80,
    },
    {
      name: "AWS",
      logo: "/images/aws-logo.png",
      color: "#FF9900",
      category: "tools",
      level: 75,
    },
  ];

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
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 动态背景 */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `
            radial-gradient(
              600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(188,108,37,0.15),
              transparent 40%
            )
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 w-full z-10">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* 照片和名字 */}
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/photo.png" // 确保更新为您的照片路径
                    alt="Lynn"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* 装饰性圆环 */}
                <motion.div
                  className="absolute -inset-2 border-2 border-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <h1 className="text-5xl font-bold text-primary">
                <span>{text}</span>
                <Cursor cursorColor="#bc6c25" />
              </h1>
            </div>

            <p className="text-lg text-primary-light">
              Crafting exceptional digital experiences with modern web
              technologies
            </p>

            <div className="flex gap-4">
              <Link href="#projects">
                <motion.button
                  className="px-6 py-3 bg-primary text-background-light rounded-full
                    hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link href="#contact">
                <motion.button
                  className="px-6 py-3 border-2 border-primary text-primary rounded-full
                    hover:bg-primary hover:text-background-light transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* 右侧：技能展示 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[400px] w-[400px] mx-auto"
          >
            {/* 连接线 */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ transform: "rotate(30deg)" }}
              viewBox="0 0 400 400"
            >
              {skills.map((_, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const x1 = Math.cos(angle) * 150 + 200;
                const y1 = Math.sin(angle) * 150 + 200;
                return (
                  <motion.line
                    key={index}
                    x1={200}
                    y1={200}
                    x2={x1}
                    y2={y1}
                    stroke="#283618"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                );
              })}
            </svg>

            {/* 技能卡片 */}
            <div className="relative w-full h-full">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  total={skills.length}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
