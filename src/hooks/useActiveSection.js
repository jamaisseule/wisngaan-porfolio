import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../constants/data";

/**
 * Tracks which section is currently in view as the user scrolls.
 * @returns {string} id of the active nav section
 */
export function useActiveSection() {
  const [active, setActive] = useState(NAV_ITEMS[0]);

  useEffect(() => {
    const handleScroll = () => {
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 120 && bottom >= 120) {
          setActive(item);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}
