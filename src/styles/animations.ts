import { keyframes, css } from "styled-components";

// ============================================
// Reduced Motion Support User Preference
// ============================================

export const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;

// ============================================
// KEYFRAME ANIMATIONS
// ============================================

// Floating particles
export const floatUp = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
    transform: translateY(90vh) scale(1);
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-10vh) scale(0.5);
    opacity: 0;
  }
`;

// Star twinkle
export const twinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

// Palm tree sway - realistic wind-blown motion
export const palmSwayLeft = keyframes`
  0%, 100% {
    transform: rotate(5deg) skewX(0deg);
  }
  20% {
    transform: rotate(6deg) skewX(0.3deg);
  }
  40% {
    transform: rotate(7.5deg) skewX(0.5deg);
  }
  60% {
    transform: rotate(6.5deg) skewX(0.3deg);
  }
  80% {
    transform: rotate(5.5deg) skewX(0.1deg);
  }
`;

export const palmSwayRight = keyframes`
  0%, 100% {
    transform: rotate(-5deg) skewX(0deg);
  }
  20% {
    transform: rotate(-6deg) skewX(-0.3deg);
  }
  40% {
    transform: rotate(-7.5deg) skewX(-0.5deg);
  }
  60% {
    transform: rotate(-6.5deg) skewX(-0.3deg);
  }
  80% {
    transform: rotate(-5.5deg) skewX(-0.1deg);
  }
`;

// Frond sway for natural leaf movement
export const frondSway = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(1deg) scale(1.005);
  }
  50% {
    transform: rotate(0deg) scale(1);
  }
  75% {
    transform: rotate(-0.5deg) scale(0.995);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

// Cloud drift animation
export const cloudDrift = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
`;

// Ocean wave animations
export const waveMotion = keyframes`
  0% {
    transform: translateX(0) scaleY(1);
  }
  50% {
    transform: translateX(-25px) scaleY(1.05);
  }
  100% {
    transform: translateX(0) scaleY(1);
  }
`;

export const waveFlow = keyframes`
  0%, 100% {
    transform: translateX(0) translateY(0) scaleX(1);
  }
  25% {
    transform: translateX(-15px) translateY(-4px) scaleX(1.02);
  }
  50% {
    transform: translateX(-30px) translateY(-2px) scaleX(1);
  }
  75% {
    transform: translateX(-15px) translateY(-5px) scaleX(0.98);
  }
`;

export const waveFlow2 = keyframes`
  0%, 100% {
    transform: translateX(0) translateY(0) scaleX(1);
  }
  25% {
    transform: translateX(12px) translateY(-3px) scaleX(0.98);
  }
  50% {
    transform: translateX(25px) translateY(-1px) scaleX(1);
  }
  75% {
    transform: translateX(12px) translateY(-4px) scaleX(1.02);
  }
`;

export const waveFlow3 = keyframes`
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  33% {
    transform: translateX(-20px) translateY(-3px);
  }
  66% {
    transform: translateX(10px) translateY(-5px);
  }
`;

// Sun glow animation
export const sunGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 40px rgba(255, 100, 50, 0.8));
  }
  50% {
    filter: drop-shadow(0 0 60px rgba(255, 100, 50, 1));
  }
`;

// Moon glow animation
export const moonGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(200, 220, 255, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 35px rgba(200, 220, 255, 0.9));
  }
`;

// Water shimmer
export const waterShimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

// Glow pulse for stats
export const glowPulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px currentColor;
  }
  50% {
    text-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
  }
`;

// Neon turn on effect
export const neonTurnOn = keyframes`
  0% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(255, 97, 166, 0));
  }
  50% {
    opacity: 0.5;
    filter: brightness(0.5) drop-shadow(0 0 5px rgba(255, 97, 166, 0.3));
  }
  100% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(255, 97, 166, 0.8)) drop-shadow(0 0 20px rgba(255, 97, 166, 0.6)) drop-shadow(0 0 30px rgba(255, 97, 166, 0.4));
  }
`;

// Neon flicker effect
export const neonFlicker = keyframes`
  0% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
  }
  10% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
  20% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
  }
  30% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
  40% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
  }
  50% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
  100% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
`;

// Scroll bounce animation
export const scrollBounce = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Fade in animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Grid animations
export const gridMove = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 60px;
  }
`;

export const gridGlow = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
`;

// ============================================
// SHOOTING STARS
// ============================================

// Direction: Top-left to bottom-right
export const shootingStarTLBR = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(350px) translateY(280px);
    opacity: 0;
  }
`;

// Direction: Top-right to bottom-left
export const shootingStarTRBL = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(-350px) translateY(280px);
    opacity: 0;
  }
`;

// Direction: Horizontal across sky (slight downward angle)
export const shootingStarHorizontal = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(400px) translateY(60px);
    opacity: 0;
  }
`;

export const shootingStarGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #40f4ff);
  }
  50% {
    filter: drop-shadow(0 0 6px #fff) drop-shadow(0 0 12px #40f4ff) drop-shadow(0 0 20px #ff61a6);
  }
`;

// ============================================
// FIREFLIES / AMBIENT GLOW
// ============================================

export const fireflyFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  25% {
    transform: translate(15px, -20px) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translate(-10px, -35px) scale(0.8);
    opacity: 0.6;
  }
  75% {
    transform: translate(20px, -15px) scale(1.1);
    opacity: 0.9;
  }
  90% {
    opacity: 0.4;
  }
`;

export const fireflyPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 4px 2px rgba(255, 230, 150, 0.8);
  }
  50% {
    box-shadow: 0 0 8px 4px rgba(255, 230, 150, 1), 0 0 16px 8px rgba(255, 200, 100, 0.5);
  }
`;

// ============================================
// HORIZON GLOW
// ============================================

export const horizonPulse = keyframes`
  0%, 100% {
    opacity: 0.6;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.9;
    transform: scaleY(1.1);
  }
`;

// ============================================
// OCEAN SHIMMER SPARKLES
// ============================================

export const shimmerSparkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const shimmerDrift = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(5px) translateY(-3px);
  }
`;

// ============================================
// NEW: CLICK RIPPLE
// ============================================

export const rippleExpand = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`;
