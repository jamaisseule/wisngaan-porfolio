import { PROJECTS } from "../../constants/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Projects.module.css";

/**
 * Projects grid section.
 */
export default function Projects() {
  return (
    <section id="Projects" className="section-wrapper">
      <SectionHeading title="PROJECTS" />

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.15}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
      
      <div className={styles.scrollHint}>
        <span>›› swipe to see more</span>
      </div>
    </section>
  );
}
