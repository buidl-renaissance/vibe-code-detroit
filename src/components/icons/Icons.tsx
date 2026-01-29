import React from "react";

// ============================================
// PREMIUM SVG ICONS WITH GRADIENTS & GLOWS
// ============================================

export const TargetIcon: React.FC = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="targetGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff61a6" />
        <stop offset="100%" stopColor="#ff3d8a" />
      </linearGradient>
      <linearGradient id="targetGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff91c1" />
        <stop offset="100%" stopColor="#ff61a6" />
      </linearGradient>
      <radialGradient id="targetGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff61a6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ff61a6" stopOpacity="0" />
      </radialGradient>
      <filter id="targetBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    {/* Outer glow */}
    <circle cx="40" cy="40" r="32" fill="url(#targetGlow)" />
    {/* Outer ring */}
    <circle
      cx="40"
      cy="40"
      r="34"
      stroke="url(#targetGrad1)"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Mid ring with subtle fill */}
    <circle
      cx="40"
      cy="40"
      r="26"
      stroke="url(#targetGrad2)"
      strokeWidth="2"
      fill="rgba(255, 97, 166, 0.05)"
    />
    {/* Inner ring */}
    <circle
      cx="40"
      cy="40"
      r="18"
      stroke="#ff61a6"
      strokeWidth="1.5"
      fill="rgba(255, 97, 166, 0.08)"
      opacity="0.8"
    />
    {/* Innermost ring */}
    <circle
      cx="40"
      cy="40"
      r="10"
      stroke="#ff91c1"
      strokeWidth="1.5"
      fill="rgba(255, 97, 166, 0.1)"
      opacity="0.7"
    />
    {/* Center dot with glow */}
    <circle
      cx="40"
      cy="40"
      r="5"
      fill="url(#targetGrad1)"
      filter="url(#targetBlur)"
    />
    <circle cx="40" cy="40" r="4" fill="#ff61a6" />
    <circle cx="40" cy="40" r="2" fill="#ffffff" opacity="0.8" />
    {/* Crosshairs */}
    <line
      x1="40"
      y1="2"
      x2="40"
      y2="16"
      stroke="url(#targetGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="40"
      y1="64"
      x2="40"
      y2="78"
      stroke="url(#targetGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="40"
      x2="16"
      y2="40"
      stroke="url(#targetGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="64"
      y1="40"
      x2="78"
      y2="40"
      stroke="url(#targetGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Accent dots */}
    <circle cx="40" cy="8" r="2" fill="#ff91c1" />
    <circle cx="40" cy="72" r="2" fill="#ff91c1" />
    <circle cx="8" cy="40" r="2" fill="#ff91c1" />
    <circle cx="72" cy="40" r="2" fill="#ff91c1" />
  </svg>
);

export const HandshakeIcon: React.FC = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="handGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#40f4ff" />
        <stop offset="100%" stopColor="#00d4e8" />
      </linearGradient>
      <linearGradient id="handGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00b8cc" />
        <stop offset="100%" stopColor="#7cf8ff" />
      </linearGradient>
      <radialGradient id="handGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#40f4ff" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#40f4ff" stopOpacity="0" />
      </radialGradient>
      <filter id="handBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
      </filter>
    </defs>
    {/* Background glow */}
    <ellipse cx="40" cy="40" rx="35" ry="30" fill="url(#handGlow)" />
    {/* Left hand path */}
    <path
      d="M8 32C8 32 12 26 20 24C26 22 30 24 36 28L44 34"
      stroke="url(#handGrad1)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Right hand path */}
    <path
      d="M72 32C72 32 68 26 60 24C54 22 50 24 44 28L36 34"
      stroke="url(#handGrad2)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Handshake center */}
    <path
      d="M32 36L40 42L48 36"
      stroke="url(#handGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Wrist/arm details - left */}
    <path
      d="M20 24L14 34L18 42L28 46"
      stroke="url(#handGrad1)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.8"
    />
    {/* Wrist/arm details - right */}
    <path
      d="M60 24L66 34L62 42L52 46"
      stroke="url(#handGrad2)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.8"
    />
    {/* Connection sparkle center */}
    <circle
      cx="40"
      cy="40"
      r="5"
      fill="url(#handGrad1)"
      filter="url(#handBlur)"
    />
    <circle cx="40" cy="40" r="4" fill="#40f4ff" />
    <circle cx="40" cy="40" r="2" fill="#ffffff" />
    {/* Emanating connection lines */}
    <path
      d="M28 48L24 58C24 58 30 64 40 64C50 64 56 58 56 58L52 48"
      stroke="url(#handGrad1)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
    {/* Sparkles */}
    <circle cx="24" cy="20" r="2" fill="#7cf8ff" opacity="0.8" />
    <circle cx="56" cy="20" r="2" fill="#7cf8ff" opacity="0.8" />
    <circle cx="16" cy="45" r="1.5" fill="#40f4ff" opacity="0.6" />
    <circle cx="64" cy="45" r="1.5" fill="#40f4ff" opacity="0.6" />
    {/* Small energy lines */}
    <line
      x1="4"
      y1="34"
      x2="12"
      y2="30"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <line
      x1="76"
      y1="34"
      x2="68"
      y2="30"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

