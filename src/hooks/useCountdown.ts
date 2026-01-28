import { useState, useEffect } from "react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
  totalMs: number;
}

/**
 * Custom hook for countdown timer functionality.
 * Updates every second until target date is reached.
 *
 * @param targetDate - The date/time to count down to (Date object or ISO string)
 *
 * @example
 * ```tsx
 * const countdown = useCountdown(event.dateTime);
 * <span>{countdown.days}d {countdown.hours}h</span>
 * ```
 */
export function useCountdown(
  targetDate: Date | string | null | undefined,
): CountdownState {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
    totalMs: 0,
  });

  useEffect(() => {
    if (!targetDate) {
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true,
        totalMs: 0,
      });
      return;
    }

    const calculateCountdown = () => {
      const target =
        typeof targetDate === "string" ? new Date(targetDate) : targetDate;
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
          totalMs: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        isComplete: false,
        totalMs: diff,
      });
    };

    // Initial calculation
    calculateCountdown();

    // Update every second
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}

export default useCountdown;
