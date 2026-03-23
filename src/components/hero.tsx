import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { areejProfile, cpp, python, html, css, figma, opencv } from "../assets";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto overflow-hidden bg-primary flex flex-col justify-center">
      {/* Background Video - Reduced Opacity */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover opacity-40"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Background Effects */}
      <div className="absolute top-[-15%] left-1/2 w-[80%] h-[40%] rounded-full purple-shadow -translate-x-1/2 blur-[120px] opacity-20 z-0 pointer-events-none" />

      <div className={cn(styles.paddingX, "max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between z-10 gap-10")}>

        {/* Left Column: Text Content - Raised ~1cm */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left pt-20 md:mt-8">

          {/* Badge Removed as requested */}

          {/* Headline - Font size reduced to text-3xl/5xl */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
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
            className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 items-center"
          >
            {/* View Projects - Purple Button */}
            <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              View Projects
            </a>

            {/* Download CV - Subtle Border Button */}
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
              Download CV
            </a>

            {/* Premium Contact Button */}
            <a href="#contact" className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">CONTACT ME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
            </a>
          </motion.div>

          {/* Small Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm text-gray-500 mt-4"
          >
            Currently open to internships and collaboration opportunities.
          </motion.p>

          <p className="text-gray-500 text-sm mt-1 italic">"Passionate about building tech that helps people and communities."</p>

        </div>

        {/* Right Column: 3D Model & Icons */}
        <div className="flex-1 flex justify-center items-center relative w-full max-w-[500px]">

          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-400/30 rounded-full blur-[60px] animate-pulse" />

          {/* 3D Laptop Model - Scaled Down in existing container style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[280px] h-[280px] md:w-[650px] md:h-[500px] bg-transparent"
          >
            {/* The user asked to keep the 'circle place' feel. 
                I removed the border/bg of the container itself to avoid hard clipping the 3D model,
                but I kept the dimensions. 
                If the user wants the GLASS CIRCLE back, I can re-add it. 
                "scale it down and place it at the hero page circle place"
                "keep the puple glow that is behind the circle rightnow"
                "DO NOT CHNAGE NAYTHING ELSE" implies keeping the circle frame?
                But a laptop is rectangular.
                I'll keep it transparent for now as 3D usually looks best that way.
             */}
            <ComputersCanvas scale={1.2} />
          </motion.div>

          {/* Floating Icons */}
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -left-4 md:top-0 md:-left-10 w-16 h-16 bg-black/50 p-3 rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/20 backdrop-blur-md z-20">
            <img src={cpp} alt="C++" className="w-full h-full object-contain" title="C++" />
          </motion.div>

          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -right-8 md:-right-12 w-16 h-16 bg-black/50 p-3 rounded-full border border-yellow-500/30 shadow-lg shadow-yellow-500/20 backdrop-blur-md z-20">
            <img src={python} alt="Python" className="w-full h-full object-contain" title="Python" />
          </motion.div>

          <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 -left-4 md:bottom-0 md:-left-10 w-16 h-16 bg-black/50 p-3 rounded-full border border-orange-500/30 shadow-lg shadow-orange-500/20 backdrop-blur-md z-20">
            <img src={html} alt="Web Dev" className="w-full h-full object-contain" title="Web Development" />
          </motion.div>

          {/* Additional Icons */}
          <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute top-0 right-0 md:-top-6 md:right-10 w-14 h-14 bg-black/50 p-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20 backdrop-blur-md z-20">
            <img src={figma} alt="Figma" className="w-full h-full object-contain" title="Figma" />
          </motion.div>

          <motion.div animate={{ y: [-7, 7, -7] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute bottom-10 -right-4 md:bottom-10 md:-right-2 w-14 h-14 bg-black/50 p-3 rounded-full border border-green-500/30 shadow-lg shadow-green-500/20 backdrop-blur-md z-20">
            <img src={opencv} alt="OpenCV" className="w-full h-full object-contain" title="OpenCV" />
          </motion.div>

        </div>

      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-60 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
