import React from "react";
import { T } from "../theme.js";

export default function Logo({ size = 36, withWordmark = false, animated = true }) {
  const id = React.useId().replace(/[:]/g, "");
  const wm = withWordmark;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        role="img"
        aria-label="EduFinance"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={T.brand} />
            <stop offset="100%" stopColor={T.brand2} />
          </linearGradient>
          <linearGradient id={`${id}-bar`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(11,17,32,0.95)" />
            <stop offset="100%" stopColor="rgba(11,17,32,0.55)" />
          </linearGradient>
        </defs>
        {/* Rounded square background */}
        <rect x="0" y="0" width="40" height="40" rx="11" fill={`url(#${id}-bg)`} />
        {/* Subtle highlight */}
        <rect x="0.5" y="0.5" width="39" height="14" rx="11" fill="rgba(255,255,255,0.10)" />
        {/* Three ascending bars */}
        <g className={animated ? "ef-logo-bars" : ""}>
          <rect x="8" y="24" width="5.5" height="9" rx="1.2" fill={`url(#${id}-bar)`} />
          <rect x="16.5" y="18" width="5.5" height="15" rx="1.2" fill={`url(#${id}-bar)`} />
          <rect x="25" y="11" width="5.5" height="22" rx="1.2" fill={`url(#${id}-bar)`} />
        </g>
        {/* Ascending line connecting bar tops */}
        <path
          d="M 10.75 24 L 19.25 18 L 27.75 11"
          stroke="rgba(11,17,32,0.85)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Dots at bar tops */}
        <circle cx="10.75" cy="24" r="1.6" fill="rgba(11,17,32,0.95)" />
        <circle cx="19.25" cy="18" r="1.6" fill="rgba(11,17,32,0.95)" />
        <circle cx="27.75" cy="11" r="1.6" fill="rgba(11,17,32,0.95)" />
      </svg>
      {wm && (
        <span style={{ fontFamily: T.serif, fontSize: size * 0.62, fontWeight: 600, letterSpacing: -0.3, color: T.text }}>
          Edu<span style={{ color: T.brand }}>Finance</span>
        </span>
      )}
    </span>
  );
}
