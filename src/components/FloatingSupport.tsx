import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { MessageSquare, X, Send, Copy, Check, ShieldCheck } from 'lucide-react';

interface FloatingSupportProps {
  onQuickAction: (actionType: 'audit' | 'quote' | 'question') => void;
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ onQuickAction }) => {
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleShortcut = (type: 'audit' | 'quote' | 'question') => {
    if (type === 'audit') {
      setMessage(
        language === 'fr'
          ? "Bonjour, je souhaite obtenir un audit gratuit de ma présence Google Maps pour mon entreprise."
          : "Hello, I would like to request a free Google Maps audit for my business."
      );
    } else if (type === 'quote') {
      setMessage(
        language === 'fr'
          ? "Bonjour, je souhaite recevoir un devis personnalisé pour vos prestations."
          : "Hello, I would like to receive a custom quote for your digital services."
      );
    } else {
      setMessage(
        language === 'fr'
          ? "Bonjour, j'ai une question technique concernant vos offres."
          : "Hello, I have a technical question regarding your offerings."
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Create mailto link for direct real email client integration
    const subject = encodeURIComponent(
      language === 'fr'
        ? 'Demande via Support Net Sure Consulting'
        : 'Inquiry via Net Sure Consulting Support'
    );
    const body = encodeURIComponent(
      `Expéditeur: ${email || 'Non spécifié'}\n\nMessage:\n${message}\n\n---\nEnvoyé depuis cnetsure.com`
    );
    
    // We open mailto to actually dispatch to contact@cnetsure.com
    window.location.href = `mailto:contact@cnetsure.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@cnetsure.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (submitted) setSubmitted(false);
          }}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#144A32] dark:bg-[#22C55E] text-white dark:text-neutral-950 font-display font-semibold text-xs tracking-wide shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 border border-white/20"
          aria-label={isOpen ? 'Fermer le support' : t('supportWidget.trigger')}
        >
          {isOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
          )}
          <span className="hidden sm:inline font-mono uppercase text-[11px] tracking-wider">
            {isOpen ? 'Fermer' : t('supportWidget.trigger')}
          </span>
          {/* Subtle online marker */}
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 dark:bg-emerald-900" />
        </button>
      </div>

      {/* Support Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-20 sm:inset-auto sm:bottom-20 sm:right-6 sm:w-96 z-50 bg-white dark:bg-[#111315] border border-neutral-300 dark:border-neutral-800 shadow-2xl p-5 text-neutral-900 dark:text-neutral-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between pb-3.5 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#144A32] dark:bg-[#22C55E] shrink-0" />
                <h3 className="font-display font-bold text-sm tracking-tight">
                  {t('supportWidget.title')}
                </h3>
              </div>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                {t('supportWidget.subtitle')}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            <div className="pt-4 space-y-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {t('supportWidget.welcome')}
              </p>

              {/* Shortcut Chips */}
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => handleShortcut('audit')}
                  className="w-full text-left px-2.5 py-1.5 text-xs border border-neutral-200 dark:border-neutral-800 hover:border-[#144A32] dark:hover:border-[#22C55E] bg-neutral-50 dark:bg-neutral-900/50 transition-colors text-neutral-700 dark:text-neutral-300"
                >
                  · {t('supportWidget.chip1')}
                </button>
                <button
                  type="button"
                  onClick={() => handleShortcut('quote')}
                  className="w-full text-left px-2.5 py-1.5 text-xs border border-neutral-200 dark:border-neutral-800 hover:border-[#144A32] dark:hover:border-[#22C55E] bg-neutral-50 dark:bg-neutral-900/50 transition-colors text-neutral-700 dark:text-neutral-300"
                >
                  · {t('supportWidget.chip2')}
                </button>
                <button
                  type="button"
                  onClick={() => handleShortcut('question')}
                  className="w-full text-left px-2.5 py-1.5 text-xs border border-neutral-200 dark:border-neutral-800 hover:border-[#144A32] dark:hover:border-[#22C55E] bg-neutral-50 dark:bg-neutral-900/50 transition-colors text-neutral-700 dark:text-neutral-300"
                >
                  · {t('supportWidget.chip3')}
                </button>
              </div>

              {/* Quick dispatch form */}
              <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('supportWidget.emailPlaceholder')}
                    className="w-full px-3 py-2 text-xs border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('supportWidget.inputPlaceholder')}
                    className="w-full px-3 py-2 text-xs border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>contact@cnetsure.com</span>
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-semibold bg-[#144A32] dark:bg-[#22C55E] text-white dark:text-neutral-950 flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                  >
                    <span>{t('supportWidget.send')}</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="pt-6 pb-2 text-center space-y-4">
              <div className="w-10 h-10 mx-auto bg-[#144A32]/10 dark:bg-[#22C55E]/10 flex items-center justify-center text-[#144A32] dark:text-[#22C55E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm">Message Prêt & Envoyé</h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed px-2">
                  {t('supportWidget.success')}
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2 text-xs border border-neutral-300 dark:border-neutral-700 flex items-center justify-center gap-1.5 font-mono"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Adresse copiée !' : t('supportWidget.copyEmail')}</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-neutral-500 hover:underline pt-1"
                >
                  Fermer cette fenêtre
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
