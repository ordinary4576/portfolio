import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import {
    cpp,
    python,
    html,
    css,
    javascript,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    threejs,
    internship_1,
    internship_2,
    codeairCert,
    vounterwork_certificate,
} from "../assets";

const certifications = [
    {
        title: "Coursera Certificate 1",
        org: "Coursera",
        date: "2024",
        image: nodejs,
        pdfLink: "/certificates/coursera_1.pdf",
    },
    {
        title: "Coursera Certificate 2",
        org: "Coursera",
        date: "2024",
        image: python,
        pdfLink: "/certificates/coursera_2.pdf",
    },
    {
        title: "Internship Certificate 1",
        org: "Company",
        date: "2024",
        image: internship_1,
    },
    {
        title: "Internship Certificate 2",
        org: "Company",
        date: "2024",
        image: internship_2,
    },
    {
        title: "Volunteer Work Certificate",
        org: "Organization",
        date: "2024",
        image: vounterwork_certificate,
    },
];


const CertificationsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const length = certifications.length;

    // Auto-scroll effect - Pauses on hover
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % length);
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, [length, isHovered]);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + length) % length);

    return (
        <SectionWrapper idName="certifications">
            <div className="flex flex-col items-center justify-center relative min-h-[800px] overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />

                <motion.div variants={textVariant()} className="z-10 relative mb-16">
                    <p className={`${styles.sectionSubText} text-center`}>My achievements</p>
                    <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
                </motion.div>

                <div
                    className="relative w-full max-w-7xl h-[600px] flex justify-center items-center"
                    style={{ perspective: "1200px" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {certifications.map((cert, index) => {
                        // Circular Distance Logic
                        let offset = (index - activeIndex + length) % length;
                        if (offset > length / 2) offset -= length;

                        // Strict visibility: Center + 1 Left + 1 Right
                        const isVisible = Math.abs(offset) <= 2;

                        if (!isVisible) return null;

                        return (
                            <CertCard
                                key={index}
                                cert={cert}
                                offset={offset}
                                onClick={() => setActiveIndex(index)}
                            />
                        );
                    })}

                    {/* Navigation Arrows */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-32 pointer-events-none z-50">
                        <button onClick={handlePrev} className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button onClick={handleNext} className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};


const CertCard = ({ cert, offset, onClick }: any) => {
    const isActive = offset === 0;
    const xDist = 560; // Spacing logic

    return (
        <motion.div
            onClick={onClick}
            className={`absolute w-[500px] h-[440px] rounded-[24px] cursor-pointer`}
            initial={false}
            animate={{
                x: offset * xDist,
                y: isActive ? 0 : 0,
                z: isActive ? 0 : -100, // Z handling matched to Scale
                rotateY: offset * -45,
                scale: isActive ? 1.2 : 0.8,
                opacity: isActive ? 1 : 0.6,
                zIndex: 100 - Math.abs(offset),
            }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1], // Custom cubic-bezier for "heavy" feel
            }}
            style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center",
            }}
        >
            {/* Card Container */}
            <div className={`
                w-full h-full rounded-[24px] overflow-hidden flex flex-col
                ${isActive ? 'shadow-[0_10px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/20' : 'shadow-lg ring-1 ring-white/10'}
                bg-[#1c1c2e] transition-all duration-500
            `}>

                {/* 1. Top 80% - Image Area */}
                <div className="w-full h-[80%] bg-black/40 relative flex items-center justify-center overflow-hidden group">
                    {/* Glossy gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

                    {cert.pdfLink ? (
                        <iframe
                            src={cert.pdfLink + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                            className={`w-full h-full border-none pointer-events-none transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-90 opacity-80'}`}
                            title={cert.title}
                        />
                    ) : (
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className={`w-full h-full object-contain transition-transform duration-700 p-4 ${isActive ? 'scale-105' : 'scale-90 opacity-80'}`}
                        />
                    )}

                    {/* View Button - Floating Eye Icon */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => {
                            if (cert.pdfLink) {
                                e.stopPropagation();
                                window.open(cert.pdfLink, "_blank");
                            }
                        }}
                        className={`absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg z-20 transition-colors ${cert.pdfLink ? 'hover:bg-white/20 cursor-pointer' : 'opacity-50'}`}
                    >
                        {/* Eye Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </motion.div>
                </div>

                {/* 2. Bottom 20% - Description Area (Glass) */}
                <div className="w-full h-[20%] bg-white/5 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col justify-center relative">
                    <h3 className="text-white font-bold text-lg leading-tight line-clamp-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                        {cert.org} certification completed in {cert.date}. Specialized training & verified skills.
                    </p>

                    {/* Subtle Glow at bottom */}
                    {isActive && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70" />}
                </div>

            </div>

            {/* Ground Reflection Shadow */}
            {isActive && (
                <div className="absolute -bottom-16 left-4 right-4 h-4 bg-black/60 blur-xl rounded-[100%] opacity-60" />
            )}

        </motion.div>
    );
};

export default CertificationsCarousel;
