import React from "react";

// ============================================
// PREMIUM SVG ICONS
// ============================================

export const TargetIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="#ff61a6"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke="#ff61a6"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <circle
      cx="32"
      cy="32"
      r="12"
      stroke="#ff61a6"
      strokeWidth="2"
      fill="none"
      opacity="0.5"
    />
    <circle cx="32" cy="32" r="4" fill="#ff61a6" />
    <line
      x1="32"
      y1="2"
      x2="32"
      y2="14"
      stroke="#ff61a6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="50"
      x2="32"
      y2="62"
      stroke="#ff61a6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="32"
      x2="14"
      y2="32"
      stroke="#ff61a6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="50"
      y1="32"
      x2="62"
      y2="32"
      stroke="#ff61a6"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const HandshakeIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 28C8 28 14 22 22 22C26 22 28 24 32 24C36 24 38 22 42 22C50 22 56 28 56 28"
      stroke="#40f4ff"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 22L18 32L24 38L32 34L40 38L46 32L42 22"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="32" cy="34" r="3" fill="#40f4ff" />
    <path
      d="M4 30L12 26"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M60 30L52 26"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 38L14 34"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M58 38L50 34"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M24 38L20 48C20 48 26 52 32 52C38 52 44 48 44 48L40 38"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    />
  </svg>
);

export const RocketIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 8C32 8 42 18 42 32C42 46 32 56 32 56C32 56 22 46 22 32C22 18 32 8 32 8Z"
      stroke="#ff914d"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="32" cy="28" r="4" fill="#ff914d" />
    <path
      d="M22 36L12 42L16 48L22 44"
      stroke="#ff914d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M42 36L52 42L48 48L42 44"
      stroke="#ff914d"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M28 56L28 62"
      stroke="#ff914d"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M32 58L32 64"
      stroke="#ff914d"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M36 56L36 62"
      stroke="#ff914d"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <ellipse
      cx="32"
      cy="32"
      rx="6"
      ry="14"
      stroke="#ff914d"
      strokeWidth="1.5"
      opacity="0.5"
      fill="none"
    />
  </svg>
);

export const TimerIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="32"
      cy="36"
      r="24"
      stroke="#ff61a6"
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
      y2="22"
      stroke="#ff61a6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="36"
      x2="42"
      y2="36"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="32" cy="36" r="3" fill="#ff61a6" />
    <rect x="28" y="4" width="8" height="4" rx="1" fill="#ff61a6" />
    <line x1="32" y1="8" x2="32" y2="12" stroke="#ff61a6" strokeWidth="2" />
    <line
      x1="50"
      y1="18"
      x2="54"
      y2="14"
      stroke="#ff61a6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Hour markers */}
    <circle cx="32" cy="16" r="1.5" fill="#40f4ff" />
    <circle cx="52" cy="36" r="1.5" fill="#40f4ff" />
    <circle cx="32" cy="56" r="1.5" fill="#40f4ff" />
    <circle cx="12" cy="36" r="1.5" fill="#40f4ff" />
  </svg>
);

export const LocationIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
      stroke="#ff914d"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="9" r="3" fill="#ff914d" />
  </svg>
);

export const MapIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z"
      stroke="#40f4ff"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="9" y1="3" x2="9" y2="18" stroke="#40f4ff" strokeWidth="1.5" />
    <line x1="15" y1="6" x2="15" y2="21" stroke="#40f4ff" strokeWidth="1.5" />
  </svg>
);
