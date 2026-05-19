import { useState } from "react";
import { NAV_ITEMS } from "../../constants/data";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Navbar.module.css";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  const handleNavClick = (item) => {
    scrollTo(item);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={styles.logo}
          onClick={() => {
            if (window.scrollY > 100) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              scrollTo("about");
            }
          }}
        >
          wis<span className={styles.logoDot}>ngaan</span>
        </div>

        {/* Desktop links */}
        <ul className={styles.desktopLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                className={`${styles.navLink} ${active === item ? styles.navLinkActive : ""}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={styles.mobileLink}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
