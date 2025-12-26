import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-8 md:pt-12 pb-20 md:pb-28 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto container-px text-center">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <span className="text-brand-400 font-mono text-sm md:text-base">
            Hi, I'm Chirag 👋
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  "
        >
          <span className="block">Frontend Developer</span>
          <span className=" gradient-text bg-gradient-to-r from-brand-400 to-purple-500 ">
            crafting digital Educations that delight
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto"
        >
          I build modern, accessible web Educations using React, Tailwind, and a
          keen eye for detail. Passionate about creating interfaces that users
          love to interact with.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="btn btn-primary group flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-5 text-neutral-600 dark:text-neutral-300"
        >
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Follow me</span>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/chiragr19/"
              target="_blank"
              className="p-2 rounded-full border border-black/10 dark:border-neutral-700 hover:border-brand-400 hover:text-brand-400 transition-all text-neutral-700 dark:text-inherit"
              whileHover={{ y: -3 }}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chirag-rawal-a05928212/"
              target="_blank"
              className="p-2 rounded-full border border-black/10 dark:border-neutral-700 hover:border-brand-400 hover:text-brand-400 transition-all text-neutral-700 dark:text-inherit"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              className="p-2 rounded-full border border-black/10 dark:border-neutral-700 hover:border-brand-400 hover:text-brand-400 transition-all text-neutral-700 dark:text-inherit"
              whileHover={{ y: -3 }}
              aria-label="Email"
            >
              <FiMail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
