import {
  useState,
  useEffect,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";

interface UseIntersectionAnimationOptions {
  /** Root margin for the observer. Default: "0px 0px -50px 0px" */
  rootMargin?: string;
  /** Intersection threshold (0-1). Default: 0.1 */
  threshold?: number;
  /** Whether to trigger only once. Default: true */
  triggerOnce?: boolean;
}

interface UseIntersectionAnimationResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

/**
 * Custom hook for triggering animations when elements enter the viewport.
 * Uses Intersection Observer for efficient scroll-triggered reveals.
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useIntersectionAnimation<HTMLDivElement>();
 * <RevealOnScroll ref={ref} $isVisible={isVisible}>
 *   Content
 * </RevealOnScroll>
 * ```
 */
export function useIntersectionAnimation<
  T extends HTMLElement = HTMLDivElement,
>(
  options: UseIntersectionAnimationOptions = {},
): UseIntersectionAnimationResult<T> {
  const {
    rootMargin = "0px 0px -50px 0px",
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Hook for managing multiple intersection animations at once.
 * Useful when you have multiple sections that need reveal animations.
 *
 * @example
 * ```tsx
 * const { refs, visibility } = useMultipleIntersectionAnimation(3);
 * <Section ref={refs[0]} $isVisible={visibility[0]}>...</Section>
 * <Section ref={refs[1]} $isVisible={visibility[1]}>...</Section>
 * ```
 */
export function useMultipleIntersectionAnimation(
  count: number,
  options: UseIntersectionAnimationOptions = {},
): {
  refs: MutableRefObject<HTMLDivElement | null>[];
  visibility: boolean[];
} {
  const {
    rootMargin = "0px 0px -50px 0px",
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  // Create refs array - using MutableRefObject for refs that we create manually
  const refs = useRef<MutableRefObject<HTMLDivElement | null>[]>(
    Array.from({ length: count }, () => ({ current: null })),
  ).current;

  const [visibility, setVisibility] = useState<boolean[]>(
    Array(count).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((ref) => ref.current === entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibility((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              if (triggerOnce && entry.target) {
                observer.unobserve(entry.target);
              }
            } else if (!triggerOnce) {
              setVisibility((prev) => {
                const next = [...prev];
                next[index] = false;
                return next;
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [refs, rootMargin, threshold, triggerOnce]);

  return { refs, visibility };
}

export default useIntersectionAnimation;
