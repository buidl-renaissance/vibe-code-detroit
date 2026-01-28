import { useState, useEffect } from "react";

interface ParallaxScrollState {
  scrollY: number;
  maxScroll: number;
  scrollProgress: number;
}

interface UseParallaxScrollOptions {
  /** Smoothness factor (0-1). Higher = more responsive. Default: 0.18 */
  smoothness?: number;
}

/**
 * Custom hook for smooth parallax scroll tracking.
 * Uses RAF-based interpolation for buttery smooth animations.
 *
 * @example
 * ```tsx
 * const { scrollY, maxScroll, scrollProgress } = useParallaxScroll();
 * // scrollProgress is 0 at top, 1 at bottom
 * ```
 */
export function useParallaxScroll(
  options: UseParallaxScrollOptions = {},
): ParallaxScrollState {
  const { smoothness = 0.18 } = options;

  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1000);

  useEffect(() => {
    let rafId: number;
    let currentScrollY = 0;
    let targetScrollY = 0;
    let ticking = false;

    const updateMaxScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      setMaxScroll(Math.max(docHeight - winHeight, 1));
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
      }
    };

    // Smooth interpolation for scroll position
    const smoothUpdate = () => {
      const diff = targetScrollY - currentScrollY;

      if (Math.abs(diff) > 0.5) {
        currentScrollY += diff * smoothness;
      } else {
        currentScrollY = targetScrollY;
      }

      setScrollY(currentScrollY);
      ticking = false;
      rafId = requestAnimationFrame(smoothUpdate);
    };

    // Initial calculation
    updateMaxScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMaxScroll, { passive: true });
    rafId = requestAnimationFrame(smoothUpdate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
      cancelAnimationFrame(rafId);
    };
  }, [smoothness]);

  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  return { scrollY, maxScroll, scrollProgress };
}

export default useParallaxScroll;
