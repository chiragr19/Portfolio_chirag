const items = [
  {
    title: "Parul University • 4th Year",
    time: "2022 — 2026",
    desc: "I am currently pursuing my Bachelor's degree in Computer Science.",
  },
  {
    title: "Shri Ajit Vidhya Mandir • 12th CBSE",
    time: "2021 — 2022",
    desc: "I completed my 12th standard from Shri Ajit Vidhya Mandir, Sirohi.",
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
