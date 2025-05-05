"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";

interface ExperienceCardProps {
  highlights: Array<{
    title: string;
    description: string;
    metrics: string;
    tech: string[];
    image?: string;
  }>;
}

const ExperienceCard: React.FunctionComponent<ExperienceCardProps> = ({
  highlights,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHighlight, setSelectedHighlight] = useState<number | null>(
    null
  );
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="lg:px-16 md:px-10 md:pl-16 pl-12 pr-8">
      <motion.button
        whileHover={{ x: 5 }}
        className="flex items-center gap-2 md:px-4 px-2 py-2 pl-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm font-medium">
          {isExpanded ? "Hide details" : "View details"}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4 py-4 rounded-xl bg-background "
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className=" md:px-6 px-4 hover:shadow-lg transition-all flex justify-between "
              >
                <div className="flex md:gap-2 items-center w-full">
                  {/* Left: Image */}
                  {/* <div
                    className="relative w-auto h-[200px] aspect-video rounded-lg overflow-hidden"
                    onClick={() => {
                      setSelectedHighlight(index);
                      setShowModal(true);
                    }}
                  >
                    <Image
                      src={highlight.image!}
                      alt={highlight.title}
                      fill
                    />
                  </div> */}

                  {/* Right: Content */}
                  <div className="flex flex-col flex-1 h-full justify-center py-2 md:py-2 pt-2 pl-4 ">
                    <div>
                      <h4 className="md:text-xl text-xl font-bold mb-2 text-primary">
                        {highlight.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed text-base md:mb-3 mb-1">
                        <span className="text-primary">
                          {/* <Dot className="w-4 h-4 inline-block" /> */}
                          <span className="font-bold">Description:</span>{" "}
                        </span>
                        {highlight.description}
                        <br />
                        <span className="text-primary">
                          {/* <Dot className="w-4 h-4 inline-block" /> */}
                        </span>
                        <span className="font-bold">Metrics:</span>{" "}
                        {highlight.metrics}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    {/* <div className="flex flex-wrap gap-2">
                      {highlight.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {showModal && selectedHighlight !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-background-light rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-primary/100"
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">
                  {highlights[selectedHighlight].title}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-background rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Large Image */}
                <div className="aspect-video relative w-full h-auto rounded-lg overflow-hidden">
                  <Image
                    src={highlights[selectedHighlight].image!}
                    alt={highlights[selectedHighlight].title}
                    fill
                    // className="object-cover"
                    quality={95}
                  />
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {highlights[selectedHighlight].description}
                  </p>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Key Achievements
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {highlights[selectedHighlight].metrics}
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {highlights[selectedHighlight].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceCard;
