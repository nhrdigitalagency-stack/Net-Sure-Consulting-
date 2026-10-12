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
      sublabel: 'Hébergement sécurisé & sérénité au quotidien',
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
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 tracking-widest font-bold bg-amber-500/10 border border-amber-400/30 shadow-xs">
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

        {/* 4 Cards Grid with Rounded Corners and Noir & Or Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.num}
                onClick={() => onNavigateToFrame(srv.targetFrame)}
                className={`card-luxury group p-8 sm:p-10 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                  srv.highlight
                    ? 'border-amber-400/60 dark:border-amber-400/60 bg-gradient-to-b from-amber-500/10 via-white to-white dark:from-amber-400/10 dark:via-[#0D0F13] dark:to-[#0D0F13] shadow-[0_4px_30px_rgba(212,175,55,0.18)]'
                    : 'border-amber-500/20 dark:border-amber-400/20 bg-white/95 dark:bg-[#0D0F13]/95'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-500 dark:text-amber-300">
                        {srv.num}
                      </span>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500/10 border border-amber-400/20">
                        <IconComp className="w-5 h-5 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-950 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span>{srv.sublabel}</span>
                  <span className="group-hover:text-amber-400 text-neutral-900 dark:text-neutral-100 font-semibold transition-colors flex items-center gap-1">
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
