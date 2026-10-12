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
    <div className="fixed bottom-3 inset-x-3 sm:inset-x-6 sm:bottom-6 z-40 p-4 sm:p-5 bg-neutral-950/95 dark:bg-[#0D0F13]/95 text-white border border-amber-500/30 rounded-3xl backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
            {t('cookieBanner.text')}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
          <button
            onClick={onOpenPreferences}
            className="px-3 py-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-amber-500 dark:hover:text-amber-400 underline underline-offset-4 cursor-pointer"
          >
            {t('cookieBanner.manage')}
          </button>
          <button
            onClick={handleRefuse}
            className="px-4 py-1.5 rounded-full text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-amber-400 transition-colors cursor-pointer"
          >
            {t('cookieBanner.refuse')}
          </button>
          <button
            onClick={handleAccept}
            className="btn-gold px-5 py-1.5 rounded-full text-xs font-bold cursor-pointer shadow-sm"
          >
            {t('cookieBanner.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};
