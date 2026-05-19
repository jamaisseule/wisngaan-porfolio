import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the observed element enters the viewport.
 * @param {number} threshold - intersection ratio (0–1) to trigger at
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // fire only once
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
