"use client";
import React from "react";
import { areejProfile } from "../assets";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../utils/motion";
import { InView } from "react-intersection-observer";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col relative items-center justify-center min-h-screen w-full py-10 md:py-20 overflow-hidden"
    >
      {/* Background Binary Animation - Centralized & Large */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1400px] max-h-[1400px] z-[0] opacity-50 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/encryption.webm" type="video/webm" />
        </video>
      </div>

      {/* Title */}
      <div className="relative z-[5] mb-12 md:mb-20">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-[40px] font-medium text-center text-gray-200"
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Me{" "}
              </span>
            </motion.div>
          )}
        </InView>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-7xl mx-auto px-4 md:px-10 z-[20] w-full">
        
        {/* Left Side: Profile Picture Container */}
        <div className="flex flex-col items-center justify-center flex-shrink-0">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="group relative flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-[rgba(3,0,20,0.4)] backdrop-blur-sm shadow-[0_0_50px_rgba(112,66,248,0.4)]"
              >
                {/* Profile Image */}
                <img
                  src={areejProfile}
                  alt="Areej Anwaar"
                  className="relative z-10 w-[90%] h-[90%] rounded-full object-cover border-4 border-[#7042f844] shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />

                {/* Pulsing Overlay Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 to-cyan-400/20 z-[5] animate-pulse pointer-events-none" />
              </motion.div>
            )}
          </InView>

          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromLeft(0.7)}
                className="Welcome-box px-[20px] py-[10px] z-[20] my-[20px] border border-[#7042f88b] opacity-[0.9] rounded-lg bg-[rgba(0,0,0,0.3)] backdrop-blur-md"
              >
                <h1 className="Welcome-text text-[24px] font-bold text-white text-center">
                  Areej Anwaar
                </h1>
              </motion.div>
            )}
          </InView>
        </div>

        {/* Right Side: Bio and Education */}
        <div className="flex flex-col flex-1 max-w-2xl">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.5)}
                className="Welcome-box px-[20px] py-[25px] z-[20] border border-[#7042f88b] opacity-[0.9] rounded-lg bg-[rgba(0,0,0,0.3)] backdrop-blur-md"
              >
                <div className="Welcome-text text-[16px] w-full text-justify flex flex-col gap-6 text-gray-200">
                  <div className="text-gray-300 text-lg leading-relaxed text-center md:text-left font-medium">
                    <p className="flex flex-wrap justify-center md:justify-start gap-4">
                      <span>• Teamwork</span> 
                      <span>• Leadership</span> 
                      <span>• Clear Communication</span>
                    </p>
                    <p className="mt-2 flex flex-wrap justify-center md:justify-start gap-4">
                      <span>• Reliable</span> 
                      <span>• Detail-Oriented</span> 
                      <span>• Fast Learner</span>
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Education</h2>
                    <ul className="pl-0 space-y-5">
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full">
                        <strong className="text-white text-lg">Bachelor of Science in Software Engineering</strong><br />
                        <span className="text-gray-400 italic">Air University, Islamabad</span><br />
                        <span className="text-cyan-400 font-semibold">GPA: 3.17 / 4.0</span>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full">
                        <strong className="text-white text-lg">FSc Pre-Engineering</strong><br />
                        <span className="text-gray-400 italic">OPF Girls College, Islamabad (2021 – 2023)</span><br />
                        <span className="text-purple-400 font-semibold">Marks: 894 / 1100 (Grade: A1)</span>
                      </li>
                      <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                        <strong className="text-white text-lg">Matriculation</strong><br />
                        <span className="text-gray-400 italic">OPF Girls College, Islamabad (2019 – 2021)</span><br />
                        <span className="text-blue-400 font-semibold">Marks: 1055 / 1100 (Grade: A1)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </div>

      </div>
    </section>
  );
};
