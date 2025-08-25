import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

// === Motion Variants (mirrors your Projects stagger & item animation) ===
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

// === Small Capsule/Pill for each skill ===
const SkillPill = ({ label, icon }) => (
  <motion.span
    variants={item}
    className="inline-flex items-center gap-2 rounded-full border border-grey/30 bg-white/5 px-3 py-1 text-sm text-deep-blue/90 hover:bg-white/10 hover:shadow-sm transition"
  >
    {icon && <span className="text-base">{icon}</span>}
    <span>{label}</span>
  </motion.span>
);

// === Section for a group of skills (Languages, Frameworks, etc.) ===
const SkillSection = ({ title, skills, accent = "red" }) => {
  // Accent backgrounds similar to your Projects tiles (bg-red, bg-blue, etc.)
  const accentBg =
    accent === "red" ? "bg-red/10" : accent === "blue" ? "bg-blue/10" : "bg-grey/10";

  return (
    <motion.div
      variants={item}
      className={`rounded-lg border border-grey/20 ${accentBg} p-6 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-playfair font-semibold text-xl">
          <span className={accent === "red" ? "text-red" : "text-blue"}>{title}</span>
        </h3>
        {/* Decorative tag (optional) */}
        <span className="text-xs uppercase tracking-wider text-grey">Updated</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills?.length ? (
          skills.map((s, i) => (
            <SkillPill key={`${title}-${i}`} label={s.label} icon={s.icon} />
          ))
        ) : (
          <p className="text-sm text-grey">
            Add your {title.toLowerCase()} here…
          </p>
        )}
      </div>
    </motion.div>
  );
};

// === Main Skills Section ===
const MySkills = () => {
  // Prototype data — replace with your actual skills later.
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
    <section id="skills" className="pt-48 pb-48">
      {/* HEADINGS (mirrors Projects) */}
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
          A quick snapshot of the technologies and tools I use to design, build, and ship
          products. This section mirrors the motion and styling from the Projects grid so
          your portfolio feels cohesive.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="flex justify-center">
        <motion.div
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Optional “corner tiles” for symmetry with your Projects section */}
          <motion.div
            variants={item}
            className="flex justify-center text-center items-center p-8 bg-red text-white rounded-lg font-playfair font-semibold"
          >
            CORE FOUNDATIONS
          </motion.div>

          <SkillSection title="Languages" skills={languages} accent="red" />
          <SkillSection title="Frameworks" skills={frameworks} accent="blue" />
          <SkillSection title="Developer Tools" skills={devTools} accent="red" />
          <SkillSection title="Other" skills={other} accent="blue" />

          <motion.div
            variants={item}
            className="flex justify-center text-center items-center p-8 bg-blue text-white rounded-lg font-playfair font-semibold"
          >
            BUILT FOR IMPACT
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
