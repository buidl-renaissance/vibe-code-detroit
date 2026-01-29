import styled, { css } from "styled-components";
import {
  glowPulse,
  neonTurnOn,
  neonFlicker,
  scrollBounce,
  fadeIn,
} from "../../styles/animations";

// ============================================
// PAGE LAYOUT
// ============================================

export const Page = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: visible;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 20% 80%,
        rgba(255, 97, 166, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(64, 244, 255, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(255, 145, 77, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

export const Main = styled.main`
  max-width: 900px;
  text-align: center;
  z-index: 5;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// ============================================
// HERO SECTION
// ============================================

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const TitleImage = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    height: 250px;
  }
`;

export const VibeImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    animation: ${neonTurnOn} 0.3s ease-in-out 0.5s forwards;
    filter: brightness(0) drop-shadow(0 0 0px rgba(255, 97, 166, 0));
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      filter: brightness(1) drop-shadow(0 0 5px rgba(255, 97, 166, 0.8))
        drop-shadow(0 0 10px rgba(255, 97, 166, 0.6))
        drop-shadow(0 0 15px rgba(255, 97, 166, 0.4));
    }
  }
`;

export const CodeDetroitImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    animation: ${neonFlicker} 3s ease-in-out 1.5s forwards;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      filter: brightness(1) drop-shadow(0 0 5px rgba(64, 244, 255, 0.8))
        drop-shadow(0 0 10px rgba(64, 244, 255, 0.6))
        drop-shadow(0 0 15px rgba(64, 244, 255, 0.4));
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 3s forwards;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: translateX(-50%) scale(1.1);

    &::after {
      animation: ${scrollBounce} 1s ease-in-out infinite;
      text-shadow:
        0 0 20px rgba(64, 244, 255, 1),
        0 0 30px rgba(64, 244, 255, 0.8),
        0 0 40px rgba(64, 244, 255, 0.6),
        0 0 50px rgba(64, 244, 255, 0.4);
      filter: drop-shadow(0 0 12px rgba(64, 244, 255, 1));
    }
  }

  &::after {
    content: "⌄";
    color: #40f4ff;
    font-size: 4rem;
    font-weight: bold;
    animation: ${scrollBounce} 1.5s ease-in-out infinite;
    text-shadow:
      0 0 15px rgba(64, 244, 255, 0.8),
      0 0 25px rgba(64, 244, 255, 0.6),
      0 0 35px rgba(64, 244, 255, 0.4),
      0 0 45px rgba(64, 244, 255, 0.2);
    filter: drop-shadow(0 0 8px rgba(64, 244, 255, 0.8));
    transition: all 0.3s ease;
  }
`;

// ============================================
// TEXT COMPONENTS
// ============================================

export const HeroTextContainer = styled.div`
  background: rgba(15, 10, 45, 0.65);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  border: 1px solid rgba(64, 244, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #40f4ff;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const Tagline = styled.div`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const TaglineText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #ff61a6;
  font-style: italic;
  text-shadow: 0 0 20px rgba(255, 97, 166, 0.4);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #40f4ff;
  margin: 0 0 2rem 0;
  font-family: "Orbitron", sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow:
    0 0 10px rgba(64, 244, 255, 0.5),
    0 0 20px rgba(64, 244, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin: 0 0 1.5rem 0;
  }
`;

// ============================================
// SCROLL REVEAL
// ============================================

export const RevealOnScroll = styled.div<{
  $isVisible: boolean;
  $delay?: number;
}>`
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  transition-delay: ${(props) => props.$delay || 0}s;

  ${(props) =>
    props.$isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

// ============================================
// FOOTER
// ============================================

export const Footer = styled.footer`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(27, 20, 100, 0.3);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(64, 244, 255, 0.2);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  z-index: 11;

  &:hover {
    color: #40f4ff;
    background: rgba(64, 244, 255, 0.1);
    box-shadow: 0 0 8px rgba(64, 244, 255, 0.3);
  }
`;

// ============================================
// STATS SECTION
// ============================================

export const StatsSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 2rem;
  background: rgba(27, 20, 100, 0.4);
  border-radius: 30px;
  border: 1px solid rgba(64, 244, 255, 0.3);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 97, 166, 0.1) 0%,
      transparent 50%,
      rgba(64, 244, 255, 0.1) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 2rem 1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const StatItem = styled.div<{ $isVisible: boolean; $delay: number }>`
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
  transition-delay: ${(props) => props.$delay}s;

  ${(props) =>
    props.$isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const StatNumber = styled.div<{ $color: string }>`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.$color};
  font-family: "Orbitron", sans-serif;
  animation: ${glowPulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// ============================================
// WHAT IS VIBE CODING SECTION
// ============================================

export const WhatIsVibeSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 2rem 1rem;
  }
