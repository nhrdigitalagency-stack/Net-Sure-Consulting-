import React, { useState, useMemo } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { ChevronDown, HelpCircle, Search, ShieldCheck, Sparkles, MapPin, Globe } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  badge: string;
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const { t, language } = useTranslation();
  // Ensure only one item remains open at a time
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const rawFaqItems: FaqItem[] = (t('about.faq') as unknown as FaqItem[]) || [];

  const handleToggle = (id: string) => {
    // Single open item rule: clicking opens the clicked item and closes any other, or collapses if already open
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredItems = useMemo(() => {
    return rawFaqItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.badge?.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [rawFaqItems, selectedCategory, searchQuery]);

  // Schema.org FAQPage structured data for Google Search rich snippets
  const schemaOrgFaq = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: rawFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }, [rawFaqItems]);

  const categories = [
    { key: 'all', label: language === 'fr' ? 'Toutes les questions' : 'All Questions', count: rawFaqItems.length },
    { key: 'seo', label: 'SEO & Google Maps', count: rawFaqItems.filter((i) => i.category === 'seo').length },
    { key: 'web', label: language === 'fr' ? 'Création Web & Infra' : 'Web & Cloud', count: rawFaqItems.filter((i) => i.category === 'web').length },
    { key: 'commitments', label: language === 'fr' ? 'Garanties & SLA' : 'Guarantees & SLA', count: rawFaqItems.filter((i) => i.category === 'commitments').length },
  ];

  return (
    <div className="w-full space-y-8 pt-10">
      {/* Schema.org FAQPage JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgFaq) }}
      />

      {/* Header Container with Rounded Borders and Gold Gradient */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-neutral-900/90 dark:bg-[#0E1013] border border-amber-500/30 dark:border-amber-400/30 shadow-[0_0_35px_rgba(212,175,55,0.08)] overflow-hidden">
        {/* Ambient subtle gold radial glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{t('about.faqTitle')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              {language === 'fr' ? 'Tout savoir sur nos services & nos engagements' : 'Frequently Asked Questions & Commitments'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-2xl leading-relaxed">
              {t('about.faqSubtitle')}
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-amber-400/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'fr' ? 'Filtrer une question...' : 'Search questions...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs font-sans bg-black/60 border border-amber-500/30 text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills with Rounded-Full & Gold/Noir Styling */}
        <div className="relative z-10 flex flex-wrap gap-2 pt-6 mt-6 border-t border-neutral-800">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] text-neutral-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)] scale-[1.02]'
                    : 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-amber-300 border border-neutral-700/80 hover:border-amber-500/40'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-neutral-950/20 text-neutral-950 font-bold' : 'bg-neutral-900 text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List with Fluid Grid Easing & Exclusive One-Item Open Rule */}
      <div className="space-y-3.5">
        {filteredItems.length === 0 ? (
          <div className="p-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 text-center space-y-3">
            <HelpCircle className="w-8 h-8 text-amber-400 mx-auto opacity-70" />
            <p className="text-sm text-neutral-400">
              {language === 'fr'
                ? 'Aucune question ne correspond à votre recherche.'
                : 'No questions matching your search.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-amber-400 underline font-mono cursor-pointer"
            >
              {language === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900/95 dark:bg-[#111317] border-amber-400/70 shadow-[0_4px_25px_rgba(212,175,55,0.14)]'
                    : 'bg-neutral-50/90 dark:bg-neutral-900/40 border-neutral-200/90 dark:border-neutral-800/80 hover:border-amber-400/50 hover:bg-white dark:hover:bg-neutral-900/70'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span
                            className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                              isOpen
                                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                                : 'bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300/50 dark:border-neutral-700'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                        {item.category === 'seo' && <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                        {item.category === 'web' && <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                        {item.category === 'commitments' && <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                      </div>

                      <span
                        className={`block font-display font-bold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                          isOpen
                            ? 'text-amber-400 dark:text-amber-300'
                            : 'text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-300'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Smooth Rotating Gold Chevron */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.4)] rotate-180'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700 group-hover:border-amber-400/60 group-hover:text-amber-400 rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Fluid Accordion Height Animation via CSS Grid */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-amber-500/20 dark:border-amber-400/15 mt-1">
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans pr-4 sm:pr-8 pt-3">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
