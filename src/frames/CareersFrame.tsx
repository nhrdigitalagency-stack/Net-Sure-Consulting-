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
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 tracking-widest font-bold bg-amber-500/10 border border-amber-400/30 shadow-xs">
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

        {/* Job Card with Rounded 3xl Curves and Noir & Or Styling */}
        <div className="card-luxury p-8 sm:p-12 rounded-3xl border border-amber-500/25 dark:border-amber-400/25 bg-white/95 dark:bg-[#0D0F13]/95 space-y-8 shadow-xl transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 mb-1.5 font-bold">
                <Briefcase className="w-4 h-4" />
                <span>{t('careers.jobDept')}</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 dark:text-white">
                {t('careers.jobTitle')}
              </h3>
            </div>

            <div>
              <span className="px-4 py-1.5 text-xs font-mono font-bold border border-amber-400/40 bg-amber-500/10 text-amber-500 dark:text-amber-300 rounded-full inline-block shadow-xs">
                {t('careers.jobType')}
              </span>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-amber-500 dark:text-amber-400 font-bold block">
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
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-amber-500/15 text-amber-500 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
            <button
              onClick={onOpenJobModal}
              className="btn-gold px-8 py-4 text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] cursor-pointer"
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
