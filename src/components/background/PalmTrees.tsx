import React from "react";
import {
  PalmTreeLeft,
  PalmTreeRight,
  FrondGroup,
  MountainsContainer,
  MountainsSVG,
} from "./SceneElements";

// ============================================
// LEFT PALM TREE COMPONENT
// ============================================

export const LeftPalmTree: React.FC = () => (
  <PalmTreeLeft viewBox="-150 -50 500 550" preserveAspectRatio="xMinYMax meet">
    <defs>
      <linearGradient id="trunkGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1a0a15" />
        <stop offset="50%" stopColor="#2a1525" />
        <stop offset="100%" stopColor="#1a0a15" />
      </linearGradient>
      <linearGradient id="frondGreenDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0f4428" />
        <stop offset="50%" stopColor="#1a6038" />
        <stop offset="100%" stopColor="#0c3820" />
      </linearGradient>
      <linearGradient id="frondGreenMid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a6038" />
        <stop offset="50%" stopColor="#2d8850" />
        <stop offset="100%" stopColor="#1a6038" />
      </linearGradient>
      <linearGradient id="frondGreenLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2d8850" />
        <stop offset="50%" stopColor="#45a865" />
        <stop offset="100%" stopColor="#2d8850" />
      </linearGradient>
      <linearGradient id="frondGreenDeep" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a3018" />
        <stop offset="50%" stopColor="#0f4020" />
        <stop offset="100%" stopColor="#082510" />
      </linearGradient>
      <radialGradient id="coconutGrad1" cx="30%" cy="30%">
        <stop offset="0%" stopColor="#5a4030" />
        <stop offset="50%" stopColor="#3a2520" />
        <stop offset="100%" stopColor="#1a1010" />
      </radialGradient>
      <radialGradient id="coconutGrad2" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#4a3525" />
        <stop offset="50%" stopColor="#2a1515" />
        <stop offset="100%" stopColor="#150808" />
      </radialGradient>
      <linearGradient id="sandGradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e8d5a3" />
        <stop offset="40%" stopColor="#d4b896" />
        <stop offset="100%" stopColor="#a08060" />
      </linearGradient>
    </defs>

    {/* Curved trunk leaning right */}
    <path
      d="M30 500 Q48 400 66 300 Q84 200 115 125"
      fill="none"
      stroke="url(#trunkGradientLeft)"
      strokeWidth="32"
      strokeLinecap="round"
    />
    <path
      d="M32 500 Q50 400 68 300 Q86 200 117 125"
      fill="none"
      stroke="#2a1828"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M36 480 Q54 380 72 280"
      fill="none"
      stroke="#3a2838"
      strokeWidth="2"
      opacity="0.5"
    />

    {/* DEEPEST back fronds */}
    <FrondGroup style={{ animationDelay: "0.1s" }}>
      <path
        d="M115 118 Q150 65 180 15 Q185 30 180 55 Q165 90 140 115 Q125 122 115 118Z"
        fill="url(#frondGreenDeep)"
      />
      <path
        d="M115 118 Q80 65 50 15 Q45 30 50 55 Q65 90 90 115 Q105 122 115 118Z"
        fill="url(#frondGreenDeep)"
      />
    </FrondGroup>

    {/* Back fronds */}
    <FrondGroup style={{ animationDelay: "0.2s" }}>
      <path
        d="M115 120 Q145 75 170 35 Q175 45 175 60 Q168 80 155 100 Q140 115 115 120Z"
        fill="url(#frondGreenDark)"
      />
      <path
        d="M115 120 Q85 70 55 25 Q50 35 52 50 Q58 75 75 95 Q95 112 115 120Z"
        fill="url(#frondGreenDark)"
      />
    </FrondGroup>

    {/* Top center frond */}
    <FrondGroup style={{ animationDelay: "0s" }}>
      <path
        d="M115 122 Q118 95 125 55 Q135 10 140 -20 Q150 10 145 55 Q138 95 125 122 Q120 124 115 122Z"
        fill="url(#frondGreenMid)"
      />
      <path
        d="M115 120 Q125 85 140 40 Q155 -5 165 -30 Q175 5 165 50 Q148 95 128 120 Q122 122 115 120Z"
        fill="url(#frondGreenLight)"
      />
      <path
        d="M125 85 Q138 70 148 45"
        fill="none"
        stroke="#50b070"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M130 65 Q145 48 158 22"
        fill="none"
        stroke="#50b070"
        strokeWidth="2.5"
        opacity="0.5"
      />
      <path
        d="M122 95 Q110 80 100 55"
        fill="none"
        stroke="#50b070"
        strokeWidth="2.5"
        opacity="0.5"
      />
    </FrondGroup>

    {/* Right-upper fronds */}
    <FrondGroup style={{ animationDelay: "0.5s" }}>
      <path
        d="M115 120 Q145 108 185 88 Q235 62 270 45 Q240 75 195 100 Q155 118 125 124 Q118 124 115 120Z"
        fill="url(#frondGreenDark)"
      />
      <path
        d="M115 122 Q150 108 200 82 Q260 50 300 30 Q265 65 210 95 Q160 118 128 126 Q120 126 115 122Z"
        fill="url(#frondGreenMid)"
      />
      <path
        d="M115 124 Q155 115 215 92 Q285 60 330 40 Q290 75 225 105 Q165 128 130 132 Q122 130 115 124Z"
        fill="url(#frondGreenLight)"
      />
      <path
        d="M155 105 Q195 85 235 62"
        fill="none"
        stroke="#50b070"
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M175 98 Q220 75 265 50"
        fill="none"
        stroke="#50b070"
        strokeWidth="2.5"
        opacity="0.4"
      />
    </FrondGroup>

    {/* Right-middle fronds */}
    <FrondGroup style={{ animationDelay: "0.8s" }}>
      <path
        d="M115 128 Q160 128 215 138 Q280 152 320 165 Q275 158 215 148 Q160 140 128 135 Q120 133 115 128Z"
        fill="url(#frondGreenMid)"
      />
      <path
        d="M115 132 Q165 135 230 150 Q310 172 360 190 Q305 175 230 158 Q165 145 130 140 Q122 138 115 132Z"
        fill="url(#frondGreenLight)"
      />
    </FrondGroup>

    {/* Right-lower fronds */}
    <FrondGroup style={{ animationDelay: "1.1s" }}>
      <path
        d="M115 135 Q150 152 195 185 Q245 225 280 265 Q238 230 190 195 Q150 165 128 148 Q120 142 115 135Z"
        fill="url(#frondGreenDark)"
      />
      <path
        d="M115 140 Q158 162 210 205 Q270 260 310 310 Q262 265 205 215 Q155 175 130 155 Q122 148 115 140Z"
        fill="url(#frondGreenMid)"
      />
    </FrondGroup>

    {/* Left-upper fronds */}
    <FrondGroup style={{ animationDelay: "0.3s" }}>
      <path
        d="M115 120 Q85 108 45 88 Q-5 62 -40 45 Q-10 75 35 100 Q75 118 105 124 Q112 124 115 120Z"
        fill="url(#frondGreenDark)"
      />
      <path
        d="M115 122 Q80 108 30 82 Q-30 50 -70 30 Q-35 65 20 95 Q70 118 102 126 Q110 126 115 122Z"
        fill="url(#frondGreenMid)"
      />
      <path
        d="M115 124 Q75 115 15 92 Q-55 60 -100 40 Q-60 75 5 105 Q65 128 100 132 Q108 130 115 124Z"
        fill="url(#frondGreenLight)"
      />
      <path
        d="M75 105 Q35 85 -5 62"
        fill="none"
        stroke="#50b070"
        strokeWidth="3"
        opacity="0.5"
      />
    </FrondGroup>

    {/* Left-middle fronds */}
    <FrondGroup style={{ animationDelay: "0.6s" }}>
      <path
        d="M115 128 Q70 128 15 138 Q-50 152 -90 165 Q-45 158 15 148 Q70 140 102 135 Q110 133 115 128Z"
        fill="url(#frondGreenMid)"
      />
      <path
        d="M115 132 Q65 135 0 150 Q-80 172 -130 190 Q-75 175 0 158 Q65 145 100 140 Q108 138 115 132Z"
        fill="url(#frondGreenLight)"
      />
    </FrondGroup>

    {/* Left-lower fronds */}
    <FrondGroup style={{ animationDelay: "0.9s" }}>
      <path
        d="M115 135 Q80 152 35 185 Q-15 225 -50 265 Q-8 230 40 195 Q80 165 102 148 Q110 142 115 135Z"
        fill="url(#frondGreenDark)"
      />
      <path
        d="M115 140 Q72 162 20 205 Q-40 260 -80 310 Q-32 265 25 215 Q75 175 100 155 Q108 148 115 140Z"
        fill="url(#frondGreenMid)"
      />
    </FrondGroup>

    {/* Additional back fronds */}
    <FrondGroup style={{ animationDelay: "1.3s" }}>
      <path
        d="M115 118 Q140 80 160 30 Q165 45 162 65 Q150 95 130 115 Q120 120 115 118Z"
        fill="url(#frondGreenDark)"
        opacity="0.8"
      />
      <path
        d="M115 118 Q90 80 70 30 Q65 45 68 65 Q80 95 100 115 Q110 120 115 118Z"
        fill="url(#frondGreenDark)"
        opacity="0.8"
      />
    </FrondGroup>

    {/* Coconuts */}
    <ellipse cx="115" cy="124" rx="11" ry="10" fill="url(#coconutGrad1)" />
    <ellipse cx="112" cy="121" rx="3" ry="2" fill="rgba(90, 70, 50, 0.5)" />
    <ellipse cx="106" cy="131" rx="9" ry="8" fill="url(#coconutGrad2)" />
    <ellipse
      cx="103"
      cy="128"
      rx="2.5"
      ry="1.8"
      fill="rgba(80, 60, 45, 0.4)"
    />
    <ellipse cx="124" cy="130" rx="8" ry="7" fill="url(#coconutGrad1)" />
    <ellipse cx="121" cy="127" rx="2" ry="1.5" fill="rgba(85, 65, 48, 0.45)" />
    <ellipse cx="117" cy="135" rx="6" ry="5.5" fill="url(#coconutGrad2)" />
    <ellipse
      cx="110"
      cy="122"
      rx="5"
      ry="4.5"
      fill="url(#coconutGrad2)"
      opacity="0.7"
    />

    {/* Extra drooping fronds */}
    <FrondGroup style={{ animationDelay: "1.5s" }}>
      <path
        d="M115 145 Q140 175 165 230 Q190 300 200 370 Q175 310 155 250 Q135 195 120 160 Q116 150 115 145Z"
        fill="url(#frondGreenDark)"
      />
      <path
        d="M115 145 Q90 175 65 230 Q40 300 30 370 Q55 310 75 250 Q95 195 110 160 Q114 150 115 145Z"
        fill="url(#frondGreenDark)"
      />
    </FrondGroup>

    {/* More top fronds */}
    <FrondGroup style={{ animationDelay: "0.4s" }}>
      <path
        d="M115 118 Q130 70 155 20 Q160 35 155 55 Q145 85 125 112 Q118 118 115 118Z"
        fill="url(#frondGreenMid)"
      />
      <path
        d="M115 118 Q100 70 75 20 Q70 35 75 55 Q85 85 105 112 Q112 118 115 118Z"
        fill="url(#frondGreenMid)"
      />
    </FrondGroup>

    {/* Sand island */}
    <ellipse cx="45" cy="510" rx="110" ry="35" fill="url(#sandGradientLeft)" />
    <ellipse cx="30" cy="505" rx="60" ry="18" fill="rgba(255, 245, 220, 0.3)" />
  </PalmTreeLeft>
);

