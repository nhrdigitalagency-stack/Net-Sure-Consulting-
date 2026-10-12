import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onOpenPreferences: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPreferences }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('nsc_cookie_consent');
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('nsc_cookie_consent', 'accepted');
    } catch {}
    setVisible(false);
  };

  const handleRefuse = () => {
    try {
      localStorage.setItem('nsc_cookie_consent', 'essential_only');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-5 bg-white/95 dark:bg-[#0E1012]/95 border-t border-neutral-300 dark:border-neutral-800 backdrop-blur-md shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-[#144A32] dark:text-[#22C55E] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed">
            {t('cookieBanner.text')}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
          <button
            onClick={onOpenPreferences}
            className="px-3 py-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white underline underline-offset-4"
          >
            {t('cookieBanner.manage')}
          </button>
          <button
            onClick={handleRefuse}
            className="px-3.5 py-1.5 text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
          >
            {t('cookieBanner.refuse')}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-xs font-semibold bg-[#144A32] dark:bg-[#22C55E] text-white dark:text-neutral-950 hover:opacity-90 transition-opacity"
          >
            {t('cookieBanner.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};
