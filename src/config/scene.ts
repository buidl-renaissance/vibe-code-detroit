// ============================================
// TYPE DEFINITIONS
// ============================================

export interface StarConfig {
  count: number;
  minSize: number;
  maxSize: number;
  colors: {
    default: string;
    warm: string;
    pink: string;
  };
  /** Every Nth star gets warm color */
  warmFrequency: number;
  /** Every Nth star gets pink color */
  pinkFrequency: number;
}

export interface ParticleConfig {
  count: number;
  minDuration: number;
  maxDuration: number;
  minSize: number;
  maxSize: number;
}

export interface ShootingStarConfig {
  minInterval: number;
  maxInterval: number;
  initialDelayMin: number;
  initialDelayMax: number;
  minDuration: number;
  maxDuration: number;
  minLength: number;
  maxLength: number;
}

export interface CloudConfig {
  count: number;
  minDuration: number;
  maxDuration: number;
  layers: number;
}

export interface FireflyConfig {
  count: number;
  minDuration: number;
  maxDuration: number;
  minSize: number;
  maxSize: number;
}

export interface ShimmerConfig {
  count: number;
}

export interface ScrollConfig {
  smoothness: number;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  background: {
    dark: string;
    light: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
}

export interface SceneConfiguration {
  stars: StarConfig;
  particles: ParticleConfig;
  shootingStar: ShootingStarConfig;
  clouds: CloudConfig;
  fireflies: FireflyConfig;
  shimmer: ShimmerConfig;
  scroll: ScrollConfig;
  colors: ColorPalette;
}

// ============================================
// CONFIGURATION VALUES
// ============================================

export const SCENE_CONFIG: SceneConfiguration = {
  stars: {
    count: 120,
    minSize: 0.8,
    maxSize: 3.2,
    colors: {
      default: "rgba(255,255,255,0.9)",
      warm: "#ffd89b",
      pink: "#ff9eb5",
    },
    warmFrequency: 25,
    pinkFrequency: 18,
  },

  particles: {
    count: 8,
    minDuration: 20,
    maxDuration: 44,
    minSize: 3,
    maxSize: 6,
  },

  shootingStar: {
    minInterval: 8000,
    maxInterval: 25000,
    initialDelayMin: 5000,
    initialDelayMax: 12000,
    minDuration: 1.0,
    maxDuration: 1.8,
    minLength: 50,
    maxLength: 110,
  },

  clouds: {
    count: 12,
    minDuration: 60,
    maxDuration: 180,
    layers: 3,
  },

  fireflies: {
    count: 12,
    minDuration: 6,
    maxDuration: 14,
    minSize: 4,
    maxSize: 10,
  },

  shimmer: {
    count: 20,
  },

  scroll: {
    smoothness: 0.18,
  },

  colors: {
    primary: "#40f4ff", // Cyan/Neon Blue
    secondary: "#ff61a6", // Hot Pink
    tertiary: "#ff914d", // Sunset Orange
    background: {
      dark: "rgba(15, 10, 45, 0.95)",
      light: "rgba(27, 20, 100, 0.4)",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.9)",
      muted: "rgba(255, 255, 255, 0.7)",
    },
  },
} as const;

// ============================================
// SKY COLORS (for day/night transition)
// ============================================

export const SKY_COLORS = {
  morning: {
    top: { r: 135, g: 206, b: 250 }, // Light sky blue
    mid: { r: 176, g: 224, b: 255 }, // Lighter blue
    low: { r: 255, g: 183, b: 140 }, // Warm peachy horizon
    bottom: { r: 255, g: 140, b: 105 }, // Sunset orange tint
  },
  night: {
    top: { r: 5, g: 5, b: 25 }, // Deep space
    mid: { r: 15, g: 10, b: 45 }, // Deep purple
    low: { r: 30, g: 20, b: 60 }, // Purple
    bottom: { r: 40, g: 25, b: 70 }, // Lighter purple
  },
} as const;

// ============================================
// ANIMATION TIMINGS
// ============================================

export const ANIMATION_TIMINGS = {
  /** Neon turn-on delay in seconds */
  neonTurnOnDelay: 0.5,
  /** Neon flicker start delay in seconds */
  neonFlickerDelay: 1.5,
  /** Scroll indicator fade-in delay in seconds */
  scrollIndicatorDelay: 3,
  /** Stats counter animation duration in ms */
  statsCounterDuration: 2000,
  /** Stats counter animation steps */
  statsCounterSteps: 60,
} as const;

// ============================================
// BREAKPOINTS
// ============================================

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 992,
  wide: 1200,
  ultrawide: 1400,
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Linear interpolation between two values
 */
export const lerp = (a: number, b: number, t: number): number =>
  Math.round(a + (b - a) * t);

/**
 * Clamp a value between min and max
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Smoothstep interpolation (ease-in-out)
 */
export const smoothstep = (t: number): number => t * t * (3 - 2 * t);

/**
 * Generate deterministic pseudo-random number based on index
 * Returns a value between 0 and 1
 */
export const pseudoRandom = (index: number): number => {
  const x = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  // Normalize between 0 and 1
  return ((x % 1) + 1) % 1;
};

export default SCENE_CONFIG;