// ============================================
// RIGHT PALM TREE COMPONENT
// ============================================

export const RightPalmTree: React.FC = () => (
  <PalmTreeRight viewBox="-150 -50 500 550" preserveAspectRatio="xMaxYMax meet">
    <defs>
      <linearGradient id="trunkGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1a0a15" />
        <stop offset="50%" stopColor="#2a1525" />
        <stop offset="100%" stopColor="#1a0a15" />
      </linearGradient>
      <linearGradient id="frondGreenDarkR" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0f4428" />
        <stop offset="50%" stopColor="#1a6038" />
        <stop offset="100%" stopColor="#0c3820" />
      </linearGradient>
      <linearGradient id="frondGreenMidR" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a6038" />
        <stop offset="50%" stopColor="#2d8850" />
        <stop offset="100%" stopColor="#1a6038" />
      </linearGradient>
      <linearGradient id="frondGreenLightR" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2d8850" />
        <stop offset="50%" stopColor="#45a865" />
        <stop offset="100%" stopColor="#2d8850" />
      </linearGradient>
      <linearGradient id="frondGreenDeepR" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0a3018" />
        <stop offset="50%" stopColor="#0f4020" />
        <stop offset="100%" stopColor="#082510" />
      </linearGradient>
      <radialGradient id="coconutGradR1" cx="70%" cy="30%">
        <stop offset="0%" stopColor="#5a4030" />
        <stop offset="50%" stopColor="#3a2520" />
        <stop offset="100%" stopColor="#1a1010" />
      </radialGradient>
      <radialGradient id="coconutGradR2" cx="65%" cy="35%">
        <stop offset="0%" stopColor="#4a3525" />
        <stop offset="50%" stopColor="#2a1515" />
        <stop offset="100%" stopColor="#150808" />
      </radialGradient>
      <linearGradient id="sandGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e8d5a3" />
        <stop offset="40%" stopColor="#d4b896" />
        <stop offset="100%" stopColor="#a08060" />
      </linearGradient>
    </defs>

    {/* Curved trunk leaning left */}
    <path
      d="M170 500 Q152 400 134 300 Q116 200 85 125"
      fill="none"
      stroke="url(#trunkGradientRight)"
      strokeWidth="32"
      strokeLinecap="round"
    />
    <path
      d="M168 500 Q150 400 132 300 Q114 200 83 125"
      fill="none"
      stroke="#2a1828"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M164 480 Q146 380 128 280"
      fill="none"
      stroke="#3a2838"
      strokeWidth="2"
      opacity="0.5"
    />

    {/* DEEPEST back fronds */}
    <FrondGroup style={{ animationDelay: "0.1s" }}>
      <path
        d="M85 118 Q50 65 20 15 Q15 30 20 55 Q35 90 60 115 Q75 122 85 118Z"
        fill="url(#frondGreenDeepR)"
      />
      <path
        d="M85 118 Q120 65 150 15 Q155 30 150 55 Q135 90 110 115 Q95 122 85 118Z"
        fill="url(#frondGreenDeepR)"
      />
    </FrondGroup>

    {/* Back fronds */}
    <FrondGroup style={{ animationDelay: "0.15s" }}>
      <path
        d="M85 120 Q55 75 30 35 Q25 45 25 60 Q32 80 45 100 Q60 115 85 120Z"
        fill="url(#frondGreenDarkR)"
      />
      <path
        d="M85 120 Q115 70 145 25 Q150 35 148 50 Q142 75 125 95 Q105 112 85 120Z"
        fill="url(#frondGreenDarkR)"
      />
    </FrondGroup>

    {/* Top center frond */}
    <FrondGroup style={{ animationDelay: "0s" }}>
      <path
        d="M85 122 Q82 95 75 55 Q65 10 60 -20 Q50 10 55 55 Q62 95 75 122 Q80 124 85 122Z"
        fill="url(#frondGreenMidR)"
      />
      <path
        d="M85 120 Q75 85 60 40 Q45 -5 35 -30 Q25 5 35 50 Q52 95 72 120 Q78 122 85 120Z"
        fill="url(#frondGreenLightR)"
      />
      <path
        d="M75 85 Q62 70 52 45"
        fill="none"
        stroke="#50b070"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M70 65 Q55 48 42 22"
        fill="none"
        stroke="#50b070"
        strokeWidth="2.5"
        opacity="0.5"
      />
      <path
        d="M78 95 Q90 80 100 55"
        fill="none"
        stroke="#50b070"
        strokeWidth="2.5"
        opacity="0.5"
      />
    </FrondGroup>

    {/* Left-upper fronds */}
    <FrondGroup style={{ animationDelay: "0.5s" }}>
      <path
        d="M85 120 Q55 108 15 88 Q-35 62 -70 45 Q-40 75 5 100 Q45 118 75 124 Q82 124 85 120Z"
        fill="url(#frondGreenDarkR)"
      />
      <path
        d="M85 122 Q50 108 0 82 Q-60 50 -100 30 Q-65 65 -10 95 Q40 118 72 126 Q80 126 85 122Z"
        fill="url(#frondGreenMidR)"
      />
      <path
        d="M85 124 Q45 115 -15 92 Q-85 60 -130 40 Q-90 75 -25 105 Q35 128 70 132 Q78 130 85 124Z"
        fill="url(#frondGreenLightR)"
      />
      <path
        d="M45 105 Q5 85 -35 62"
        fill="none"
        stroke="#50b070"
        strokeWidth="3"
        opacity="0.5"
      />
    </FrondGroup>

    {/* Left-middle fronds */}
    <FrondGroup style={{ animationDelay: "0.8s" }}>
      <path
        d="M85 128 Q40 128 -15 138 Q-80 152 -120 165 Q-75 158 -15 148 Q40 140 72 135 Q80 133 85 128Z"
        fill="url(#frondGreenMidR)"
      />
      <path
        d="M85 132 Q35 135 -30 150 Q-110 172 -160 190 Q-105 175 -30 158 Q35 145 70 140 Q78 138 85 132Z"
        fill="url(#frondGreenLightR)"
      />
    </FrondGroup>

    {/* Left-lower fronds */}
    <FrondGroup style={{ animationDelay: "1.1s" }}>
      <path
        d="M85 135 Q50 152 5 185 Q-45 225 -80 265 Q-38 230 10 195 Q50 165 72 148 Q80 142 85 135Z"
        fill="url(#frondGreenDarkR)"
      />
      <path
        d="M85 140 Q42 162 -10 205 Q-70 260 -110 310 Q-62 265 -5 215 Q45 175 70 155 Q78 148 85 140Z"
        fill="url(#frondGreenMidR)"
      />
    </FrondGroup>

    {/* Right-upper fronds */}
    <FrondGroup style={{ animationDelay: "0.3s" }}>
      <path
        d="M85 120 Q115 108 155 88 Q205 62 240 45 Q210 75 165 100 Q125 118 95 124 Q88 124 85 120Z"
        fill="url(#frondGreenDarkR)"
      />
      <path
        d="M85 122 Q120 108 170 82 Q230 50 270 30 Q235 65 180 95 Q130 118 98 126 Q90 126 85 122Z"
        fill="url(#frondGreenMidR)"
      />
      <path
        d="M85 124 Q125 115 185 92 Q255 60 300 40 Q260 75 195 105 Q135 128 100 132 Q92 130 85 124Z"
        fill="url(#frondGreenLightR)"
      />
      <path
        d="M125 105 Q165 85 205 62"
        fill="none"
        stroke="#50b070"
        strokeWidth="3"
        opacity="0.5"
      />
    </FrondGroup>

    {/* Right-middle fronds */}
    <FrondGroup style={{ animationDelay: "0.6s" }}>
      <path
        d="M85 128 Q130 128 185 138 Q250 152 290 165 Q245 158 185 148 Q130 140 98 135 Q90 133 85 128Z"
        fill="url(#frondGreenMidR)"
      />
      <path
        d="M85 132 Q135 135 200 150 Q280 172 330 190 Q275 175 200 158 Q135 145 100 140 Q92 138 85 132Z"
        fill="url(#frondGreenLightR)"
      />
    </FrondGroup>

    {/* Right-lower fronds */}
    <FrondGroup style={{ animationDelay: "0.9s" }}>
      <path
        d="M85 135 Q120 152 165 185 Q215 225 250 265 Q208 230 160 195 Q120 165 98 148 Q90 142 85 135Z"
        fill="url(#frondGreenDarkR)"
      />
      <path
        d="M85 140 Q128 162 180 205 Q240 260 280 310 Q232 265 175 215 Q125 175 100 155 Q92 148 85 140Z"
        fill="url(#frondGreenMidR)"
      />
    </FrondGroup>

    {/* Additional back fronds */}
    <FrondGroup style={{ animationDelay: "1.3s" }}>
      <path
        d="M85 118 Q60 80 40 30 Q35 45 38 65 Q50 95 70 115 Q80 120 85 118Z"
        fill="url(#frondGreenDarkR)"
        opacity="0.8"
      />
      <path
        d="M85 118 Q110 80 130 30 Q135 45 132 65 Q120 95 100 115 Q90 120 85 118Z"
        fill="url(#frondGreenDarkR)"
        opacity="0.8"
      />
    </FrondGroup>

    {/* Coconuts */}
    <ellipse cx="85" cy="124" rx="11" ry="10" fill="url(#coconutGradR1)" />
    <ellipse cx="88" cy="121" rx="3" ry="2" fill="rgba(90, 70, 50, 0.5)" />
    <ellipse cx="94" cy="131" rx="9" ry="8" fill="url(#coconutGradR2)" />
    <ellipse cx="97" cy="128" rx="2.5" ry="1.8" fill="rgba(80, 60, 45, 0.4)" />
    <ellipse cx="76" cy="130" rx="8" ry="7" fill="url(#coconutGradR1)" />
    <ellipse cx="79" cy="127" rx="2" ry="1.5" fill="rgba(85, 65, 48, 0.45)" />
    <ellipse cx="83" cy="135" rx="6" ry="5.5" fill="url(#coconutGradR2)" />
    <ellipse
      cx="90"
      cy="122"
      rx="5"
      ry="4.5"
      fill="url(#coconutGradR2)"
      opacity="0.7"
    />

    {/* Extra drooping fronds */}
    <FrondGroup style={{ animationDelay: "1.5s" }}>
      <path
        d="M85 145 Q60 175 35 230 Q10 300 0 370 Q25 310 45 250 Q65 195 80 160 Q84 150 85 145Z"
        fill="url(#frondGreenDarkR)"
      />
      <path
        d="M85 145 Q110 175 135 230 Q160 300 170 370 Q145 310 125 250 Q105 195 90 160 Q86 150 85 145Z"
        fill="url(#frondGreenDarkR)"
      />
    </FrondGroup>

    {/* More top fronds */}
    <FrondGroup style={{ animationDelay: "0.4s" }}>
      <path
        d="M85 118 Q70 70 45 20 Q40 35 45 55 Q55 85 75 112 Q82 118 85 118Z"
        fill="url(#frondGreenMidR)"
      />
      <path
        d="M85 118 Q100 70 125 20 Q130 35 125 55 Q115 85 95 112 Q88 118 85 118Z"
        fill="url(#frondGreenMidR)"
      />
    </FrondGroup>

    {/* Sand island */}
    <ellipse
      cx="155"
      cy="510"
      rx="110"
      ry="35"
      fill="url(#sandGradientRight)"
    />
    <ellipse
      cx="170"
      cy="505"
      rx="60"
      ry="18"
      fill="rgba(255, 245, 220, 0.3)"
    />
  </PalmTreeRight>
);

