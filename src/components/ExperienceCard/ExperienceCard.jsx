import styles from "./ExperienceCard.module.css";

/**
 * Single timeline card for a job or education entry.
 *
 * @param {{ title: string, company: string, period: string,
 *           location: string, color: string, items: string[] }} props
 */
export default function ExperienceCard({ title, company, period, location, color, items }) {
  return (
    <div className={styles.card} style={{ borderLeftColor: color }}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.company} style={{ color }}>{company}</p>
        </div>
        <div className={styles.meta}>
          <span className={styles.period}>{period}</span>
          <span className={styles.location}>{location}</span>
        </div>
      </div>

      <ul className={styles.list}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.listItem}>
            <span className={styles.arrow} style={{ color }}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
