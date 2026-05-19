import { CONTACT_ITEMS } from "../../constants/data";

import Reveal from "../Reveal/Reveal";
import SectionHeading from "../SectionHeading/SectionHeading";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="Contact" className={`section-wrapper ${styles.section}`}>
      <SectionHeading title="CONTACT" />

      <Reveal delay={0.1}>
        <div className={styles.card}>
          <p className={styles.ctaText}>LET’S CONNECT</p>

          <div className={styles.iconRow}>
            {CONTACT_ITEMS.map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.iconLink}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}