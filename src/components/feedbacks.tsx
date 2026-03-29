import { useState } from "react";
import { motion } from "framer-motion";

import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  testimonial: readonly string[];
  name: string;
  subtitle: string;
  designation: string;
  company: string;
  image: any;
  tags?: readonly string[];
};

// Volunteer Card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  subtitle,
  designation,
  company,
  image,
  tags,
}: FeedbackCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getGlowStyles = (idx: number) => {
    // 0: Orange & Red
    // 1: Blue & Greenish
    // 2: Purplish
    if (idx % 3 === 0) {
      return {
        spotlight: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.2) 0%, rgba(220,20,60,0.1) 50%, transparent 100%)`,
        core: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,140,0,0.3) 0%, rgba(255,69,0,0.1) 50%, transparent 100%)`,
        shadow: `0 0 70px rgba(255,69,0,0.4)`,
        border: `rgba(255,165,0,0.5)`
      };
    } else if (idx % 3 === 1) {
      return {
        spotlight: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,250,154,0.2) 0%, rgba(30,144,255,0.1) 50%, transparent 100%)`,
        core: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,250,154,0.3) 0%, rgba(0,191,255,0.1) 50%, transparent 100%)`,
        shadow: `0 0 70px rgba(0,191,255,0.4)`,
        border: `rgba(0,250,154,0.5)`
      };
    } else {
      return {
        spotlight: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(218,112,214,0.2) 0%, rgba(138,43,226,0.1) 50%, transparent 100%)`,
        core: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,255,0.3) 0%, rgba(148,0,211,0.1) 50%, transparent 100%)`,
        shadow: `0 0 70px rgba(138,43,226,0.4)`,
        border: `rgba(218,112,214,0.5)`
      };
    }
  };

  const currentStyles = getGlowStyles(index);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? currentStyles.shadow : undefined,
        borderColor: isHovered ? currentStyles.border : undefined,
      }}
      className={cn(
        "bg-black-200 p-8 rounded-3xl w-full border border-white/10 shadow-lg transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between h-full relative overflow-hidden group z-10",
        index === 2 && "md:col-span-2"
      )}
    >
      {/* Dynamic Neon Spotlight Effect */}
      <div
        className="absolute pointer-events-none -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: currentStyles.spotlight,
        }}
      />
      
      {/* High Intensity Glow at mouse core */}
      <div
        className="absolute pointer-events-none -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen z-0"
        style={{
          background: currentStyles.core,
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-white font-bold text-[20px] leading-tight">{name}</h3>
              <p className="text-secondary text-[14px] mt-1">{designation}</p>
              <p className="text-gray-400 text-[12px]">{company}</p>
            </div>
            <img
              src={image}
              alt={`volunteer-at-${name}`}
              className="w-12 h-12 rounded-full object-cover bg-white border-2 border-white/10 shadow-md"
            />
          </div>

          {/* Emotional Subtitle */}
          <p className="text-cyan-400 text-[14px] italic mt-3 font-medium">
            "{subtitle}"
          </p>

          {/* Divider */}
          <div className="border-b border-white/10 my-4 group-hover:border-cyan-500/50 transition-colors duration-300" />

          {/* Bullet Points */}
          <ul className="list-none space-y-2">
            {testimonial.map((point, i) => (
              <li
                key={`volunteer-point-${i}`}
                className="text-gray-300 text-[14px] flex items-start gap-2"
              >
                <span className="text-cyan-500 mt-[5px] text-[10px]">●</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags (if available) */}
        {tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/50"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Feedbacks (Volunteer Section)
export const Feedbacks = () => {
  return (
    <SectionWrapper idName="experience">
      <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Providing Impact & Giving Back</p>
            <h2 className={styles.sectionHeadText}>Volunteer Work.</h2>
          </motion.div>
        </div>

        {/* Feedback Cards Grid */}
        <div
          className={cn(
            styles.paddingX,
            "-mt-20 pb-14 grid grid-cols-1 md:grid-cols-2 gap-7"
          )}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            //@ts-ignore
            <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="pb-8 text-center"
        >
          <p className="text-secondary text-[16px] italic opacity-80">
            “Giving back is a core part of who I am as an engineer.”
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
