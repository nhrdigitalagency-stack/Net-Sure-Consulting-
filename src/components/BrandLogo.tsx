import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only' | 'horizontal';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
  }[size];

  const titleSize = {
    sm: 'text-sm font-bold tracking-tight',
    md: 'text-sm sm:text-base font-bold tracking-tight',
    lg: 'text-lg sm:text-xl font-bold tracking-tight',
  }[size];

  const subtitleSize = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric SVG Emblem */}
      <div className={`relative shrink-0 ${iconDimensions} flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 hover:scale-105"
        >
          <defs>
            {/* Primary NSC Green Gradient */}
            <linearGradient id="nscGreenGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#144A32" />
              <stop offset="60%" stopColor="#1E6B49" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>

            {/* Subtle Luxury Gold Gradient */}
            <linearGradient id="nscGoldGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            {/* Shield Outline Glow */}
            <filter id="nscGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#144A32" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Hexagonal Shield Foundation */}
          <polygon
            points="24,3 43,12 43,34 24,45 5,34 5,12"
            fill="currentColor"
            className="text-neutral-900/5 dark:text-white/5"
            stroke="url(#nscGoldGrad)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Interlocking "N" & "S" Dynamic Geometric Monogram */}
          {/* First column / N stem */}
          <path
            d="M13 14 L13 34 M13 14 L24 28 M24 28 L24 14"
            stroke="url(#nscGreenGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* S curve & network convergence */}
          <path
            d="M24 24 L31 24 C33.5 24 35 25.5 35 28 C35 30.5 33.5 32 30.5 32 L24 32"
            stroke="url(#nscGreenGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 20 L27 20 C29.5 20 31 18.5 31 16 C31 13.5 29.5 12 26.5 12 L22 12"
            stroke="url(#nscGreenGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Gold Security & Excellence Beacon */}
          <circle cx="24" cy="24" r="2.2" fill="url(#nscGoldGrad)" />
          <circle cx="43" cy="12" r="1.5" fill="#D4AF37" />
          <circle cx="5" cy="34" r="1.5" fill="#22C55E" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display uppercase ${titleSize} text-neutral-950 dark:text-neutral-50 tracking-tight`}
            >
              NET SURE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block shrink-0 animate-pulse" />
          </div>
          {showSubtitle && (
            <span
              className={`font-mono uppercase font-semibold ${subtitleSize} text-[#144A32] dark:text-[#22C55E] tracking-[0.2em] mt-0.5`}
            >
              CONSULTING
            </span>
          )}
        </div>
      )}
    </div>
  );
};
