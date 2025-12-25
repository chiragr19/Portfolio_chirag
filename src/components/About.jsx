import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto container-px grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <SectionTitle title="About me" />
          <p className="mt-6 text-neutral-700 dark:text-neutral-300">
            I'm a frontend developer and visionary Computer Science undergraduate at Parul University, Vadodara. I'm passionate about crafting captivating UIs that not only look great but also provide exceptional user experiences. 
          </p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            My proficiency is in React, Tailwind CSS, and modern frontend
            tooling, with strong attention to UX nuances and performance.
          </p>
          <div className="mt-6">
            {/** Ensure correct path regardless of base URL (Vite public asset) */}
            {(() => {
              const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
              return (
                <a
                  href={resumeUrl}
                  download
                  className="btn btn-primary inline-flex items-center"
                >
                  <FiDownload />
                  <span>Resume</span>
                </a>
              );
            })()}
            
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "2 Projects",
              desc: "Built and refined production-grade UI work",
            },
            {
              title: "Performance",
              desc: "Measure, optimize, and ship fast UIs",
            },
            {
              title: "Accessibility",
              desc: "Inclusive Educations by default",
            },
            {
              title: "Design systems",
              desc: "Composable, scalable components",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="glass glass-hover p-5 card-hover"
            >
              <p className="text-brand-400 text-sm">{item.title}</p>
              <p className="font-medium mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
