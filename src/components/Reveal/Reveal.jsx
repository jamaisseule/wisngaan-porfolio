import { useInView } from "../../hooks/useInView";

/**
 * Wraps children in a fade-up reveal animation triggered on scroll.
 *
 * @param {{ children: React.ReactNode, delay?: number, className?: string }} props
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
