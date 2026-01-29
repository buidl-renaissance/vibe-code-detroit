/**
 * Animation-related type definitions.
 */

export type ShootingStarDirection = "tlbr" | "trbl" | "horizontal";

export interface ShootingStarData {
  id: number;
  top: number;
  left: number;
  direction: ShootingStarDirection;
  duration: number;
  length: number;
}

export interface StarData {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
  brightness: number;
  color?: string;
}

export interface CloudData {
  id: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
  scale: number;
  layer: number;
}

export interface ParticleData {
  id: number;
  delay: number;
  duration: number;
  left: number;
  size: number;
}

export interface FireflyData {
  id: number;
  left: number;
  bottom: number;
  delay: number;
  duration: number;
  size: number;
}

export interface ShimmerSparkleData {
  id: number;
  top: number;
  left: number;
  delay: number;
  size: number;
}

export interface RippleData {
  id: number;
  x: number;
  y: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
