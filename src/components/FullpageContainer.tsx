import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FullpageContainerProps {
  activeFrame: number;
  setActiveFrame: (frame: number) => void;
  children: React.ReactNode;
}

export const FullpageContainer: React.FC<FullpageContainerProps> = ({
  activeFrame,
  setActiveFrame,
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // GSAP ScrollTrigger clip-path reveal animations on frame internal elements
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const frameElements = document.querySelectorAll<HTMLElement>('section[id^="frame-"]');

      frameElements.forEach((frame) => {
        const revealTargets = frame.querySelectorAll<HTMLElement>(
          'h1, h2, h3, .grid, .reveal-item'
        );

        if (revealTargets.length > 0) {
          gsap.fromTo(
            revealTargets,
            {
              clipPath: 'polygon(-5% -5%, 105% -5%, 105% -5%, -5% -5%)',
              opacity: 0,
              y: 20,
            },
            {
              clipPath: 'polygon(-10% -10%, 110% -10%, 110% 140%, -10% 140%)',
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.06,
              ease: 'power3.out',
              clearProps: 'clipPath', // CRITICAL: completely removes clip-path from inline style when finished so letters/descenders are never clipped
              scrollTrigger: {
                trigger: frame,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Track window scroll progress and active section via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(winScroll > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = id.match(/frame-(\d+)/);
            if (match) {
              const num = parseInt(match[1], 10);
              setActiveFrame(num);
            }
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    Array.from({ length: 11 }, (_, i) => i + 1).forEach((num) => {
      const el = document.getElementById(`frame-${num}`);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [setActiveFrame]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      {/* Top Slim Scroll Progress Line with Gold Glow */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-neutral-200/40 dark:bg-neutral-800/40 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#B45309] via-[#D4AF37] to-[#F59E0B] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Flowing Children Content - Full Width Edge-to-Edge */}
      <main className="w-full">{children}</main>

      {/* Back to Top Floating Button with Rounded & Gold/Noir Styling */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-full border border-amber-500/30 dark:border-amber-400/30 bg-white/90 dark:bg-[#0D0F13]/90 backdrop-blur-md text-neutral-800 dark:text-amber-300 hover:text-amber-500 dark:hover:text-amber-200 hover:border-amber-400 shadow-[0_4px_15px_rgba(212,175,55,0.2)] transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer"
          aria-label="Retour en haut de page"
        >
          <ChevronUp className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        </button>
      )}
    </div>
  );
};
