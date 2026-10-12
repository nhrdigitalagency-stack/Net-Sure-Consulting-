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
          className="btn-gold group relative flex items-center gap-2.5 px-5 py-3.5 text-xs font-bold tracking-wide shadow-[0_6px_25px_rgba(212,175,55,0.4)] transition-all duration-200 hover:scale-105 cursor-pointer"
          aria-label={isOpen ? 'Fermer le support' : t('supportWidget.trigger')}
        >
          {isOpen ? (
            <X className="w-4 h-4 text-neutral-950" />
          ) : (
            <MessageSquare className="w-4 h-4 text-neutral-950 transition-transform group-hover:scale-110" />
          )}
          <span className="hidden sm:inline font-mono uppercase text-[11px] tracking-wider text-neutral-950">
            {isOpen ? 'Fermer' : t('supportWidget.trigger')}
          </span>
          {/* Subtle online marker */}
          <span className="w-2 h-2 rounded-full bg-neutral-950 animate-pulse" />
        </button>
      </div>

      {/* Support Drawer / Modal with Rounded 3xl Curves and Noir & Or Theme */}
      {isOpen && (
        <div className="card-luxury fixed inset-x-4 bottom-24 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 z-50 bg-white/95 dark:bg-[#0D0F13]/95 border border-amber-500/30 dark:border-amber-400/30 rounded-3xl shadow-2xl p-6 text-neutral-900 dark:text-neutral-100 animate-in slide-in-from-bottom-5 duration-300 backdrop-blur-md">
          <div className="flex items-start justify-between pb-3.5 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
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
              className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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

              {/* Shortcut Chips with Rounded Corners */}
              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => handleShortcut('audit')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs border border-amber-500/20 dark:border-amber-400/20 hover:border-amber-400 bg-neutral-50 dark:bg-neutral-900/60 transition-colors text-neutral-700 dark:text-neutral-300 cursor-pointer"
                >
                  · {t('supportWidget.chip1')}
                </button>
                <button
                  type="button"
                  onClick={() => handleShortcut('quote')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs border border-amber-500/20 dark:border-amber-400/20 hover:border-amber-400 bg-neutral-50 dark:bg-neutral-900/60 transition-colors text-neutral-700 dark:text-neutral-300 cursor-pointer"
                >
                  · {t('supportWidget.chip2')}
                </button>
                <button
                  type="button"
                  onClick={() => handleShortcut('question')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs border border-amber-500/20 dark:border-amber-400/20 hover:border-amber-400 bg-neutral-50 dark:bg-neutral-900/60 transition-colors text-neutral-700 dark:text-neutral-300 cursor-pointer"
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
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('supportWidget.inputPlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none resize-none transition-all"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono text-neutral-500 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-amber-500" /> : <Copy className="w-3 h-3" />}
                    <span>contact@cnetsure.com</span>
                  </button>

                  <button
                    type="submit"
                    className="btn-gold px-4 py-2 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
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
