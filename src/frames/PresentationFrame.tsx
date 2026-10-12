import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Compass, Code2, PenTool, ArrowRight, TrendingUp, CheckCircle, BarChart3 } from 'lucide-react';

interface PresentationFrameProps {
  onNavigateToContact: () => void;
}

export const PresentationFrame: React.FC<PresentationFrameProps> = ({ onNavigateToContact }) => {
  const { t } = useTranslation();

  return (
    <section
      id="frame-2"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-[#0B0D0F] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Dot Matrix & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-dot-matrix opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[400px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-20 z-10">
        {/* Narrative & Visual Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase text-amber-500 dark:text-amber-400 tracking-widest bg-amber-500/10 border border-amber-400/30 shadow-xs">
              {t('presentation.frameTitle')}
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
              {t('presentation.headline')}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
              {t('presentation.body1')}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              {t('presentation.body2')}
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase font-mono btn-noir text-amber-400 border-amber-400/40 hover:border-amber-400 cursor-pointer shadow-sm"
              >
                <span>Planifier un audit d'acquisition sur mesure</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Visual Performance Growth Card with Rounded Borders and Gold Touches */}
          <div className="lg:col-span-6">
            <div className="card-luxury p-6 sm:p-8 rounded-3xl border border-amber-500/30 dark:border-amber-400/30 bg-white/95 dark:bg-[#0D0F13]/95 shadow-2xl space-y-6 transition-all">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                  <span className="font-display font-bold text-base text-neutral-950 dark:text-white">
                    Impact Mesurable sur 90 Jours
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-500 dark:text-amber-400 font-bold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 shadow-xs">
                  +185% Visibilité
                </span>
              </div>

              {/* Visual Benchmark Bars with Rounded Radiuses */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-neutral-500">Avant intervention NSC (Mois 0)</span>
                    <span className="text-neutral-400">Position 18 · 12 appels/mois</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800/80 h-3 rounded-full overflow-hidden">
                    <div className="bg-neutral-400 dark:bg-neutral-600 h-3 w-[15%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-neutral-500">Mise à niveau NAP & Schema (Mois 1)</span>
                    <span className="text-neutral-400">Position 7 · 48 appels/mois</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800/80 h-3 rounded-full overflow-hidden">
                    <div className="bg-neutral-600 dark:bg-neutral-400 h-3 w-[45%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      Objectif Atteint (Mois 3)
                    </span>
                    <span className="font-bold text-amber-500 dark:text-amber-400">
                      Top 3 Maps · 165 appels/mois
                    </span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800/80 h-3.5 rounded-full overflow-hidden p-0.5 border border-amber-400/30">
                    <div className="bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] h-full w-[95%] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800">
                  <span className="text-neutral-400 block font-mono text-[11px]">Taux de conversion</span>
                  <span className="font-bold text-neutral-950 dark:text-white text-base">+38.5%</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-400/30">
                  <span className="text-amber-600/80 dark:text-amber-300/80 block font-mono text-[11px]">Rentabilité moyenne</span>
                  <span className="font-bold text-amber-500 dark:text-amber-400 text-base">x4.8 ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Cards with Rounded Borders & Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="card-luxury p-8 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 bg-white/95 dark:bg-[#0D0F13]/95 space-y-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-900">
              <span className="text-xs font-mono text-amber-500 dark:text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30">
                MÉTHODE 01
              </span>
              <Compass className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-950 dark:text-white leading-snug pb-1">
              {t('presentation.pillars.strategy.title')}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              {t('presentation.pillars.strategy.desc')}
            </p>
          </div>

          <div className="card-luxury p-8 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 bg-white/95 dark:bg-[#0D0F13]/95 space-y-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-900">
              <span className="text-xs font-mono text-amber-500 dark:text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30">
                MÉTHODE 02
              </span>
              <Code2 className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-950 dark:text-white leading-snug pb-1">
              {t('presentation.pillars.technique.title')}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              {t('presentation.pillars.technique.desc')}
            </p>
          </div>

          <div className="card-luxury p-8 rounded-3xl border border-amber-500/20 dark:border-amber-400/20 bg-white/95 dark:bg-[#0D0F13]/95 space-y-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-900">
              <span className="text-xs font-mono text-amber-500 dark:text-amber-400 font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30">
                MÉTHODE 03
              </span>
              <PenTool className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-950 dark:text-white leading-snug pb-1">
              {t('presentation.pillars.content.title')}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              {t('presentation.pillars.content.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
