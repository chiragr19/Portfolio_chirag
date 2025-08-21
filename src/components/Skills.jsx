import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiGit,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

// Custom DSA Icon
const DsaIcon = ({ size = 32, color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    role="img"
    aria-label="Data Structures & Algorithms"
  >
    <path
      fill="#4285f4"
      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"
    />
    <path
      fill="#fff"
      d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm0 24c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"
    />
    <path
      fill="#fff"
      d="M24 17c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
    />
  </svg>
);

export default function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={32} color="#00599C" /> },
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "DSA", icon: <DsaIcon size={32} /> },
    { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 size={32} color="#1572B6" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={32} color="#7952B3" /> },
    { name: "Vercel", icon: <SiVercel size={32} color="#000000" /> },
    { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub size={32} color="#ffffff" /> },
    { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const skillCards = sectionRef.current.querySelectorAll(".skill-card");
      skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto container-px">
        <SectionTitle title="Technical Skills" />
        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              className="skill-card flex flex-col items-center p-5 glass glass-hover rounded-xl opacity-0 transition-all duration-300 hover:scale-105"
              title={skill.name}
              whileHover={{ rotate: -1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
              >
                {skill.icon}
              </motion.div>
              <span className="mt-2 text-sm font-medium text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
