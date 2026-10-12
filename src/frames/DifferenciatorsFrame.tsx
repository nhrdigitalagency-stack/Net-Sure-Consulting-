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
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
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
                className={`hover-gold p-8 sm:p-10 border transition-all shadow-xs hover:shadow-xl ${
                  isFeatured
                    ? 'lg:col-span-2 bg-gradient-to-br from-[#144A32] via-[#0E3624] to-[#0A2619] text-white border-[#144A32] dark:border-[#22C55E]/40 relative overflow-hidden'
                    : 'border-neutral-200 dark:border-neutral-800 space-y-4 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
                )}
                <div
                  className={`flex items-center justify-between pb-3 border-b ${
                    isFeatured
                      ? 'border-white/15'
                      : 'border-neutral-100 dark:border-neutral-900'
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold ${
                      isFeatured ? 'text-emerald-300' : 'text-[#144A32] dark:text-[#22C55E]'
                    }`}
                  >
                    [{item.num}]
                  </span>
                  <span
                    className={`text-[11px] font-mono uppercase px-2 py-0.5 ${
                      isFeatured
                        ? 'bg-white/15 text-emerald-200 font-semibold'
                        : 'text-neutral-400'
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
                    isFeatured ? 'text-emerald-100/90' : 'text-neutral-600 dark:text-neutral-400'
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
            className="text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white underline underline-offset-4"
          >
            Consulter notre grille tarifaire transparente →
          </button>
        </div>
      </div>
    </section>
  );
};
