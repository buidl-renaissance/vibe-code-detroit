import styled from "styled-components";
import {
  floatUp,
  twinkle,
  cloudDrift,
  waveFlow,
  waveFlow2,
  waveFlow3,
  sunGlow,
  moonGlow,
  gridMove,
  gridGlow,
  palmSwayLeft,
  palmSwayRight,
  frondSway,
} from "../../styles/animations";

// ============================================
// SKY & CELESTIAL COMPONENTS
// ============================================

// Sky overlay for day-night transition
export const SkyOverlay = styled.div<{ $scrollY: number; $maxScroll: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  background: ${(props) => {
    const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
    const nightOpacity = Math.min(0.85, scrollProgress * 0.9);
    return `linear-gradient(
      180deg,
      rgba(5, 5, 25, ${nightOpacity}) 0%,
      rgba(15, 10, 45, ${nightOpacity * 0.9}) 30%,
      rgba(30, 20, 60, ${nightOpacity * 0.7}) 60%,
      rgba(40, 25, 70, ${nightOpacity * 0.5}) 100%
    )`;
  }};
  transition: background 0.3s linear;
`;

// Stars container
export const StarsContainer = styled.div<{
  $scrollY: number;
  $maxScroll: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  contain: strict;
  opacity: ${(props) => {
    const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
    return Math.min(1, scrollProgress * 1.5);
  }};
  transition: opacity 0.3s linear;
`;

// Individual star
export const Star = styled.div<{
  $top: number;
  $left: number;
  $delay: number;
  $size: number;
  $brightness?: number;
  $color?: string;
}>`
  position: absolute;
  top: ${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: ${(props) =>
    props.$color ||
    (props.$brightness && props.$brightness > 0.7
      ? "#fff"
      : "rgba(255,255,255,0.9)")};
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.$size * 3}px
    ${(props) =>
      props.$color ||
      (props.$brightness && props.$brightness > 0.5
        ? "#40f4ff"
        : "rgba(64, 244, 255, 0.6)")};
  animation: ${twinkle} ${(props) => 2 + props.$delay * 1.2}s ease-in-out
    infinite;
  animation-delay: ${(props) => props.$delay * -2}s;
  will-change: opacity;
`;

// Large sunset sun - with smoother CSS transition for parallax
export const SunsetSun = styled.div<{ $scrollY: number; $maxScroll: number }>`
  position: fixed;
  bottom: ${(props) => {
    const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
    // Smoother easing for sun movement
    const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);
    return 55 - easedProgress * 47;
  }}vh;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  height: 280px;
  z-index: 0;
  animation: ${sunGlow} 4s ease-in-out infinite;
  transition: bottom 0.1s linear;
  will-change: bottom;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    bottom: ${(props) => {
      const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
      const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);
      return 45 - easedProgress * 38;
    }}vh;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      to bottom,
      #ff6b6b 0%,
      #ff8e53 30%,
      #ffb347 60%,
      #ffd89b 100%
    );
  }
`;

// Moon component - rises as sun sets, stays visible when scrolling up
export const Moon = styled.div<{ $scrollY: number; $maxScroll: number }>`
  position: fixed;
  top: ${(props) => {
    const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
    const easedProgress = Math.pow(scrollProgress, 0.7);
    return 120 - easedProgress * 112;
  }}vh;
  right: 15%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5f5ff 0%, #e8ecf5 40%, #d0d8e8 100%);
  z-index: 0;
  animation: ${moonGlow} 4s ease-in-out infinite;
  transition: top 0.1s linear, opacity 0.3s ease-out;
  will-change: top, opacity;
  /* Moon stays visible once it appears - no fade out on scroll up */
  opacity: ${(props) => {
    const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
    // Moon fades in after 20% scroll, but stays visible
    return scrollProgress > 0.15 ? Math.min(1, (scrollProgress - 0.15) * 3) : 0;
  }};
  box-shadow: inset -15px -10px 0 rgba(180, 190, 210, 0.4),
    0 0 40px rgba(200, 220, 255, 0.5);

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    right: 10%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 25%;
    left: 20%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: rgba(180, 190, 210, 0.3);
    box-shadow: 30px 15px 0 8px rgba(180, 190, 210, 0.25),
      15px 45px 0 5px rgba(180, 190, 210, 0.2),
      50px 35px 0 4px rgba(180, 190, 210, 0.15);
  }
`;

// ============================================
// CLOUDS
// ============================================

export const CloudsContainer = styled.div<{
  $scrollY: number;
  $maxScroll: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  opacity: ${(props) => {
    const scrollProgress = Math.min(props.$scrollY / props.$maxScroll, 1);
    return Math.max(0.3, 1 - scrollProgress * 0.7);
  }};
  transition: opacity 0.3s linear;
`;

export const Cloud = styled.div<{
  $top: number;
  $duration: number;
  $delay: number;
  $opacity: number;
  $scale: number;
  $layer: number;
}>`
  position: absolute;
  top: ${(props) => props.$top}%;
  left: 0;
  width: ${(props) => 300 + props.$layer * 80}px;
  height: ${(props) => 80 + props.$layer * 30}px;
  opacity: ${(props) => props.$opacity};
  transform: scale(${(props) => props.$scale});
  animation: ${cloudDrift} ${(props) => props.$duration}s linear
    ${(props) => props.$delay}s infinite;
  will-change: transform;
  filter: blur(${(props) => props.$layer * 0.5}px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${(props) => {
      const baseOpacity = 0.12 + props.$layer * 0.04;
      return `rgba(255, ${200 + props.$layer * 20}, ${
        220 + props.$layer * 15
      }, ${baseOpacity})`;
    }};
    border-radius: 50%;
  }

  &::before {
    width: ${(props) => 120 + props.$layer * 40}px;
    height: ${(props) => 50 + props.$layer * 20}px;
    top: ${(props) => 20 + props.$layer * 5}px;
    left: 0;
  }

  &::after {
    width: ${(props) => 160 + props.$layer * 50}px;
    height: ${(props) => 65 + props.$layer * 25}px;
    top: ${(props) => 5 + props.$layer * 3}px;
    left: ${(props) => 60 + props.$layer * 20}px;
  }
`;

export const CloudPuff = styled.div<{ $layer?: number }>`
  position: absolute;
  background: ${(props) =>
    `rgba(255, ${190 + (props.$layer || 0) * 20}, ${
      210 + (props.$layer || 0) * 15
    }, ${0.1 + (props.$layer || 0) * 0.03})`};
  border-radius: 50%;
  width: ${(props) => 100 + (props.$layer || 0) * 30}px;
  height: ${(props) => 45 + (props.$layer || 0) * 15}px;
  top: ${(props) => 20 + (props.$layer || 0) * 5}px;
  left: ${(props) => 100 + (props.$layer || 0) * 30}px;
`;

export const CloudPuffExtra = styled.div<{ $layer?: number }>`
  position: absolute;
  background: ${(props) =>
    `rgba(255, ${185 + (props.$layer || 0) * 15}, ${
      205 + (props.$layer || 0) * 10
    }, ${0.08 + (props.$layer || 0) * 0.02})`};
  border-radius: 50%;
  width: ${(props) => 70 + (props.$layer || 0) * 25}px;
  height: ${(props) => 35 + (props.$layer || 0) * 12}px;
  top: ${(props) => 35 + (props.$layer || 0) * 8}px;
  left: ${(props) => 180 + (props.$layer || 0) * 40}px;
`;

// ============================================
// PARTICLES
// ============================================

export const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  contain: strict;
`;

export const Particle = styled.div<{
  $delay: number;
  $duration: number;
  $left: number;
  $size: number;
}>`
  position: absolute;
  left: ${(props) => props.$left}%;
  bottom: -10px;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: #40f4ff;
  border-radius: 50%;
  animation: ${floatUp} ${(props) => props.$duration}s linear
    ${(props) => props.$delay}s infinite;
  opacity: 0;
  will-change: transform, opacity;
`;

// ============================================
// OCEAN & WATER
// ============================================

export const OceanContainer = styled.div<{ $scrollY: number }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 22vh;
  max-height: 22vh;
  z-index: 1;
  overflow: hidden;
`;

export const WaveLayer = styled.div<{ $index: number }>`
  position: absolute;
  bottom: ${(props) => props.$index * 15}%;
  left: -10%;
  right: -10%;
  height: 50%;
  background: ${(props) => {
    const baseBlue = 35 + props.$index * 20;
    const opacity = 0.3 + props.$index * 0.15;
    return `linear-gradient(180deg, 
      rgba(15, ${baseBlue}, ${baseBlue + 70}, ${opacity * 0.4}) 0%,
      rgba(20, ${baseBlue + 15}, ${baseBlue + 90}, ${opacity}) 50%,
      rgba(10, ${baseBlue - 5}, ${baseBlue + 50}, ${opacity * 1.1}) 100%
    )`;
  }};
  border-radius: ${(props) => {
    const variation = props.$index * 5;
    return `${50 + variation}% ${45 - variation}% ${55 + variation}% ${
      50 - variation
    }% / 70% 65% 35% 30%`;
  }};
  animation: ${(props) => {
      const anims = [waveFlow, waveFlow2, waveFlow3];
      return anims[props.$index % 3];
    }}
    ${(props) => 5 + props.$index * 1.2}s ease-in-out infinite;
  animation-delay: ${(props) => props.$index * -0.8}s;
`;

export const Ocean = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(40, 80, 140, 0) 0%,
    rgba(30, 65, 120, 0.4) 25%,
    rgba(20, 50, 100, 0.6) 50%,
    rgba(15, 40, 80, 0.8) 75%,
    rgba(10, 25, 55, 0.95) 100%
  );
`;

export const SunReflection = styled.div<{ $scrollY: number }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => 150 + props.$scrollY * 0.1}px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 150, 100, 0.6) 0%,
    rgba(255, 120, 80, 0.4) 15%,
    rgba(255, 100, 70, 0.25) 35%,
    rgba(255, 80, 60, 0.1) 60%,
    transparent 100%
  );
  filter: blur(25px);
  transition: width 0.15s linear;
