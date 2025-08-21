export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto container-px flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Chirag. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#projects" className="hover:text-white link-underline">
            Projects
          </a>
          <a href="#contact" className="hover:text-white link-underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
