import React, { createContext, useContext, useEffect, useState } from 'react';
import en from './en.json';
import fr from './fr.json';

type Language = 'fr' | 'en';

type Translations = typeof fr;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('nsc_language');
      if (saved === 'fr' || saved === 'en') return saved;
      if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
        return 'en';
      }
    } catch {
      // fallback
    }
    return 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('nsc_language', lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const translations = language === 'fr' ? fr : en;

  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
