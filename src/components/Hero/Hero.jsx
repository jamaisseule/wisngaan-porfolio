import { PERSONAL_INFO } from "../../constants/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const { displayName, role, bio, bioHighlight, bioEnd, email, github, stats } =
    PERSONAL_INFO;

  return (
    <section id="About" className={styles.hero}>
      {/* Dot-grid decorative background */}
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.greeting}>
            <span className={styles.cursor}>▮</span> HELLO WORLD, I'M
          </p>

          <h1
            className={styles.name}
            data-text={`${displayName.line1} ${displayName.line2}`}
          >
            {displayName.line1}
            <br />
            {displayName.line2}
          </h1>

          <p className={styles.role}>
            {role}
            <span className={styles.typingCursor}>|</span>
          </p>

          <p className={styles.bio}>
            {bio}
            <span className={styles.bioHighlight}>{bioHighlight}</span>
            {bioEnd}
          </p>

          <div className={styles.cta}>
            <a href={`mailto:${email}`} className={styles.ctaPrimary}>
              Contact Me
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={styles.ctaSecondary}
            >
              GitHub ↗
            </a>
          </div>

          <div className={styles.stats}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <img
            src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/566212169_4208000096185862_4825101398279257449_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZhfLq7zFfUMQ7kNvwH83aLB&_nc_oc=AdouSUBPBrynsWFj595WAnLVB-HBkKXe50Gq_oc2YutKyRui-7Vn4GcwP1ZU7EkKb2yD5xXPrpAej6yFdhwHOgfp&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&_nc_gid=mnDCH-jUeJyaXQrB0sb6Bg&_nc_ss=7b2a8&oh=00_Af5b0aE1DJebnWo1pvw5ezRx4L5MhkyCMo6996kI-GaVlQ&oe=6A11B435"
            alt="wisngaan"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
