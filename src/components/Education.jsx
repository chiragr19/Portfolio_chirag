const items = [
  {
    title: "Frontend Engineer • Freelance",
    time: "2024 — Present",
    desc: "Collaborate with clients to design and build responsive, accessible interfaces with React and Tailwind.",
  },
  {
    title: "Open Source Contributor",
    time: "2023 — Present",
    desc: "Contribute to UI libraries and documentation to improve developer Education.",
  },
];

import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="Education" className="section-padding">
      <div className="max-w-6xl mx-auto container-px">
        <SectionTitle title="Education" />
        <div className="mt-8 grid gap-4">
          {items.map((i) => (
            <div
              key={i.title}
              className="glass glass-hover p-5 card-hover flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <p className="font-medium">{i.title}</p>
                <p className="text-neutral-300 text-sm mt-1">{i.desc}</p>
              </div>
              <p className="text-sm text-neutral-400">{i.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
