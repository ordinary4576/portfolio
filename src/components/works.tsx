import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { preview, github } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectModal } from "./ProjectModal";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: readonly { name: string; color: string }[];
  image: string;
  video?: string;
  source_code_link?: string;
  live_site_link?: string;
  certificate_link?: string;
  onClick: () => void;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
  live_site_link,
  certificate_link,
  onClick,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)} className="cursor-pointer" onClick={onClick}>
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 hover:shadow-[0_0_35px_#915eff]"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image */}
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        )}

        {/* Links */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
          {live_site_link && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(live_site_link, "_blank", "noreferrer");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-110"
            >
              <img
                src={preview}
                alt="Live Site"
                title="Live Site"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
          {source_code_link && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank", "noreferrer");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-110"
            >
              <img
                src={github}
                alt="Source Code"
                title="Source Code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] line-clamp-2">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("up", "spring", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively. Click on any project to view more details.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7 justify-center relative z-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} onClick={() => setSelectedProject(project)} {...project} />
          ))}
        </div>
        
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </>
    </SectionWrapper>
  );
};
