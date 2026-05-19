import { useState } from "react";
import styles from "./ProjectCard.module.css";

/**
 * Individual project card with hover border glow.
 *
 * @param {{ name, tag, period, tech, desc, link, accent }} props
 */
export default function ProjectCard({ name, tag, period, tech, desc, link, accent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.card}
      style={{ borderColor: hovered ? `${accent}55` : "rgba(255,255,255,0.07)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.topRow}>
        <span className={styles.tag} style={{ background: `${accent}18`, color: accent }}>
          {tag}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.githubLink}
          style={{ color: hovered ? accent : "var(--color-muted)" }}
        >
          GitHub ↗
        </a>
      </div>

      <h3 className={styles.name} style={{ color: accent }}>{name}</h3>
      <p className={styles.period}>{period}</p>
      <p className={styles.desc}>{desc}</p>

      <div className={styles.techList}>
        {tech.map((t) => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>
    </div>
  );
}
