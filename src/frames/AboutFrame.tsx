import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';

interface AboutFrameProps {
  onNavigateToContact: () => void;
}

export const AboutFrame: React.FC<AboutFrameProps> = ({ onNavigateToContact }) => {
  const { t } = useTranslation();

  const values: string[] = t('about.values') || [];
  const knowhow: string[] = t('about.knowhow') || [];
  const forces: Array<{ title: string; desc: string }> = t('about.forces') || [];

  const partners = [
    'AGENIUS PARTNER',
    'ORACLE ECOSYSTEM',
    'GOOGLE MAPS VERIFIED',
    'IBM MAINFRAME COMPAT',
    'POSTGRESQL DEV',
    'STRIPE PAYMENT RAILS',
    'SEO LOCAL ALLIANCE',
    'RGPD CONFORMITÉ UE',
  ];

  return (
    <section
      id="frame-9"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Dot Matrix & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-dot-matrix opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[600px] h-[400px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
            {t('about.frameTitle')}
          </span>
          <span className="hidden sm:inline">Groupe NET SURE depuis 2014</span>
        </div>

        {/* Narrative & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
              {t('about.headline')}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {t('about.story')}
            </p>

            <div className="p-6 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-3 shadow-2xs">
              <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] block font-bold">
                {t('about.valuesTitle')}
              </span>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-200">
                {values.map((val, idx) => (
                  <span
                    key={idx}
                    className="after:content-['·'] after:ml-2.5 last:after:content-none text-neutral-700 dark:text-neutral-300"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] font-bold block mb-4">
                {t('about.forcesTitle')}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {forces.map((force, fIdx) => (
                  <div
                    key={fIdx}
                    className="hover-gold p-5 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm bg-neutral-50/40 dark:bg-neutral-900/20 space-y-1.5 shadow-2xs transition-all"
                  >
                    <strong className="block text-neutral-950 dark:text-white font-semibold">
                      {force.title}
                    </strong>
                    <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed block font-sans">
                      {force.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold block mb-3">
                {t('about.knowhowTitle')}
              </span>
              <div className="space-y-2.5">
                {knowhow.map((kh, kIdx) => (
                  <div key={kIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#144A32] dark:text-[#22C55E] shrink-0" />
                    <span>{kh}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion Component */}
        <FaqAccordion />

        {/* Partners Strip */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
            {t('about.partnersTitle')}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {partners.map((pName, pIdx) => (
              <div
                key={pIdx}
                className="hover-gold px-3 py-3 border border-neutral-200 dark:border-neutral-800 text-center font-mono text-[11px] text-neutral-600 dark:text-neutral-400 bg-neutral-50/50 dark:bg-neutral-900/30 font-medium transition-all"
              >
                {pName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
