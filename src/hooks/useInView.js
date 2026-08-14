import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into view.
 *
 * Sections below the fold used to run their entrance animation on page load,
 * so by the time you scrolled down they had already finished. Gate the
 * animation classes on this instead.
 *
 * Returns [ref, inView]. Once true it stays true — the reveal plays once.
 */
export const useInView = ({ threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) => {
  const ref = useRef(null);
  // Without IntersectionObserver, start visible rather than hiding content.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};