export const RocketIcon: React.FC = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rocketGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffb070" />
        <stop offset="50%" stopColor="#ff914d" />
        <stop offset="100%" stopColor="#ff6b2b" />
      </linearGradient>
      <linearGradient id="rocketGrad2" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#ffd4a8" />
        <stop offset="100%" stopColor="#ff914d" />
      </linearGradient>
      <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#ff914d" />
        <stop offset="40%" stopColor="#ff6b2b" />
        <stop offset="100%" stopColor="#ff3d00" />
      </linearGradient>
      <radialGradient id="rocketGlow" cx="50%" cy="60%" r="50%">
        <stop offset="0%" stopColor="#ff914d" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ff914d" stopOpacity="0" />
      </radialGradient>
      <filter id="rocketBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    {/* Background glow */}
    <ellipse cx="40" cy="48" rx="28" ry="32" fill="url(#rocketGlow)" />
    {/* Rocket body */}
    <path
      d="M40 6C40 6 54 18 54 38C54 54 40 68 40 68C40 68 26 54 26 38C26 18 40 6 40 6Z"
      stroke="url(#rocketGrad1)"
      strokeWidth="3"
      fill="rgba(255, 145, 77, 0.1)"
    />
    {/* Inner body detail */}
    <path
      d="M40 12C40 12 50 22 50 38C50 50 40 60 40 60C40 60 30 50 30 38C30 22 40 12 40 12Z"
      stroke="url(#rocketGrad2)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    {/* Window/porthole */}
    <circle
      cx="40"
      cy="32"
      r="6"
      fill="rgba(255, 145, 77, 0.2)"
      stroke="url(#rocketGrad1)"
      strokeWidth="2"
    />
    <circle cx="40" cy="32" r="4" fill="url(#rocketGrad2)" />
    <circle cx="38" cy="30" r="1.5" fill="#ffffff" opacity="0.8" />
    {/* Left fin */}
    <path
      d="M26 42L12 52L16 62L26 54"
      stroke="url(#rocketGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(255, 145, 77, 0.15)"
    />
    {/* Right fin */}
    <path
      d="M54 42L68 52L64 62L54 54"
      stroke="url(#rocketGrad1)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(255, 145, 77, 0.15)"
    />
    {/* Flame trails */}
    <ellipse
      cx="40"
      cy="74"
      rx="8"
      ry="4"
      fill="url(#flameGrad)"
      filter="url(#rocketBlur)"
      opacity="0.8"
    />
    <path
      d="M34 68L32 78"
      stroke="#ffb070"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M40 70L40 80"
      stroke="url(#flameGrad)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M46 68L48 78"
      stroke="#ffb070"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* Speed lines / particles */}
    <line
      x1="18"
      y1="24"
      x2="10"
      y2="20"
      stroke="#ffd4a8"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <line
      x1="62"
      y1="24"
      x2="70"
      y2="20"
      stroke="#ffd4a8"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <circle cx="8" cy="36" r="2" fill="#ff914d" opacity="0.4" />
    <circle cx="72" cy="36" r="2" fill="#ff914d" opacity="0.4" />
  </svg>
);

export const TimerIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff91c1" />
        <stop offset="100%" stopColor="#ff61a6" />
      </linearGradient>
      <radialGradient id="timerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff61a6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ff61a6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="32" cy="36" r="24" fill="url(#timerGlow)" />
    <circle
      cx="32"
      cy="36"
      r="24"
      stroke="url(#timerGrad)"
      strokeWidth="2.5"
      fill="none"
    />
    <circle
      cx="32"
      cy="36"
      r="20"
      stroke="#ff61a6"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
    />
    <line
      x1="32"
      y1="36"
      x2="32"
      y2="20"
      stroke="#ff61a6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="36"
      x2="44"
      y2="36"
      stroke="#40f4ff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="32" cy="36" r="4" fill="#ff61a6" />
    <circle cx="32" cy="36" r="2" fill="#ffffff" opacity="0.8" />
    <rect x="28" y="4" width="8" height="5" rx="1.5" fill="url(#timerGrad)" />
    <line x1="32" y1="9" x2="32" y2="12" stroke="#ff61a6" strokeWidth="2" />
    <line
      x1="50"
      y1="18"
      x2="55"
      y2="13"
      stroke="#ff61a6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Hour markers */}
    <circle cx="32" cy="16" r="2" fill="#40f4ff" />
    <circle cx="52" cy="36" r="2" fill="#40f4ff" />
    <circle cx="32" cy="56" r="2" fill="#40f4ff" />
    <circle cx="12" cy="36" r="2" fill="#40f4ff" />
  </svg>
);

export const LocationIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="locGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffb070" />
        <stop offset="100%" stopColor="#ff914d" />
      </linearGradient>
      <radialGradient id="locGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#ff914d" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#ff914d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="12" cy="10" rx="8" ry="10" fill="url(#locGlow)" />
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
      stroke="url(#locGrad)"
      strokeWidth="2"
      fill="rgba(255, 145, 77, 0.1)"
    />
    <circle cx="12" cy="9" r="3.5" fill="url(#locGrad)" />
    <circle cx="11" cy="8" r="1" fill="#ffffff" opacity="0.7" />
  </svg>
);

export const MapIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7cf8ff" />
        <stop offset="100%" stopColor="#40f4ff" />
      </linearGradient>
      <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#40f4ff" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#40f4ff" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="url(#mapGlow)" />
    <path
      d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z"
      stroke="url(#mapGrad)"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="rgba(64, 244, 255, 0.1)"
    />
    <line x1="9" y1="3" x2="9" y2="18" stroke="#40f4ff" strokeWidth="1.5" />
    <line x1="15" y1="6" x2="15" y2="21" stroke="#40f4ff" strokeWidth="1.5" />
    <circle cx="9" cy="10" r="1.5" fill="#7cf8ff" />
    <circle cx="15" cy="13" r="1.5" fill="#7cf8ff" />
  </svg>
);
