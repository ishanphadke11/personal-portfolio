// src/scenes/MySkills.jsx
import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

// === Icons (Simple Icons) ===
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiGit,
  SiGithub,
  SiMysql,
  SiLinux,
  SiApple,
} from "react-icons/si";

// === Icons (others to avoid missing exports on your version) ===
import { VscVscode } from "react-icons/vsc";
import { FaWindows, FaNetworkWired } from "react-icons/fa";

// === Motion Variants (consistent with Projects) ===
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// === Pill for each skill (uses a React Icon) ===
const SkillPill = ({ label, Icon, colorClass = "" }) => (
  <motion.span
    variants={item}
    title={label}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition"
  >
    {Icon && (
      <Icon aria-hidden="true" className={`text-xl md:text-2xl ${colorClass}`} />
    )}
    <span>{label}</span>
  </motion.span>
);

// === Section for a group of skills ===
const SkillSection = ({ title, skills, accent = "red" }) => {
  const accentText = accent === "red" ? "text-red" : "text-blue";
  return (
    <motion.div
      variants={item}
      className="rounded-xl border border-white/10 bg-black/30 p-8 pb-10 text-white backdrop-blur-sm shadow-lg min-h-[220px]"
    >
      <h3 className={`font-playfair font-semibold text-2xl ${accentText}`}>
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-3">
        {skills?.length ? (
          skills.map((s, i) => (
            <SkillPill
              key={`${title}-${i}`}
              label={s.label}
              Icon={s.Icon}
              colorClass={s.colorClass}
            />
          ))
        ) : (
          <p className="text-sm text-white/70">
            Add your {title.toLowerCase()} here…
          </p>
        )}
      </div>
    </motion.div>
  );
};

const MySkills = () => {
  // Brand-ish colors; tweak to match your palette or Tailwind theme
  const languages = [
    { label: "HTML", Icon: SiHtml5, colorClass: "text-[#E34F26]" },
    { label: "CSS", Icon: SiCss3, colorClass: "text-[#1572B6]" },
    { label: "JavaScript", Icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
    { label: "C", Icon: SiC, colorClass: "text-[#A8B9CC]" },
    { label: "C++", Icon: SiCplusplus, colorClass: "text-[#00599C]" },
    { label: "Python", Icon: SiPython, colorClass: "text-[#3776AB]" },
  ];

  const frameworks = [
    { label: "React JS", Icon: SiReact, colorClass: "text-[#61DAFB]" },
    { label: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
    { label: "Flask", Icon: SiFlask, colorClass: "text-white" },
  ];

  const devTools = [
    { label: "Git", Icon: SiGit, colorClass: "text-[#F05032]" },
    { label: "GitHub", Icon: SiGithub, colorClass: "text-white" },
    { label: "VS Code", Icon: VscVscode, colorClass: "text-[#007ACC]" },
    { label: "MySQL", Icon: SiMysql, colorClass: "text-[#4479A1]" },
  ];

  // Split OS into separate pills so each gets its own logo
  const other = [
    { label: "Linux", Icon: SiLinux, colorClass: "text-[#FCC624]" },
    { label: "Windows", Icon: FaWindows, colorClass: "text-[#0078D4]" },
    { label: "macOS", Icon: SiApple, colorClass: "text-[#A2AAAD]" },
    { label: "TCP/IP Suite", Icon: FaNetworkWired, colorClass: "text-teal-300" },
  ];

  return (
    // Spacing fix: margin-bottom creates space after the section for the next LineGradient
    <section id="skills" className="pt-48 pb-48 mb-24 md:mb-32 relative">
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
            <span className="text-red">MY</span> SKILLS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Some of the languages and tools that I like to work with.
        </p>
      </motion.div>

      {/* GRID — two boxes per row on md+ */}
      <div className="flex justify-center">
        <motion.div
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <SkillSection title="Languages" skills={languages} accent="red" />
          <SkillSection title="Frameworks" skills={frameworks} accent="blue" />
          <SkillSection title="Developer Tools" skills={devTools} accent="red" />
          <SkillSection title="Other" skills={other} accent="blue" />
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