// ============================================
// MOUNTAINS COMPONENT
// ============================================

export const Mountains: React.FC = () => (
  <MountainsContainer>
    <MountainsSVG viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax slice">
      {/* Background mountains */}
      <path
        d="M0 300 L0 180 L80 130 L120 160 L180 95 L240 140 L320 70 L380 120 L460 55 L520 100 L600 45 L680 90 L760 35 L840 85 L920 50 L1000 110 L1080 65 L1140 120 L1200 85 L1200 300 Z"
        fill="rgba(70, 35, 100, 0.35)"
      />

      {/* Mid mountains */}
      <defs>
        <linearGradient id="snowCapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
          <stop offset="25%" stopColor="rgba(230, 240, 255, 0.85)" />
          <stop offset="50%" stopColor="rgba(180, 200, 230, 0.6)" />
          <stop offset="100%" stopColor="rgba(90, 60, 110, 0.7)" />
        </linearGradient>
        <linearGradient id="rockyMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(80, 50, 90, 0.7)" />
          <stop offset="100%" stopColor="rgba(60, 35, 75, 0.8)" />
        </linearGradient>
      </defs>

      {/* Left rocky peaks */}
      <path
        d="M0 300 L0 200 L60 160 L100 190 L160 130 L220 175 L280 110 L340 165 L400 300 Z"
        fill="url(#rockyMountainGrad)"
      />

      {/* CENTER: Large snow-capped peak */}
      <path
        d="M380 300 L450 180 L500 140 L550 85 L600 40 L650 85 L700 140 L750 180 L820 300 Z"
        fill="rgba(75, 50, 95, 0.75)"
      />
      {/* Snow cap */}
      <path
        d="M520 120 L550 85 L600 40 L650 85 L680 120 L655 115 L630 95 L600 70 L570 95 L545 115 Z"
        fill="url(#snowCapGradient)"
      />
      {/* Snow streaks */}
      <path
        d="M560 110 L570 140 L555 160 L565 190"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M640 110 L630 145 L645 170 L635 200"
        fill="none"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Right rocky peaks */}
      <path
        d="M800 300 L860 165 L920 110 L980 160 L1040 120 L1100 175 L1140 140 L1200 190 L1200 300 Z"
        fill="url(#rockyMountainGrad)"
      />

      {/* Foreground mountains */}
      <path
        d="M0 300 L0 230 L40 200 L80 225 L130 180 L180 215 L240 165 L300 210 L370 175 L430 220 L500 185 L560 215 L620 175 L680 210 L740 170 L800 205 L860 165 L920 200 L980 175 L1040 210 L1100 180 L1160 215 L1200 190 L1200 300 Z"
        fill="rgba(20, 10, 35, 0.9)"
      />
    </MountainsSVG>
  </MountainsContainer>
);
