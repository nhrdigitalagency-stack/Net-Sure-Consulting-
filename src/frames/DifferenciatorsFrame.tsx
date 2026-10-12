import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

interface DifferenciatorsFrameProps {
  onNavigateToPricing: () => void;
}

export const DifferenciatorsFrame: React.FC<DifferenciatorsFrameProps> = ({
  onNavigateToPricing,
}) => {
  const { t } = useTranslation();

  const items = [
    {
      num: '01',
      title: t('differenciators.items.0.title'),
      desc: t('differenciators.items.0.desc'),
    },
    {
      num: '02',
      title: t('differenciators.items.1.title'),
      desc: t('differenciators.items.1.desc'),
    },
    {
      num: '03',
      title: t('differenciators.items.2.title'),
      desc: t('differenciators.items.2.desc'),
    },
    {
      num: '04',
      title: t('differenciators.items.3.title'),
      desc: t('differenciators.items.3.desc'),
    },
    {
      num: '05',
      title: t('differenciators.items.4.title'),
      desc: t('differenciators.items.4.desc'),
    },
  ];

  return (
    <section
      id="frame-4"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0B0D0F] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid Overlay & Ambient Depth */}
      <div className="absolute inset-0 bg-grid-overlay opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 tracking-widest font-bold bg-amber-500/10 border border-amber-400/30 shadow-xs">
            {t('differenciators.frameTitle')}
          </span>
          <span className="hidden sm:inline">Engagements Contractuels</span>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
            {t('differenciators.headline')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
            Une culture de la preuve chiffrée, de l'engagement contractuel et de la pérennité architecturale.
          </p>
        </div>

        {/* 5 Distinct Blocks with rich color accent on primary guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={item.num}
                className={`card-luxury p-8 sm:p-10 rounded-3xl border transition-all ${
                  isFeatured
                    ? 'lg:col-span-2 bg-gradient-to-br from-[#1C1811] via-[#0E1014] to-[#07080A] text-white border-amber-400/80 shadow-[0_8px_35px_rgba(212,175,55,0.2)] relative overflow-hidden'
                    : 'border-amber-500/20 dark:border-amber-400/20 space-y-4 bg-white/95 dark:bg-[#0D0F13]/95 text-neutral-900 dark:text-neutral-50'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
                )}
                <div
                  className={`flex items-center justify-between pb-3 border-b ${
                    isFeatured
                      ? 'border-amber-400/20'
                      : 'border-neutral-100 dark:border-neutral-900'
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold ${
                      isFeatured ? 'text-amber-400' : 'text-amber-500 dark:text-amber-400'
                    }`}
                  >
                    [{item.num}]
                  </span>
                  <span
                    className={`text-[11px] font-mono uppercase px-3 py-1 rounded-full ${
                      isFeatured
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    {isFeatured ? 'Garantie Contractuelle NSC' : 'Engagement Contractuel'}
                  </span>
                </div>
                <h3
                  className={`font-display font-bold text-xl sm:text-2xl mt-4 ${
                    isFeatured ? 'text-white' : 'text-neutral-950 dark:text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed font-sans mt-3 ${
                    isFeatured ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to Pricing */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={onNavigateToPricing}
            className="px-5 py-2.5 rounded-full btn-noir text-xs font-mono uppercase tracking-wider text-amber-400 border-amber-400/40 hover:border-amber-400 cursor-pointer shadow-xs flex items-center gap-2"
          >
            <span>Consulter notre grille tarifaire transparente</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
