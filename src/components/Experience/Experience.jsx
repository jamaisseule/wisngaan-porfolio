import { EDUCATION, EXPERIENCES } from "../../constants/data";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Experience.module.css";

/**
 * Work experience timeline + education entry.
 */
export default function Experience() {
  return (
    <section id="Experience" className="section-wrapper">
      <SectionHeading title="EXPERIENCE" />

      {EXPERIENCES.map((exp, i) => (
        <Reveal key={exp.company} delay={i * 0.1}>
          <ExperienceCard {...exp} />
        </Reveal>
      ))}

      {/* Education */}
      <Reveal delay={0.35}>
        <div className={styles.education} style={{ borderLeftColor: EDUCATION.color }}>
          <div className={styles.eduHeader}>
            <div>
              <h3 className={styles.eduDegree}>{EDUCATION.degree}</h3>
              <p className={styles.eduSchool} style={{ color: EDUCATION.color }}>
                {EDUCATION.school}
              </p>
            </div>
            <div className={styles.eduMeta}>
              <span>{EDUCATION.period}</span>
              <span>{EDUCATION.location}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
