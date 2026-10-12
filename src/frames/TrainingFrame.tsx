import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';

interface TrainingFrameProps {
  onNavigateToContact: () => void;
}

export const TrainingFrame: React.FC<TrainingFrameProps> = ({ onNavigateToContact }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'it' | 'business' | 'users' | 'hr'>('it');

  const categories = [
    { id: 'it', title: t('training.categories.it.title'), items: t('training.categories.it.items') || [] },
    { id: 'business', title: t('training.categories.business.title'), items: t('training.categories.business.items') || [] },
    { id: 'users', title: t('training.categories.users.title'), items: t('training.categories.users.items') || [] },
    { id: 'hr', title: t('training.categories.hr.title'), items: t('training.categories.hr.items') || [] },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section
      id="frame-7"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Dot Matrix & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-dot-matrix opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 tracking-widest font-bold bg-amber-500/10 border border-amber-400/30 shadow-xs">
            {t('training.frameTitle')}
          </span>
          <span className="hidden sm:inline">Partenariat Certifié AGENIUS</span>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
            {t('training.headline')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            {t('training.intro')}
          </p>
        </div>

        {/* Interactive Tabbed Curriculum Explorer with Rounded Pills */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2.5 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] text-neutral-950 shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-neutral-100 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-300 border border-neutral-300/80 dark:border-neutral-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="card-luxury p-8 sm:p-10 rounded-3xl border border-amber-500/25 dark:border-amber-400/25 bg-white/95 dark:bg-[#0D0F13]/95 space-y-6 shadow-xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <h3 className="font-display font-bold text-2xl text-neutral-950 dark:text-white">
                {currentCategory.title}
              </h3>
              <span className="text-xs font-mono text-amber-500 dark:text-amber-400 uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30">
                Cursus & Modules Certifiés
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentCategory.items.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-neutral-50/80 dark:bg-[#08090C] border border-amber-500/15 dark:border-amber-400/15 flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-200 shadow-xs hover:border-amber-400/40 transition-all"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-amber-500/15 text-amber-500 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-500">
                Dispensé en présentiel dans vos locaux ou en classe virtuelle synchrone partout en France.
              </span>
              <button
                onClick={onNavigateToContact}
                className="btn-gold px-7 py-3.5 text-xs font-bold flex items-center gap-2 self-start sm:self-auto transition-all shadow-[0_4px_15px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                <span>Demander le catalogue détaillé</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
