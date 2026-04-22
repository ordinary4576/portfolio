import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { areejProfile, cpp, python, html, css, figma, opencv } from "../assets";
import { PERSONAL_INFO } from "../constants";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen mx-auto overflow-hidden bg-primary flex flex-col justify-center py-20 md:py-0">
      {/* Background Video - Reduced Opacity */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-360px] left-0 z-[1] w-full h-full object-cover opacity-40 pointer-events-none"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Background Effects */}
      <div className="absolute top-[-15%] left-1/2 w-[80%] h-[40%] rounded-full purple-shadow -translate-x-1/2 blur-[120px] opacity-20 z-0 pointer-events-none" />

      <div className={cn(styles.paddingX, "max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between z-10 gap-10 mt-10 md:mt-0")}>

        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left pt-10 md:pt-0">

          {/* Headline - Font size reduced for better mobile fit */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Building intelligent software with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              heart and precision.
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light"
          >
            Software Engineering Student | AI/ML Enthusiast | Frontend Designer
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            I build scalable, user-centric applications using C++, Python, and modern web technologies.
            I love combining creativity, AI, and real-world impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
          >
            {/* View Projects - Purple Button */}
            <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              View Projects
            </a>

            {/* Download CV - Subtle Border Button */}
            <a href={PERSONAL_INFO.cv} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
              Download CV
            </a>

            {/* Premium Contact Button */}
            <a href="#contact" className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10 text-sm md:text-base">CONTACT ME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
            </a>
          </motion.div>

          <p className="text-gray-500 text-sm mt-1 italic">"Passionate about building tech that helps people and communities."</p>

        </div>

        {/* Right Column: 3D Model & Icons */}
        <div className="flex-1 flex justify-center items-center relative w-full max-w-[550px] min-h-[350px] md:min-h-[500px]">

          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-400/30 rounded-full blur-[60px] animate-pulse" />

          {/* 3D Laptop Model container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full h-[300px] md:h-[500px] bg-transparent"
          >
            <ComputersCanvas scale={1.2} />
          </motion.div>

          {/* Floating Icons - Adjusted for better mobile view */}
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 left-0 md:-left-10 w-12 h-12 md:w-16 md:h-16 bg-black/50 p-2 md:p-3 rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/20 backdrop-blur-md z-20">
            <img src={cpp} alt="C++" className="w-full h-full object-contain" title="C++" />
          </motion.div>

          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -right-4 md:-right-12 w-12 h-12 md:w-16 md:h-16 bg-black/50 p-2 md:p-3 rounded-full border border-yellow-500/30 shadow-lg shadow-yellow-500/20 backdrop-blur-md z-20">
            <img src={python} alt="Python" className="w-full h-full object-contain" title="Python" />
          </motion.div>

          <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 left-0 md:-left-10 w-12 h-12 md:w-16 md:h-16 bg-black/50 p-2 md:p-3 rounded-full border border-orange-500/30 shadow-lg shadow-orange-500/20 backdrop-blur-md z-20">
            <img src={html} alt="Web Dev" className="w-full h-full object-contain" title="Web Development" />
          </motion.div>

          <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-0 right-4 md:-top-6 md:right-10 w-10 h-10 md:w-14 md:h-14 bg-black/50 p-2 md:p-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20 backdrop-blur-md z-20">
            <img src={figma} alt="Figma" className="w-full h-full object-contain" title="Figma" />
          </motion.div>

          <motion.div animate={{ y: [-7, 7, -7] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute bottom-10 -right-4 md:bottom-10 md:-right-2 w-10 h-10 md:w-14 md:h-14 bg-black/50 p-2 md:p-3 rounded-full border border-green-500/30 shadow-lg shadow-green-500/20 backdrop-blur-md z-20">
            <img src={opencv} alt="OpenCV" className="w-full h-full object-contain" title="OpenCV" />
          </motion.div>

        </div>

      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10 pointer-events-none hidden sm:flex">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1.5 opacity-40 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
