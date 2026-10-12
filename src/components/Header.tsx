import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  activeFrame: number;
  onNavigate: (frameIndex: number) => void;
  onOpenEligibility: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeFrame, onNavigate, onOpenEligibility }) => {
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.presentation'), frame: 2 },
    { label: t('nav.services'), frame: 3 },
    { label: t('nav.differenciators'), frame: 4 },
    { label: t('nav.pricing'), frame: 5 },
    { label: t('nav.infra'), frame: 8 },
    { label: t('nav.contact'), frame: 11 },
  ];

  const handleNavClick = (frame: number) => {
    onNavigate(frame);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-transparent'
            : isScrolled
            ? 'bg-white/80 dark:bg-[#090A0B]/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-xs'
            : 'bg-transparent backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick(1)}
            className="text-left hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 focus:outline-hidden"
            aria-label="Net Sure Consulting - Retour accueil"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => {
              const isActive = activeFrame === link.frame;
              return (
                <button
                  key={link.frame}
                  onClick={() => handleNavClick(link.frame)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-neutral-950 dark:hover:text-white ${
                    isActive
                      ? 'text-neutral-950 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#144A32] dark:bg-[#22C55E]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Language, Theme, CTA, Mobile Menu) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Lang switch */}
            <div className="flex items-center border border-neutral-300/80 dark:border-neutral-700/80 bg-transparent p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 transition-colors ${
                  language === 'fr'
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
                aria-label="Français"
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 transition-colors ${
                  language === 'en'
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Theme switch */}
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-neutral-300/80 dark:border-neutral-700/80 bg-transparent text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              aria-label={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-neutral-200" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800" />
              )}
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => handleNavClick(11)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-white bg-[#144A32] hover:bg-[#0E3624] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] dark:text-neutral-950 transition-colors whitespace-nowrap shrink-0"
            >
              <span>{t('nav.cta')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger (Transparent) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-transparent text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-500/10 dark:hover:bg-neutral-400/10 transition-colors rounded-none focus:outline-hidden"
              aria-label={mobileMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-white/90 dark:bg-[#090A0B]/92 pt-20 px-6 pb-8 flex flex-col justify-between backdrop-blur-xl transition-all">
          <div className="space-y-4">
            <div className="pb-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <BrandLogo size="sm" />
              <div className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                Menu
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: t('nav.home'), frame: 1 },
                { label: t('nav.presentation'), frame: 2 },
                { label: t('nav.services'), frame: 3 },
                { label: t('nav.differenciators'), frame: 4 },
                { label: t('nav.pricing'), frame: 5 },
                { label: t('nav.consulting'), frame: 6 },
                { label: t('nav.training'), frame: 7 },
                { label: t('nav.infra'), frame: 8 },
                { label: t('nav.about'), frame: 9 },
                { label: t('nav.careers'), frame: 10 },
                { label: t('nav.contact'), frame: 11 },
              ].map((item) => (
                <button
                  key={item.frame}
                  onClick={() => handleNavClick(item.frame)}
                  className={`text-left text-lg font-display py-2 border-b border-neutral-100 dark:border-neutral-900 flex items-center justify-between ${
                    activeFrame === item.frame
                      ? 'text-[#144A32] dark:text-[#22C55E] font-semibold'
                      : 'text-neutral-800 dark:text-neutral-200'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-neutral-400">
                    {String(item.frame).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 space-y-3 border-t border-neutral-200 dark:border-neutral-800">
            {/* Mobile Theme and Language toggles */}
            <div className="flex items-center justify-between py-2 border-b border-neutral-100 dark:border-neutral-800/80 text-xs font-mono">
              <span className="text-neutral-500 dark:text-neutral-400">Mode d'affichage</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-sans"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mode Clair</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-neutral-700" />
                    <span>Mode Sombre</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEligibility();
              }}
              className="w-full py-3 text-center text-sm font-semibold border border-[#144A32] dark:border-[#22C55E] text-[#144A32] dark:text-[#22C55E] cursor-pointer"
            >
              {t('hero.ctaEligibility')}
            </button>
            <button
              onClick={() => handleNavClick(11)}
              className="w-full py-3 text-center text-sm font-semibold bg-[#144A32] dark:bg-[#22C55E] text-white dark:text-neutral-950 cursor-pointer shadow-md"
            >
              {t('nav.cta')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
