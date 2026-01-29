import { useState, useCallback, useRef, useEffect } from "react";
import type { MouseEvent } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface UseClickRippleOptions {
  /** Duration of the ripple animation in ms. Default: 600 */
  duration?: number;
  /** Maximum number of concurrent ripples. Default: 10 */
  maxRipples?: number;
}

interface UseClickRippleResult {
  ripples: Ripple[];
  handleClick: (e: MouseEvent) => void;
}

/**
 * Custom hook for creating click ripple effects.
 * Manages ripple state and cleanup automatically.
 *
 * @example
 * ```tsx
 * const { ripples, handleClick } = useClickRipple();
 *
 * <div onClick={handleClick}>
 *   {ripples.map(ripple => (
 *     <ClickRipple key={ripple.id} $x={ripple.x} $y={ripple.y} />
 *   ))}
 * </div>
 * ```
 */
export function useClickRipple(
  options: UseClickRippleOptions = {},
): UseClickRippleResult {
  const { duration = 600, maxRipples = 10 } = options;

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);
  const timeoutIdsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  // Clean up all timeouts on unmount
  useEffect(() => {
    const timeoutIds = timeoutIdsRef.current;
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
      timeoutIds.clear();
    };
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const id = rippleIdRef.current++;
      const x = e.clientX;
      const y = e.clientY;

      setRipples((prev) => {
        // Keep only recent ripples to prevent memory issues
        const recentRipples = prev.slice(-(maxRipples - 1));
        return [...recentRipples, { id, x, y }];
      });

      // Remove ripple after animation completes
      const timeoutId = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
        timeoutIdsRef.current.delete(timeoutId);
      }, duration);
      timeoutIdsRef.current.add(timeoutId);
    },
    [duration, maxRipples],
  );

  return { ripples, handleClick };
}

export default useClickRipple;
