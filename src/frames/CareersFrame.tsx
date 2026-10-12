import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Briefcase, Check, ArrowRight } from 'lucide-react';

interface CareersFrameProps {
  onOpenJobModal: () => void;
}

export const CareersFrame: React.FC<CareersFrameProps> = ({ onOpenJobModal }) => {
  const { t } = useTranslation();

  const skills: string[] = t('careers.skills') || [];

  return (
    <section
      id="frame-10"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0B0D0F] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[550px] h-[350px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
            {t('careers.frameTitle')}
          </span>
          <span className="hidden sm:inline">Paris & Île-de-France (Hybride)</span>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
            {t('careers.headline')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            {t('careers.intro')}
          </p>
        </div>

        {/* Job Card */}
        <div className="hover-gold p-8 sm:p-12 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#090A0B] space-y-8 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#144A32] dark:text-[#22C55E] mb-1.5 font-bold">
                <Briefcase className="w-4 h-4" />
                <span>{t('careers.jobDept')}</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 dark:text-white">
                {t('careers.jobTitle')}
              </h3>
            </div>

            <div>
              <span className="px-3.5 py-1.5 text-xs font-mono font-medium border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 inline-block">
                {t('careers.jobType')}
              </span>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] font-bold block">
              {t('careers.missionTitle')}
            </span>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans max-w-4xl">
              {t('careers.mission')}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-mono uppercase text-neutral-400 font-bold block">
              {t('careers.skillsTitle')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#144A32] dark:text-[#22C55E] shrink-0 mt-0.5" />
                  <span className="leading-snug">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
            <button
              onClick={onOpenJobModal}
              className="px-8 py-4 text-xs sm:text-sm font-semibold bg-[#144A32] hover:bg-[#0E3624] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white dark:text-neutral-950 flex items-center gap-2.5 transition-all shadow hover:shadow-md"
            >
              <span>{t('careers.ctaApply')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
