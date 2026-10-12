import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowUpRight, Layers, Globe, GraduationCap, Server } from 'lucide-react';

interface ServicesFrameProps {
  onNavigateToFrame: (frameIndex: number) => void;
}

export const ServicesFrame: React.FC<ServicesFrameProps> = ({ onNavigateToFrame }) => {
  const { t } = useTranslation();

  const services = [
    {
      num: t('services.consulting.num'),
      title: t('services.consulting.title'),
      desc: t('services.consulting.desc'),
      targetFrame: 6,
      sublabel: 'Focus assurances & conduite du changement',
      icon: Layers,
      highlight: false,
    },
    {
      num: t('services.web.num'),
      title: t('services.web.title'),
      desc: t('services.web.desc'),
      targetFrame: 5,
      sublabel: 'Vitrines, institutionnels & e-commerce',
      icon: Globe,
      highlight: true,
    },
    {
      num: t('services.training.num'),
      title: t('services.training.title'),
      desc: t('services.training.desc'),
      targetFrame: 7,
      sublabel: 'Partenariat AGENIUS France entière',
      icon: GraduationCap,
      highlight: false,
    },
    {
      num: t('services.infra.num'),
      title: t('services.infra.title'),
      desc: t('services.infra.desc'),
      targetFrame: 8,
      sublabel: 'Mainframes, Open & infogérance MCO',
      icon: Server,
      highlight: false,
    },
  ];

  return (
    <section
      id="frame-3"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Dot Matrix Texture & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-dot-matrix opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#144A32]/6 dark:bg-[#22C55E]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Editorial Subtitle */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
            {t('services.frameTitle')}
          </span>
          <span className="hidden sm:inline">Expertises Intégrées</span>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
            {t('services.headline')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
            Une synergie rare entre agence de performance digitale et société d'ingénierie informatique de pointe.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.num}
                onClick={() => onNavigateToFrame(srv.targetFrame)}
                className={`hover-gold group p-8 sm:p-10 border transition-all cursor-pointer flex flex-col justify-between hover:shadow-xl ${
                  srv.highlight
                    ? 'border-[#144A32] dark:border-[#22C55E] bg-[#144A32]/4 dark:bg-[#22C55E]/5 ring-1 ring-[#144A32]/20 dark:ring-[#22C55E]/20'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/40 backdrop-blur-xs'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#144A32] dark:text-[#22C55E]">
                        {srv.num}
                      </span>
                      <IconComp className="w-5 h-5 text-neutral-400 group-hover:text-[#144A32] dark:group-hover:text-[#22C55E] transition-colors" />
                    </div>
                    <span className="p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white group-hover:border-neutral-400 transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-950 dark:text-white">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span>{srv.sublabel}</span>
                  <span className="group-hover:underline text-neutral-900 dark:text-neutral-100 font-semibold">
                    Accéder au volet complet →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
