import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#Education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setCurrent(visible[0].target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto container-px flex items-center justify-between h-16">
          <a href="#home" className="font-semibold text-white text-lg">
            Chirag<span className="text-brand-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  current === link.href.replace("#", "")
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
                {current === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-brand-500"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
          >
            <FiMenu size={22} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed inset-y-0 right-0 w-72 bg-neutral-900/95 backdrop-blur border-l border-white/10 p-6 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5"
                >
                  <FiX size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`transition ${
                      current === link.href.replace("#", "")
                        ? "text-white"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="btn btn-secondary w-full justify-center"
                >
                  Contact
                </a>
                <a
                  href="#projects"
                  className="btn btn-primary w-full justify-center"
                >
                  View Work
                </a>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
