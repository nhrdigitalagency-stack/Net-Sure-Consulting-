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
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
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

          <div className="flex items-center border border-neutral-300 dark:border-neutral-700 p-0.5 text-xs font-medium shrink-0 self-start md:self-auto">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 transition-colors cursor-pointer ${
                category === 'all'
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {language === 'fr' ? 'Toutes les offres (6)' : 'All Packages (6)'}
            </button>
            <button
              onClick={() => setCategory('seo')}
              className={`px-4 py-2 transition-colors cursor-pointer ${
                category === 'seo'
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              SEO & Maps (3)
            </button>
            <button
              onClick={() => setCategory('web')}
              className={`px-4 py-2 transition-colors cursor-pointer ${
                category === 'web'
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Web & Design (3)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
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
                className={`hover-gold p-8 sm:p-9 border transition-all flex flex-col justify-between relative ${
                  item.featured
                    ? 'border-2 border-[#144A32] dark:border-[#22C55E] bg-gradient-to-b from-[#144A32]/6 via-white to-white dark:from-[#22C55E]/10 dark:via-[#111315] dark:to-[#111315] shadow-2xl ring-1 ring-[#144A32]/30 dark:ring-[#22C55E]/30'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-wider uppercase text-[#144A32] dark:text-[#22C55E] font-semibold">
                      {badge}
                    </span>
                    {item.featured && (
                      <span className="text-[10px] font-mono uppercase bg-[#144A32] text-white dark:bg-[#22C55E] dark:text-neutral-950 px-2.5 py-0.5">
                        Formule Recommandée
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl text-neutral-950 dark:text-white">
                      {name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
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

                  <div className="border-t border-neutral-200 dark:border-neutral-800 pt-5 space-y-3">
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <Check className="w-4 h-4 text-[#144A32] dark:text-[#22C55E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
                  <button
                    onClick={() => onSelectPackage(name)}
                    className={`w-full py-3.5 px-4 text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${
                      item.featured
                        ? 'bg-[#144A32] text-white hover:bg-[#0E3624] dark:bg-[#22C55E] dark:text-neutral-950 dark:hover:bg-[#16A34A] shadow'
                        : 'border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white text-neutral-900 dark:text-white'
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