`;

export const VibeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
    margin: 2rem auto 0;
  }
`;

export const VibeCard = styled.div<{ $borderColor: string }>`
  padding: 2.5rem 2rem;
  background: linear-gradient(
    165deg,
    rgba(35, 25, 90, 0.8) 0%,
    rgba(20, 15, 60, 0.9) 50%,
    rgba(15, 10, 45, 0.95) 100%
  );
  border-radius: 24px;
  border: 1px solid ${(props) => props.$borderColor}60;
  backdrop-filter: blur(20px);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
  transform-style: preserve-3d;
  perspective: 1000px;
  will-change: transform;
  contain: layout style;

  /* Top gradient glow */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: radial-gradient(
      ellipse 80% 50% at 50% 0%,
      ${(props) => props.$borderColor}30 0%,
      ${(props) => props.$borderColor}10 40%,
      transparent 70%
    );
    pointer-events: none;
    transition: all 0.4s ease;
  }

  /* Animated border glow */
  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      ${(props) => props.$borderColor} 0%,
      transparent 30%,
      transparent 70%,
      ${(props) => props.$borderColor}80 100%
    );
    border-radius: 26px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02) rotateX(2deg);
    border-color: ${(props) => props.$borderColor};
    box-shadow:
      0 20px 50px ${(props) => props.$borderColor}35,
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 0 1px ${(props) => props.$borderColor}40 inset,
      0 0 80px ${(props) => props.$borderColor}15;

    &::before {
      height: 150px;
      background: radial-gradient(
        ellipse 100% 60% at 50% 0%,
        ${(props) => props.$borderColor}50 0%,
        ${(props) => props.$borderColor}20 40%,
        transparent 70%
      );
    }

    &::after {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    &:hover {
      transform: translateY(-6px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const VibeIcon = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  /* Glow ring behind icon */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    z-index: -1;
  }

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 12px currentColor);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;

    &::before {
      width: 84px;
      height: 84px;
    }
  }
`;

export const VibeCardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const VibeCardText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-family: "Poppins", sans-serif;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

// ============================================
// COUNTDOWN SECTION
// ============================================

export const CountdownSection = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 97, 166, 0.2) 0%,
    rgba(64, 244, 255, 0.2) 100%
  );
  border-radius: 20px;
  border: 2px solid #ff61a6;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CountdownTitle = styled.h3`
  font-size: 1.2rem;
  color: #ff61a6;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CountdownTimer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountdownValue = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #40f4ff;
  font-family: "Orbitron", sans-serif;
  text-shadow: 0 0 20px rgba(64, 244, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CountdownLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// ============================================
// EVENTS SECTION
// ============================================

export const EventsSection = styled.section`
  margin: 3rem 0;
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const EventCard = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.4);
  border: 2px solid #40f4ff;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow:
    0 0 20px rgba(64, 244, 255, 0.3),
    inset 0 0 20px rgba(64, 244, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1.5rem;
    border-radius: 15px;
  }

  &:hover {
    box-shadow:
      0 0 30px rgba(64, 244, 255, 0.5),
      inset 0 0 30px rgba(64, 244, 255, 0.2);
    transform: scale(1.02);

    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

export const EventTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ff61a6;
  margin: 0 0 1rem 0;
  font-family: "Poppins", sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin: 0 0 0.8rem 0;
  }
`;

export const EventDate = styled.div`
  font-size: 1.3rem;
  color: #40f4ff;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

export const EventLocation = styled.div`
  font-size: 1.1rem;
  color: #ff914d;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

export const EventDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.5rem 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0 0 1.2rem 0;
  }
`;

export const GroupName = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

export const EventButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: rgba(64, 244, 255, 0.2);
  color: #40f4ff;
  text-decoration: none;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border: 2px solid #40f4ff;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(64, 244, 255, 0.4);
    box-shadow: 0 0 15px rgba(64, 244, 255, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #40f4ff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;

export const NoEventsText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.3);
  border-radius: 15px;
  border: 1px solid rgba(64, 244, 255, 0.2);
`;
