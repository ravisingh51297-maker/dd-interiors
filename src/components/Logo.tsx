import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  iconOnly?: boolean;
  lightText?: boolean;
}

export default function Logo({ className = "", size = 44, iconOnly = false, lightText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Interlocking "DD" Monogram with Integrated House Silhouette */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 transition-all duration-300 group-hover:scale-105 ${
          lightText
            ? "text-white group-hover:text-brand-gold"
            : "text-brand-blue-500 group-hover:text-brand-blue-600"
        }`}
      >
        <defs>
          {/* Real Cut-Out Mask to keep the gaps transparent on all backgrounds */}
          <mask id="logo-house-cutout">
            {/* White means keep: entire logo area */}
            <rect width="100" height="100" fill="white" />
            
            {/* Black means cut out: House shape with 2px protective boundary padding */}
            {/* Peak at 57, 28; Left eave at 37, 47; Right eave at 77, 47; Bottom at Y=70 */}
            <polygon
              points="57,25 36,46 42,46 42,66 72,66 72,46 78,46"
              fill="black"
            />
          </mask>
        </defs>

        {/* The Interlocking "DD" Letterforms (masked by the house cutout) */}
        <g mask="url(#logo-house-cutout)">
          {/* Left "D" - Elegant Serif Letterform */}
          <path
            d="M 14 21.5 H 39.5 C 57 21.5 60 34 60 50 C 60 66 57 78.5 39.5 78.5 H 14 V 74 H 20 V 26 H 14 Z 
               M 29 26 H 37 C 48 26 50 34 50 50 C 50 66 48 74 37 74 H 29 Z"
            fill="currentColor"
            fillRule="evenodd"
          />

          {/* Right "D" - Interlocking Offset Serif Letterform */}
          <path
            d="M 36 21.5 H 61.5 C 79 21.5 82 34 82 50 C 82 66 79 78.5 61.5 78.5 H 36 V 74 H 42 V 26 H 36 Z 
               M 51 26 H 59 C 70 26 72 34 72 50 C 72 66 70 74 59 74 H 51 Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </g>

        {/* House Elements drawn inside the cutout area with crisp transparent margin spacing */}
        {/* House Roof - Elegant Gable shape */}
        <polygon
          points="57,30 42,43 45,46 57,35 69,46 72,43"
          fill="currentColor"
        />

        {/* House Window - 2x2 Grid Pane */}
        <g fill="currentColor">
          {/* Top Left Pane */}
          <rect x="52" y="49" width="4" height="4" rx="0.5" />
          {/* Top Right Pane */}
          <rect x="58" y="49" width="4" height="4" rx="0.5" />
          {/* Bottom Left Pane */}
          <rect x="52" y="55" width="4" height="4" rx="0.5" />
          {/* Bottom Right Pane */}
          <rect x="58" y="55" width="4" height="4" rx="0.5" />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`font-serif text-[22px] font-bold tracking-[0.08em] leading-none transition-colors duration-300 ${
              lightText
                ? "text-white group-hover:text-brand-gold"
                : "text-brand-blue-500 group-hover:text-brand-blue-600"
            }`}
          >
            DD INTERIORS
          </span>
          <span className="text-[9px] uppercase tracking-[0.28em] font-semibold text-brand-gold mt-1.5">
            Premium Luxury Space
          </span>
        </div>
      )}
    </div>
  );
}
