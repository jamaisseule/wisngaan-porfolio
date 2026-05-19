import { SKILLS } from "../../constants/data";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Skills.module.css";

/**
 * Skill groups displayed in a responsive grid.
 */
export default function Skills() {
  return (
    <section id="Skills" className="section-wrapper">
      <SectionHeading title="SKILLS" />

      <div className={styles.grid}>
        {Object.entries(SKILLS).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.08}>
            <div className={styles.group}>
              <h4 className={styles.category}>{category}</h4>
              <div className={styles.tags}>
                {items.map((skill) => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