`;

// ============================================
// MOUNTAINS
// ============================================

export const MountainsContainer = styled.div`
  position: fixed;
  bottom: 8vh;
  left: 0;
  right: 0;
  height: 40vh;
  z-index: 0;
  pointer-events: none;
`;

export const MountainsSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// ============================================
// SYNTHWAVE GRID
// ============================================

export const SynthwaveGrid = styled.div`
  position: fixed;
  bottom: 0;
  left: -50%;
  right: -50%;
  height: 30vh;
  max-height: 30vh;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(255, 97, 166, 0.3) 1px,
        transparent 1px
      ),
      linear-gradient(rgba(64, 244, 255, 0.2) 1px, transparent 1px);
    background-size: 60px 25px;
    transform: perspective(400px) rotateX(65deg);
    transform-origin: center bottom;
    animation: ${gridMove} 15s linear infinite,
      ${gridGlow} 5s ease-in-out infinite;
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    height: 20vh;
    max-height: 20vh;
  }
`;

// ============================================
// PALM TREES
// ============================================

export const PalmTreeLeft = styled.svg`
  position: fixed;
  bottom: 0;
  left: -5%;
  width: 550px;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  transform-origin: bottom center;
  animation: ${palmSwayLeft} 8s ease-in-out infinite;
  overflow: visible;

  @media (max-width: 1400px) {
    width: 480px;
    left: -8%;
  }

  @media (max-width: 1200px) {
    width: 400px;
    left: -10%;
  }

  @media (max-width: 992px) {
    width: 320px;
    height: 85vh;
    left: -12%;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 60vh;
    left: -15%;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 50vh;
    left: -18%;
  }
