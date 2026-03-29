"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "../utils/motion";
import { InView } from "react-intersection-observer";

// user1 import removed

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
    >
      <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
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

      <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-full h-auto">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.5)}
              className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500 scale-75 md:scale-100" // Added scale fix for mobile
            >
              {/* Using the uploaded user image */}
              <img src="/profile-pic.jpg" alt="profile" width={250} className="object-cover" />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.5)}
              className="Welcome-box px-[15px] py-[8px] z-[20]  my-[20px] border border-[#7042f88b] opacity-[0.9] rounded-lg bg-[rgba(0,0,0,0.3)] backdrop-blur-md"
            >
              <h1 className="Welcome-text text-[20px] font-bold text-white text-center">
                Areej Anwaar
              </h1>
            </motion.div>
          )}
        </InView>

        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromBottom}
              className="Welcome-box px-[15px] w-full md:w-full py-[8px] z-[20] mb-[20px] border border-[#7042f88b] opacity-[0.9] rounded-lg bg-[rgba(0,0,0,0.3)] backdrop-blur-md"
            >
              <div className="Welcome-text text-[16px] w-full text-justify flex flex-col gap-5 text-gray-200">


                <div className="text-gray-300 text-lg leading-relaxed mb-6 text-center font-medium">
                  <p>Teamwork • Leadership • Clear Communication</p>
                  <p className="mt-2">Reliable • Detail-Oriented • Fast Learner</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Education</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white">Bachelor of Science in Software Engineering</strong> — Air University, Islamabad<br />
                      GPA: 3.17 / 4.0
                    </li>
                    <li>
                      <strong className="text-white">FSc Pre-Engineering</strong> — OPF Girls College, Islamabad (2021 – 2023)<br />
                      Marks: 894 / 1100 (Grade: A1)
                    </li>
                    <li>
                      <strong className="text-white">Matriculation</strong> — OPF Girls College, Islamabad (2019 – 2021)<br />
                      Marks: 1055 / 1100 (Grade: A1)
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </InView>
      </div>



    </section>
  );
};
