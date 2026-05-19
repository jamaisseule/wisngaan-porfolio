import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

/**
 * Decorative dual-ring cursor that follows mouse movement.
 * Hidden on touch devices via CSS.
 */
export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = ({ clientX: x, clientY: y }) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top  = `${y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top  = `${y}px`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
