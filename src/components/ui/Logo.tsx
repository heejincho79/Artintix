import * as React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg
        viewBox="0 0 180 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <text
          x="0"
          y="30"
          className="font-bold text-[32px] tracking-tighter"
          style={{ 
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fill: "#050B15" 
          }}
        >
          Artintix
          <tspan fill="#00A3FF">.</tspan>
        </text>
        {/* Subtle accent line under the 'x' or 'A' could be added here if needed */}
        <rect x="0" y="34" width="20" height="3" rx="1.5" fill="#00A3FF" />
      </svg>
    </div>
  );
}
