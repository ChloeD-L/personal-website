import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const ProjectDetailsModal: React.FC<{
  highlight: {
    title: string;
    description: string;
    metrics: string;
    tech: string[];
    image?: string;
  };
  onClose: () => void;
}> = ({ highlight, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background-light/95 backdrop-blur-sm rounded-xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          {/* Company and Role Section */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-2xl font-bold mb-2 text-primary">
              {highlight.title}
            </h3>
            <p className="text-xl text-foreground/80 font-medium">
              {highlight.description}
            </p>
          </div>

          {/* Project Summary */}
          <div className="space-y-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-lg font-semibold">{highlight.title}</h4>
              <p className="text-foreground/70">{highlight.description}</p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit"
              >
                <span className="font-medium">
                  {isExpanded ? "Hide Details" : "View Details"}
                </span>
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Expandable Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-4">
                    {/* Description Section */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="text-lg font-semibold mb-3">
                        Description
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {highlight.description}
                      </p>
                    </motion.div>

                    {/* Tech Stack Section */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3"
                    >
                      <h4 className="text-lg font-semibold">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {highlight.tech.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Gallery Section */}
                    <motion.section
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold mb-3">Gallery</h4>
                      <div className="grid grid-cols-1 gap-4 w-full">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          // onClick={(e) => {
                          //   e.stopPropagation();
                          //   if (highlight.image) {
                          //     window.open(highlight.image, "_blank");
                          //   }
                          // }}
                          className="aspect-video bg-background/50 rounded-lg flex items-center justify-center overflow-hidden group cursor-zoom-in relative shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Image
                            src={highlight.image!}
                            alt={highlight.title}
                            width={1920}
                            height={1080}
                            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                            quality={95}
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                            <span className="text-sm font-medium">
                              Click to zoom
                            </span>
                          </div>
                        </motion.button>
                      </div>
                    </motion.section>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
