import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../assets"; 

export const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl" 
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-tertiary w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-[0_0_40px_rgba(145,94,255,0.5)] flex flex-col md:flex-row relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-40 w-10 h-10 flex items-center justify-center bg-black/60 backdrop-blur-md rounded-full hover:bg-black/90 hover:shadow-[0_0_20px_#915eff] text-white transition-all duration-300 border border-white/10"
        >
          ✕
        </button>

        <AnimatePresence mode="wait">
          {showCertificate ? (
            <motion.div
              key="certificate"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-full flex-col h-[70vh] md:h-[600px] flex items-center justify-center p-8 bg-black-100 relative"
            >
              <img
                src={project.certificate_link}
                alt="Certificate"
                className="max-w-full max-h-[85%] object-contain rounded-xl shadow-[0_0_40px_rgba(145,94,255,0.5)] mb-10"
              />
              <button
                onClick={() => setShowCertificate(false)}
                className="bg-tertiary mt-4 border border-[#915eff] bg-opacity-80 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_#915eff] hover:bg-[#915eff]"
              >
                ← Back to Project Details
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex flex-col md:flex-row w-full h-full"
            >
              {/* Video / Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] relative bg-black-100/50 group">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : project.images && project.images.length > 0 ? (
                  <>
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.name} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 z-10"
                        >
                          &#10094;
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 z-10"
                        >
                          &#10095;
                        </button>
                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {project.images.map((_: any, idx: number) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentImageIndex === idx ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between custom-scrollbar">
                <div>
                  <h3 className="text-white font-bold text-[32px] tracking-tight mb-4">{project.name}</h3>
                  <p className="text-secondary text-[16px] leading-[28px] mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag: any, tagIdx: number) => (
                      <span key={`Tag-${tagIdx}`} className={`px-3 py-1 bg-black-200 rounded-full font-medium ${tag.color} text-[13px] border border-white/5`}>
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  {project.source_code_link && (
                    <button
                      onClick={() => window.open(project.source_code_link, "_blank")}
                      className="bg-black-100 hover:bg-black-200 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-white/10 flex-1 whitespace-nowrap"
                    >
                      <img src={github} alt="github" className="w-5 h-5 object-contain" />
                      Go to GitHub
                    </button>
                  )}
                  
                  {project.certificate_link && (
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="bg-[#915eff] hover:bg-[#a97cff] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_#915eff] flex-1 whitespace-nowrap"
                    >
                      View Certificate
                    </button>
                  )}
                  
                  {project.live_site_link && (
                    <button
                      onClick={() => window.open(project.live_site_link, "_blank")}
                      className="bg-tertiary border border-secondary hover:border-white text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex-1 whitespace-nowrap"
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
