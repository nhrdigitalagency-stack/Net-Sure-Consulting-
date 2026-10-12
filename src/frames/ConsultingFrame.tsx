import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Shield, HeartPulse, Building2, Umbrella, ArrowRight } from 'lucide-react';

interface ConsultingFrameProps {
  onNavigateToContact: () => void;
}

export const ConsultingFrame: React.FC<ConsultingFrameProps> = ({ onNavigateToContact }) => {
  const { t } = useTranslation();

  const sectorIcons = [Shield, HeartPulse, Building2, Umbrella];
  const sectors: Array<{ name: string; desc: string }> = t('consulting.sectors') || [];

  return (
    <section
      id="frame-6"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#0B0D0F] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[600px] h-[400px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
            {t('consulting.frameTitle')}
          </span>
          <span className="hidden sm:inline font-medium">Pôle Conseil & Conduite du Changement</span>
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.25] pb-2 overflow-visible">
              {t('consulting.headline')}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {t('consulting.intro')}
            </p>
          </div>
        </div>

        {/* Insurance Sector Breakdown */}
        <div className="space-y-6 pt-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#144A32] dark:text-[#22C55E] font-bold">
              {t('consulting.sectorTitle')}
            </span>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {t('consulting.sectorDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, idx) => {
              const IconComponent = sectorIcons[idx % sectorIcons.length];
              return (
                <div
                  key={sec.name}
                  className="hover-gold p-6 border border-neutral-200 dark:border-neutral-800 space-y-3 bg-white/90 dark:bg-[#090A0B]/90 backdrop-blur-xs transition-all shadow-xs group"
                >
                  <IconComponent className="w-5 h-5 text-[#144A32] dark:text-[#22C55E] group-hover:text-amber-500 transition-colors" />
                  <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white leading-snug pb-1">
                    {sec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {sec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prestigious Deliverables Banner */}
        <div className="hover-gold p-8 sm:p-10 bg-[#144A32] dark:bg-[#0E2E20] border border-[#0E3624] dark:border-[#22C55E]/30 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl transition-all">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 dark:text-amber-400 block font-bold">
              Garantie Méthodologique & Documentation
            </span>
            <div className="text-sm sm:text-base font-sans font-medium text-emerald-50 leading-relaxed">
              {t('consulting.deliverables')}
            </div>
          </div>
          <button
            onClick={onNavigateToContact}
            className="px-7 py-3.5 text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-100 dark:bg-[#22C55E] dark:text-neutral-950 dark:hover:bg-[#16A34A] shrink-0 self-start sm:self-auto flex items-center gap-2 transition-all shadow hover:shadow-md hover:scale-[1.02]"
          >
            <span>Consulter nos experts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
