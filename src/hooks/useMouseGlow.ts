import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Custom hook for smooth mouse position tracking.
 * Uses RAF for throttled updates to prevent performance issues.
 *
 * @example
 * ```tsx
 * const { x, y } = useMouseGlow();
 * <MouseGlow $x={x} $y={y} />
 * ```
 */
export function useMouseGlow(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const updatePosition = () => {
      setPosition((prev) => {
        if (prev.x !== lastX || prev.y !== lastY) {
          return { x: lastX, y: lastY };
        }
        return prev;
      });
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return position;
}

export default useMouseGlow;
