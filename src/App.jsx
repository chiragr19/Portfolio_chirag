import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Remove default body centering from Vite template if any
    document.body.style.display = "block";
    document.body.style.placeItems = "unset";

    // Add the animation styles dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes moveX {
        0% { left: 0%; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { left: 100%; opacity: 0; }
      }

      @keyframes pulseSlow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.7; }
      }

      @keyframes pingSlow {
        0% { transform: scale(1); opacity: 0.7; }
        75%, 100% { transform: scale(2.5); opacity: 0; }
      }

      @keyframes slideBg {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }

      .animate-move-x { animation: moveX 3s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulseSlow 4s cubic-bezier(0.4,0,0.6,1) infinite; }
      .animate-ping-slow { animation: pingSlow 3s cubic-bezier(0,0,0.2,1) infinite; }

      .animate-bg-slide {
        background-size: 200% auto;
        animation: slideBg 6s linear infinite;
      }

      .animation-delay-1000 { animation-delay: 1s; }
      .animation-delay-2000 { animation-delay: 2s; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen">
      {/* Background grid with proper positioning */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-20 dark:opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Main content container with proper alignment */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
          <div className="space-y-12">
            <Hero />
            <AnimatedDivider />
            <About />
            <AnimatedDivider />
            <Skills />
            <AnimatedDivider />
            <Projects />
            <AnimatedDivider />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

// Animated Divider Component
const AnimatedDivider = () => {
  return (
    <div className="relative h-1 flex items-center justify-center my-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        {/* flowing gradient line - brighter in light mode for visibility */}
        <div className="w-full h-px bg-gradient-to-r from-neutral-300/60 via-brand-600/70 to-neutral-300/60 animate-bg-slide dark:hidden"></div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent animate-bg-slide hidden dark:block"></div>
      </div>

      {/* Animated orb that moves across the divider */}
      <div className="absolute h-3 w-3 rounded-full bg-brand-600 dark:bg-brand-400 animate-move-x shadow-lg shadow-brand-600/40 dark:shadow-brand-400/50"></div>

      {/* Glowing dots along the line */}
      <div className="absolute h-2 w-2 rounded-full bg-brand-600/80 dark:bg-brand-400/70 animate-ping-slow left-1/4"></div>
      <div className="absolute h-2 w-2 rounded-full bg-purple-600/80 dark:bg-purple-400/70 animate-ping-slow left-1/2 animation-delay-1000"></div>
      <div className="absolute h-2 w-2 rounded-full bg-brand-600/80 dark:bg-brand-400/70 animate-ping-slow left-3/4 animation-delay-2000"></div>
    </div>
  );
};

export default App;
