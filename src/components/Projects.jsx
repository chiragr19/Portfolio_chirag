import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Budget Tracker",
    desc: "A lightweight Budget Tracker to manage income and expenses.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    code: "https://github.com/chiragr19/Budget_Tracker",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto container-px">
        <SectionTitle
          title="Projects"
          subtitle="Selected work showcasing my focus on UX and performance"
        />
        <motion.div
          className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="glass glass-hover overflow-hidden shine card-hover"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="aspect-video bg-gradient-to-br from-black/5 to-black/0 dark:from-white/10 dark:to-white/5" />
              <div className="p-5">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
