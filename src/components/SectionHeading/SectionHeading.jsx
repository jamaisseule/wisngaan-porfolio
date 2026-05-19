import Reveal from "../Reveal/Reveal";

/**
 * Consistent section heading with animated accent bar.
 *
 * @param {{ title: string }} props
 */
export default function SectionHeading({ title }) {
  return (
    <Reveal>
      <div className="section-heading">
        <div className="section-heading__bar" />
        <h2 className="section-heading__title">{title}</h2>
      </div>
    </Reveal>
  );
}
