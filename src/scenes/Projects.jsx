import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

// Import your project images
import logo_2048 from "../assets/2048_logo.png";
import network from "../assets/network.png";
import spotify from "../assets/spotify.png";
// import tetris from "../assets/tetris.png ";
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
const Project = ({ title, image, description, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative max-w-[400px] max-h-[400px]">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 text-sm">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 underline text-blue-500 hover:text-blue-700">
          Visit Project
        </a>
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

          <Project title="2048" image={logo_2048} description="A playable replica of the popular 2048 game written in base HTML CSS and JavaScript" 
              url="https://ishanphadke11.github.io/2048.github.io/"/>

          <Project title="Network Analysis" image={network} description="A Network Analysis tool that parses pcap files and generates detailed reports in
              CSV format containing key information for each network protocol including IPv4, TCP, UDP, HTTP, DNS and FTP" url="" />
          <Project title="Trip Planner" image={project5} description="A full stack application that uses an LLM to generate a trip itinerary based on user inputs
              such as Destination, start and end dates, mood, and interests" url=""/>
          <Project title="Spotify Playlist Creator" image={spotify} description="An application that uses an LLM and the Spotify API to generate a playlist in Spotify
              based off a prompt given by the user." url=""/>
          <Project title="Block Game" image={project5} description="A tetris like game where user has to line up blocks on a game grid to score points."
              url="https://ishanphadke11.github.io/tetris.github.io/"/>
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
