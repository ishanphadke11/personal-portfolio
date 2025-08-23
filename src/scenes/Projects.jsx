import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

// Import your project images
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-5.jpeg";
import project6 from "../assets/project-6.jpeg";

// Variants
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Project Component
const Project = ({ title, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative max-w-[400px] max-h-[400px]">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          kjhdiauhdiuhf fhoshfo psoihkfihos ohedofihol hslidhf. kggdfiuhf ioehfolg
          fhofiehdflkn djmd.
        </p>
      </div>
      <img src={image} alt={title} />
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          jkjhsdkhfkshauikauhksdhkuhikhnkfdjhdkjhff oeifoif fjhlfire fhlfid.
          jdeyjgyudgud hdkuheyihd ioshydouhnj alidhyoeawhiy dfokdyhoid.
          kwegiuhg fdiowueghdiouhgeyi dfowehfyoiehfo woiwhedfoh.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="Project 1" image={project1} />
          <Project title="Project 2" image={project2} />
          <Project title="Project 3" image={project3} />
          <Project title="Project 4" image={project4} />
          <Project title="Project 5" image={project5} />
          <Project title="Project 6" image={project6} />

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
