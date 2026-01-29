import { useState, useEffect } from "react";

type ShootingStarDirection = "tlbr" | "trbl" | "horizontal";

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  direction: ShootingStarDirection;
  duration: number;
  length: number;
}

interface UseShootingStarOptions {
  /** Minimum interval between stars in ms. Default: 8000 */
  minInterval?: number;
  /** Maximum interval between stars in ms. Default: 25000 */
  maxInterval?: number;
  /** Initial delay before first star in ms. Default: 5000-12000 (random) */
  initialDelay?: number;
  /** Minimum animation duration in seconds. Default: 1.0 */
  minDuration?: number;
  /** Maximum animation duration in seconds. Default: 1.8 */
  maxDuration?: number;
  /** Minimum star length in px. Default: 50 */
  minLength?: number;
  /** Maximum star length in px. Default: 110 */
  maxLength?: number;
}

/**
 * Custom hook for spawning shooting stars at random intervals.
 * Only one star appears at a time for a realistic night sky effect.
 *
 * @example
 * ```tsx
 * const shootingStar = useShootingStar();
 * {shootingStar && <ShootingStar {...shootingStar} />}
 * ```
 */
export function useShootingStar(
  options: UseShootingStarOptions = {},
): ShootingStar | null {
  const {
    minInterval = 8000,
    maxInterval = 25000,
    initialDelay,
    minDuration = 1.0,
    maxDuration = 1.8,
    minLength = 50,
    maxLength = 110,
  } = options;

  const [shootingStar, setShootingStar] = useState<ShootingStar | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let clearTimeoutId: ReturnType<typeof setTimeout>;
    let starId = 0;

    const spawnShootingStar = () => {
      const directions: ShootingStarDirection[] = [
        "tlbr",
        "trbl",
        "horizontal",
      ];
      const direction =
        directions[Math.floor(Math.random() * directions.length)];

      // Position based on direction
      let top: number, left: number;
      if (direction === "tlbr") {
        top = 5 + Math.random() * 25;
        left = 5 + Math.random() * 35;
      } else if (direction === "trbl") {
        top = 5 + Math.random() * 25;
        left = 60 + Math.random() * 30;
      } else {
        top = 10 + Math.random() * 35;
        left = -5 + Math.random() * 15;
      }

      const duration =
        minDuration + Math.random() * (maxDuration - minDuration);
      const length = minLength + Math.random() * (maxLength - minLength);

      setShootingStar({
        id: starId++,
        top,
        left,
        direction,
        duration,
        length,
      });

      // Clear the star after animation completes
      clearTimeoutId = setTimeout(
        () => {
          setShootingStar(null);
        },
        duration * 1000 + 100,
      );

      // Schedule next shooting star
      const nextDelay =
        minInterval + Math.random() * (maxInterval - minInterval);
      timeoutId = setTimeout(spawnShootingStar, nextDelay);
    };

    // Initial delay before first shooting star
    const actualInitialDelay = initialDelay ?? 5000 + Math.random() * 7000;
    timeoutId = setTimeout(spawnShootingStar, actualInitialDelay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(clearTimeoutId);
    };
  }, [
    minInterval,
    maxInterval,
    initialDelay,
    minDuration,
    maxDuration,
    minLength,
    maxLength,
  ]);

  return shootingStar;
}

export default useShootingStar;
