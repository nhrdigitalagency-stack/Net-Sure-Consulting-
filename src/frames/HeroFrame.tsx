import React, { useState, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowRight, Search, Star, ShieldCheck, ImageIcon, RotateCcw } from 'lucide-react';

interface HeroFrameProps {
  onOpenEligibility: () => void;
  onNavigateToContact: () => void;
  onNextFrame: () => void;
}

export const HeroFrame: React.FC<HeroFrameProps> = ({
  onOpenEligibility,
  onNavigateToContact,
}) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customBg, setCustomBg] = useState<string | null>(() => {
    try {
      return localStorage.getItem('nsc_hero_bg');
    } catch {
      return null;
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomBg(reader.result);
          try {
            localStorage.setItem('nsc_hero_bg', reader.result);
          } catch {}
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetBg = () => {
    setCustomBg(null);
    try {
      localStorage.removeItem('nsc_hero_bg');
    } catch {}
  };

  return (
    <section
      id="frame-1"
      className="section-hover-gold relative w-full min-h-[92vh] flex flex-col justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Image: Équipe de développeurs au travail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <picture>
          <source srcSet={customBg || "/images/hero-developers.webp"} type="image/webp" />
          <img
            src={customBg || "/images/hero-developers.png"}
            alt="Équipe de développeurs Net Sure Consulting au travail"
            className="w-full h-full object-cover object-center lg:object-right opacity-40 dark:opacity-35 filter saturate-110 contrast-105"
            referrerPolicy="no-referrer"
          />
        </picture>
        {/* Directional Vignettes for Maximum Legibility & Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/35 dark:from-[#090A0B]/95 dark:via-[#090A0B]/85 dark:to-[#090A0B]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-[#090A0B]/60 dark:via-transparent dark:to-[#090A0B]" />
      </div>

      {/* Subtle Architectural Glow & Grid Accents */}
      <div className="absolute inset-0 bg-grid-overlay opacity-50 pointer-events-none z-0" />
      <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[600px] sm:w-[850px] h-[450px] bg-[#144A32]/15 dark:bg-[#22C55E]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-24 w-[450px] sm:w-[650px] h-[450px] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/12 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto w-full space-y-14 z-10">
        {/* 2-Column High-End Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide border border-amber-400/40 bg-amber-500/10 text-amber-500 dark:text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.12)]">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{t('hero.kicker')}</span>
              </div>

              {/* Background indicator & photo customization option */}
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-100/90 dark:bg-neutral-900/90 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700/80 backdrop-blur-xs">
                <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                <span>Équipe Développeurs Net Sure</span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="ml-1 text-[10px] text-amber-600 dark:text-amber-400 underline hover:text-amber-500 font-semibold cursor-pointer"
                  title="Changer l'image d'arrière-plan ou importer une photo"
                >
                  {customBg ? 'Modifier' : 'Personnaliser'}
                </button>
                {customBg && (
                  <button
                    type="button"
                    onClick={handleResetBg}
                    className="ml-1 text-[10px] text-red-400 hover:text-red-300 flex items-center gap-0.5 cursor-pointer"
                    title="Rétablir l'illustration officielle des services"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>Défaut</span>
                  </button>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] pb-2 overflow-visible text-neutral-950 dark:text-white">
              {t('hero.title')}
            </h1>

            <p className="text-lg sm:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans max-w-2xl font-normal">
              {t('hero.subtitle')}
            </p>

            <div className="pt-1">
              <p className="text-xs sm:text-sm font-mono tracking-tight text-neutral-800 dark:text-neutral-200 border-l-2 border-amber-400 pl-4 py-2 bg-neutral-100/80 dark:bg-neutral-900/80 rounded-r-2xl backdrop-blur-xs">
                {t('hero.punchline')}
              </p>
            </div>

            {/* Action Buttons with Rounded Curves and Noir & Or Theme */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenEligibility}
                className="btn-gold px-8 py-4 text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 group cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.35)]"
              >
                <span>{t('hero.ctaEligibility')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onNavigateToContact}
                className="btn-noir px-8 py-4 text-xs sm:text-sm font-semibold tracking-wide text-center cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                {t('hero.ctaAudit')}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Simulation of Google Maps Top 3 Engine with Rounded Edges */}
          <div className="lg:col-span-5">
            <div className="card-luxury relative p-6 sm:p-7 space-y-5 rounded-3xl border border-amber-500/30 dark:border-amber-400/30 bg-white/95 dark:bg-[#0D0F13]/95 backdrop-blur-md shadow-2xl transition-all">
              {/* Browser / Search Console Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-500 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Search className="w-3.5 h-3.5" />
                  <span>Google Maps Local Pack</span>
                </div>
              </div>

              {/* Local Search Top 3 Results Preview */}
              <div className="space-y-3">
                {/* Result #1 - Net Sure Client (Rounded-2xl with Gold Ring) */}
                <div className="p-4 rounded-2xl border-2 border-amber-400/80 dark:border-amber-400/80 bg-amber-500/10 dark:bg-amber-400/10 space-y-2 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] text-neutral-950 shadow-xs">
                          #1 TOP LOCAL
                        </span>
                        <span className="text-[11px] font-mono text-amber-600 dark:text-amber-300 font-medium">
                          Vérifié Google Business
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-neutral-950 dark:text-white mt-1">
                        Cabinet Conseil & Expertise Paris
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-neutral-900 dark:text-white">4.9</span>
                    <span className="text-neutral-500 font-mono">(48 avis récents vérifiés)</span>
                  </div>

                  <div className="text-xs text-neutral-600 dark:text-neutral-400 font-sans flex items-center justify-between pt-1">
                    <span>Paris & Île-de-France</span>
                    <span className="text-amber-600 dark:text-amber-300 font-mono font-bold">+145 appels / mois</span>
                  </div>
                </div>

                {/* Result #2 & #3 (Competitors Outranked) */}
                <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 opacity-70 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-mono text-neutral-400">#2 Établissement Concurrent A</span>
                    <div className="text-neutral-500">3.8 ★ (12 avis) · Visibilité standard</div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-md bg-neutral-200/50 dark:bg-neutral-800">Outranked</span>
                </div>

                <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 opacity-50 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-mono text-neutral-400">#3 Praticien Concurrent B</span>
                    <div className="text-neutral-500">4.1 ★ (8 avis) · Fiche non optimisée</div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-md bg-neutral-200/50 dark:bg-neutral-800">Outranked</span>
                </div>
              </div>

              {/* Bottom SLA Stamp */}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Engagement Contractuel 90 Jours</span>
                </span>
                <span className="text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">100% Garanti</span>
              </div>

              {/* Dedicated Development Team Badge */}
              <div className="mt-3 p-3 rounded-2xl border border-amber-500/25 dark:border-amber-400/25 bg-neutral-50/90 dark:bg-[#07080A]/90 backdrop-blur-md flex items-center gap-3.5 shadow-sm">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-amber-400/40">
                  <picture>
                    <source srcSet="/images/hero-developers.webp" type="image/webp" />
                    <img
                      src="/images/hero-developers.png"
                      alt="Équipe technique Net Sure Consulting"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="text-xs space-y-0.5 leading-snug">
                  <div className="font-bold text-neutral-950 dark:text-white flex items-center gap-1.5 font-display">
                    <span>Équipe de Développeurs Dédiée</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-[11px] font-sans">
                    Ingénieurs web & spécialistes SEO basés à Paris 18e
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Strip with Rounded Cards & Gold Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <div className="card-luxury p-6 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 bg-neutral-50/80 dark:bg-[#0D0F13]/80 backdrop-blur-xs shadow-xs transition-all">
            <span className="block text-xs font-mono text-amber-600/80 dark:text-amber-400/80 uppercase mb-1.5 font-bold">
              {t('hero.statsLabel1')}
            </span>
            <div className="text-3xl font-display font-extrabold text-neutral-950 dark:text-white pb-1">
              {t('hero.statsVal1')}
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
              Algorithme Google Maps & Pack Local
            </span>
          </div>

          <div className="card-luxury p-6 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 bg-neutral-50/80 dark:bg-[#0D0F13]/80 backdrop-blur-xs shadow-xs transition-all">
            <span className="block text-xs font-mono text-amber-600/80 dark:text-amber-400/80 uppercase mb-1.5 font-bold">
              {t('hero.statsLabel2')}
            </span>
            <div className="text-3xl font-display font-extrabold text-neutral-950 dark:text-white pb-1">
              {t('hero.statsVal2')}
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
              Déploiement méthodologique et indexation
            </span>
          </div>

          <div className="card-luxury p-6 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 bg-neutral-50/80 dark:bg-[#0D0F13]/80 backdrop-blur-xs shadow-xs transition-all">
            <span className="block text-xs font-mono text-amber-600/80 dark:text-amber-400/80 uppercase mb-1.5 font-bold">
              {t('hero.statsLabel3')}
            </span>
            <div className="text-3xl font-display font-extrabold text-neutral-950 dark:text-white pb-1">
              {t('hero.statsVal3')}
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 block">
              Satisfaction garantie & maintien durable
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
