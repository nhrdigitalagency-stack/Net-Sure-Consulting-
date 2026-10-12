import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only' | 'horizontal' | 'image';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  }[size];

  const fullImageHeight = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
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

  if (variant === 'image') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <img
          src="/logo.png"
          alt="Net Sure Consulting"
          className={`${fullImageHeight} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Golden Eagle Shield Emblem */}
      <div className={`relative shrink-0 ${iconDimensions} flex items-center justify-center`}>
        <img
          src="/logo-mark.png"
          alt="Net Sure Consulting"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-105"
        />
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

