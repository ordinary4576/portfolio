import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { textVariant, fadeIn } from "../utils/motion";

const Resume = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="z-0 relative">
            <section
                id="resume"
                className={cn(styles.padding, "max-w-7xl mx-auto relative z-0")}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>A quick look at my academic and professional journey</p>
                    <h2 className={styles.sectionHeadText}>Resume / CV.</h2>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", "spring", 0.5, 0.75)}
                    className="w-full mt-10 flex flex-col gap-10 items-center justify-center"
                >
                    {/* CV Viewer Container */}
                    <div className="w-full h-[500px] md:h-[800px] rounded-2xl border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden relative bg-black/40 backdrop-blur-sm group hover:border-cyan-400/80 transition-all duration-300">

                        {/* Loading Spinner */}
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10 pointer-events-none">
                                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* PDF Viewer */}
                        <iframe
                            src="/CV_AreejAnwaar_.pdf"
                            className="w-full h-full object-cover"
                            onLoad={() => setLoading(false)}
                            title="Areej Anwaar Resume"
                        />

                        {/* Overlay Gradient for futuristic feel */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/20" />

                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center mt-4">

                        {/* Download Button */}
                        <a
                            href="/CV_AreejAnwaar_.pdf"
                            download="CV_AreejAnwaar_.pdf"
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group w-full md:w-auto justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75l-4.5 4.5m0 0l4.5 4.5m-4.5-4.5h16.5" />
                            </svg>
                            Download CV
                        </a>

                        {/* View Fullscreen Button */}
                        <a
                            href="/CV_AreejAnwaar_.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-xl bg-transparent border-2 border-purple-500/50 text-white font-bold text-lg hover:bg-purple-500/10 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 4.5L9 9m11.25-5.25h-4.5m4.5 0v4.5m0-4.5L15 9m-11.25 11.25h4.5m-4.5 0v-4.5m0 4.5L9 15m11.25 3.75v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                            </svg>
                            View Fullscreen
                        </a>

                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Resume;
