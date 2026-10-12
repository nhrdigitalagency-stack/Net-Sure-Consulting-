import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const { t } = useTranslation();
  // Unique open item management
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqItems: FaqItem[] = t('about.faq') || [];

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-6 pt-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#144A32] dark:text-[#22C55E] uppercase tracking-wider font-bold">
          <HelpCircle className="w-4 h-4" />
          <span>{t('about.faqTitle')}</span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl leading-relaxed">
          {t('about.faqSubtitle')}
        </p>
      </div>

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="transition-colors hover:border-amber-400/50">
              <h3>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#144A32] dark:focus-visible:ring-[#22C55E]"
                >
                  <span
                    className={`font-display font-semibold text-sm sm:text-base leading-snug pb-0.5 transition-colors ${
                      isOpen
                        ? 'text-[#144A32] dark:text-[#22C55E]'
                        : 'text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`p-1.5 border transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'border-[#144A32] dark:border-[#22C55E] text-[#144A32] dark:text-[#22C55E] rotate-180 bg-[#144A32]/5 dark:bg-[#22C55E]/10'
                        : 'border-neutral-300 dark:border-neutral-700 text-neutral-400 group-hover:border-neutral-500 rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
              </h3>

              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-hidden={!isOpen}
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 pb-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
