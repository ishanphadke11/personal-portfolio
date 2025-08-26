import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

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

// === Pill for each skill (white text) ===
const SkillPill = ({ label, icon }) => (
  <motion.span
    variants={item}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition"
  >
    {icon && <span className="text-base">{icon}</span>}
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
            <SkillPill key={`${title}-${i}`} label={s.label} icon={s.icon} />
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
  // Prototype data — tell me your real skills and I'll drop them in.
  const languages = [
    { label: "HTML", icon: "💡" },
    { label: "CSS", icon: "💡" },
    { label: "JavaScript", icon: "💡" },
    { label: "C", icon: "💡" },
    { label: "C++", icon: "💡" },
    { label: "Python", icon: "💡" },
  ];

  const frameworks = [
    { label: "React JS", icon: "🧩" },
    { label: "Tailwind CSS", icon: "🧩" },
    { label: "Flask", icon: "🧩" },
  ];

  const devTools = [
    { label: "Git/Github", icon: "🛠️" },
    { label: "VS Code", icon: "🛠️" },
    { label: "MySQL", icon: "🛠️" },
  ];

  const other = [
    { label: "Linux, Windows, MacOS", icon: "✨" },
    { label: "TCP/IP Suite", icon: "✨" },
  ];

  return (
    // 👇 Added `mb-24 md:mb-32` to create space after the section.
    // 👇 Added `relative` to establish a stacking context (safe, helps if LineGradient is positioned).
    <section id="skills" className="pt-48 pb-48 mb-10 md:mb-32 relative">
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
          A snapshot of the technologies and tools I use to design, build, and ship
          products.
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
