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
            <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold block">
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
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase font-mono text-[#144A32] dark:text-[#22C55E] hover:underline"
              >
                <span>Planifier un audit d'acquisition sur mesure</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Performance Growth Card */}
          <div className="lg:col-span-6">
            <div className="hover-gold border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111315] p-6 sm:p-8 shadow-xl space-y-6 transition-all">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#144A32] dark:text-[#22C55E]" />
                  <span className="font-display font-bold text-base text-neutral-950 dark:text-white">
                    Impact Mesurable sur 90 Jours
                  </span>
                </div>
                <span className="text-xs font-mono text-[#144A32] dark:text-[#22C55E] font-bold">
                  +185% Visibilité
                </span>
              </div>

              {/* Visual Benchmark Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-neutral-500">Avant intervention NSC (Mois 0)</span>
                    <span className="text-neutral-400">Position 18 · 12 appels/mois</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-3">
                    <div className="bg-neutral-400 dark:bg-neutral-600 h-3 w-[15%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-neutral-500">Mise à niveau NAP & Schema (Mois 1)</span>
                    <span className="text-neutral-400">Position 7 · 48 appels/mois</span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-3">
                    <div className="bg-neutral-600 dark:bg-neutral-400 h-3 w-[45%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      Objectif Atteint (Mois 3)
                    </span>
                    <span className="font-bold text-[#144A32] dark:text-[#22C55E]">
                      Top 3 Maps · 165 appels/mois
                    </span>
                  </div>
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-3">
                    <div className="bg-[#144A32] dark:bg-[#22C55E] h-3 w-[95%]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900/50">
                  <span className="text-neutral-400 block font-mono text-[11px]">Taux de conversion</span>
                  <span className="font-bold text-neutral-950 dark:text-white text-base">+38.5%</span>
                </div>
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900/50">
                  <span className="text-neutral-400 block font-mono text-[11px]">Rentabilité moyenne</span>
                  <span className="font-bold text-[#144A32] dark:text-[#22C55E] text-base">x4.8 ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="hover-gold p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] space-y-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-900">
              <span className="text-xs font-mono text-[#144A32] dark:text-[#22C55E] font-bold">
                MÉTHODE 01
              </span>
              <Compass className="w-5 h-5 text-neutral-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-950 dark:text-white leading-snug pb-1">
              {t('presentation.pillars.strategy.title')}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              {t('presentation.pillars.strategy.desc')}
            </p>
          </div>

          <div className="hover-gold p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] space-y-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-900">
              <span className="text-xs font-mono text-[#144A32] dark:text-[#22C55E] font-bold">
                MÉTHODE 02
              </span>
              <Code2 className="w-5 h-5 text-neutral-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-950 dark:text-white leading-snug pb-1">
              {t('presentation.pillars.technique.title')}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              {t('presentation.pillars.technique.desc')}
            </p>
          </div>

          <div className="hover-gold p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] space-y-4 transition-all">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-900">
              <span className="text-xs font-mono text-[#144A32] dark:text-[#22C55E] font-bold">
                MÉTHODE 03
              </span>
              <PenTool className="w-5 h-5 text-neutral-400" />
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