`;

export const PalmTreeRight = styled.svg`
  position: fixed;
  bottom: 0;
  right: -5%;
  width: 550px;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  transform-origin: bottom center;
  animation: ${palmSwayRight} 8s ease-in-out infinite;
  animation-delay: -3s;
  overflow: visible;

  @media (max-width: 1400px) {
    width: 480px;
    right: -8%;
  }

  @media (max-width: 1200px) {
    width: 400px;
    right: -10%;
  }

  @media (max-width: 992px) {
    width: 320px;
    height: 85vh;
    right: -12%;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 60vh;
    right: -15%;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 50vh;
    right: -18%;
  }
`;

export const FrondGroup = styled.g`
  transform-origin: center;
  animation: ${frondSway} 8s ease-in-out infinite;
`;

// ============================================
// SCANLINE & EFFECTS
// ============================================

export const ScanlineOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10000;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.015) 2px,
    rgba(0, 0, 0, 0.015) 4px
  );
`;

export const MouseGlow = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(
    circle,
    rgba(64, 244, 255, 0.1) 0%,
    rgba(255, 97, 166, 0.05) 30%,
    transparent 60%
  );
  transform: translate(
    ${(props) => props.$x - 150}px,
    ${(props) => props.$y - 150}px
  );
  will-change: transform;

  @media (max-width: 768px) {
    display: none;
  }
`;
