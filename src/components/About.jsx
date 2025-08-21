import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto container-px grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="About me" />
          <p className="mt-6 text-neutral-300">
            I'm a frontend developer focused on building elegant, accessible
            interfaces. I specialize in React, Tailwind CSS, and modern frontend
            tooling, with strong attention to UX nuances and performance.
          </p>
          <p className="mt-3 text-neutral-300">
            I enjoy collaborating with designers, shaping component systems, and
            shipping polished Educations.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "5+ Projects",
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
