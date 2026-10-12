import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';

interface PricingFrameProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingFrame: React.FC<PricingFrameProps> = ({ onSelectPackage }) => {
  const { t, language } = useTranslation();
  const [category, setCategory] = useState<'all' | 'seo' | 'web'>('all');

  const packages = [
    {
      id: 'visibilite',
      key: 'visibilite',
      category: 'seo',
      featured: false,
    },
    {
      id: 'seoPremium',
      key: 'seoPremium',
      category: 'seo',
      featured: true,
    },
    {
      id: 'visibilitePremium',
      key: 'visibilitePremium',
      category: 'seo',
      featured: false,
      isQuote: true,
    },
    {
      id: 'designPro',
      key: 'designPro',
      category: 'web',
      featured: false,
    },
    {
      id: 'siteVitrine',
      key: 'siteVitrine',
      category: 'web',
      featured: false,
    },
    {
      id: 'siteEcommerce',
      key: 'siteEcommerce',
      category: 'web',
      featured: false,
    },
  ];

  const filtered = category === 'all' ? packages : packages.filter((p) => p.category === category);

  return (
    <section
      id="frame-5"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 tracking-widest font-bold bg-amber-500/10 border border-amber-400/30 shadow-xs">
            {t('pricing.frameTitle')}
          </span>
          <span className="hidden sm:inline">Transparence Tarifaire</span>
        </div>

        {/* Narrative & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
              {t('pricing.headline')}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
              {t('pricing.periodNotice')}
            </p>
          </div>

          <div className="flex items-center rounded-full border border-neutral-300 dark:border-neutral-700/80 bg-neutral-100/90 dark:bg-neutral-900/90 p-1 text-xs font-medium shrink-0 self-start md:self-auto backdrop-blur-xs">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                category === 'all'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] text-neutral-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {language === 'fr' ? 'Toutes les offres (6)' : 'All Packages (6)'}
            </button>
            <button
              onClick={() => setCategory('seo')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                category === 'seo'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] text-neutral-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              SEO & Maps (3)
            </button>
            <button
              onClick={() => setCategory('web')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                category === 'web'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] text-neutral-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Web & Design (3)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid with Rounded 3xl Curves and Noir & Or Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filtered.map((item) => {
            const name = t(`pricing.cards.${item.key}.name`);
            const badge = t(`pricing.cards.${item.key}.badge`);
            const price = t(`pricing.cards.${item.key}.price`);
            const period = t(`pricing.cards.${item.key}.period`);
            const desc = t(`pricing.cards.${item.key}.desc`);
            const features: string[] = t(`pricing.cards.${item.key}.features`) || [];

            return (
              <div
                key={item.id}
                className={`card-luxury p-8 sm:p-9 rounded-3xl border transition-all flex flex-col justify-between relative ${
                  item.featured
                    ? 'border-2 border-amber-400/90 dark:border-amber-400/90 bg-gradient-to-b from-amber-500/10 via-white to-white dark:from-amber-400/10 dark:via-[#0E1014] dark:to-[#0E1014] shadow-[0_8px_35px_rgba(212,175,55,0.22)] ring-1 ring-amber-400/40'
                    : 'border-amber-500/20 dark:border-amber-400/20 bg-white/95 dark:bg-[#0D0F13]/95'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-wider uppercase text-amber-500 dark:text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30">
                      {badge}
                    </span>
                    {item.featured && (
                      <span className="text-[10px] font-mono uppercase bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-neutral-950 font-extrabold px-3 py-1 rounded-full shadow-xs">
                        Recommandé
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-neutral-950 dark:text-white">
                      {name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-neutral-950 dark:text-white">
                        {price}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans min-h-[48px]">
                    {desc}
                  </p>

                  <div className="border-t border-neutral-200 dark:border-neutral-800/80 pt-5 space-y-3">
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <Check className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                  <button
                    onClick={() => onSelectPackage(name)}
                    className={`w-full py-3.5 px-4 text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      item.featured
                        ? 'btn-gold shadow-[0_4px_20px_rgba(212,175,55,0.35)]'
                        : 'btn-noir'
                    }`}
                  >
                    <span>{item.isQuote ? t('pricing.ctaQuote') : t('pricing.ctaSelect')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
