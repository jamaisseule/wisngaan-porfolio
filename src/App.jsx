import "./styles/global.css";

import Cursor      from "./components/Cursor/Cursor";
import Navbar      from "./components/Navbar/Navbar";
import Hero        from "./components/Hero/Hero";
import Experience  from "./components/Experience/Experience";
import Projects    from "./components/Projects/Projects";
import Skills      from "./components/Skills/Skills";
import Contact     from "./components/Contact/Contact";
import Footer      from "./components/Footer/Footer";

/**
 * Root application — composes all page sections in order.
 * Each section is a self-contained component; data flows from constants/data.js.
 */
export default function App() {
  return (
    <>
      {/* Global decorative cursor (desktop only) */}
      <Cursor />

      {/* Scanline overlay */}
      <div aria-hidden="true" style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100, overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", left: 0, width: "100%", height: "2px",
          background: "rgba(0,255,178,0.04)", animation: "scanline 8s linear infinite",
        }} />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
