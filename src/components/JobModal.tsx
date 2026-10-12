import React, { useState } from 'react';
import { X, Send, Briefcase, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Candidature] Analyste d'affaires SCT - ${name}`);
    const body = encodeURIComponent(
      `Candidat: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nProfil / LinkedIn: ${linkedin}\n\nMotivation & Parcours:\n${message}\n\n---\nEnvoyé depuis cnetsure.com - Offres d'emploi`
    );

    window.location.href = `mailto:contact@cnetsure.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white dark:bg-[#111315] border border-neutral-300 dark:border-neutral-800 p-6 sm:p-8 shadow-2xl text-neutral-900 dark:text-neutral-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Candidature Directe · Paris 18e</span>
            </div>
            <h2 className="text-xl font-display font-bold mt-1">
              {t('careers.jobTitle')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="pt-5 space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                Nom complet *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex. Sophie Delorme"
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sophie@example.com"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 00 00 00 00"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                Lien profil LinkedIn ou portfolio
              </label>
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/votre-profil"
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                Synthèse de votre expérience SEPA / Mainframe / AMOA *
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Précisez vos réalisations en virements SEPA (SCT), rédaction de spécifications, COBOL/SQL ou tests de recette..."
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none resize-none"
              />
            </div>

            <p className="text-[11px] text-neutral-500 font-mono">
              Destinataire : contact@cnetsure.com · Réponse sous 24 à 48h ouvrées.
            </p>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-5 py-2 font-semibold bg-[#144A32] dark:bg-[#22C55E] text-white dark:text-neutral-950 flex items-center gap-1.5"
              >
                <span>Transmettre ma candidature</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="pt-8 pb-4 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#144A32] dark:text-[#22C55E] mx-auto" />
            <h3 className="text-lg font-display font-bold">Candidature Préparée</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
              Votre dossier a été préparé pour le pôle recrutement de Net Sure Consulting.
              L'email a été ouvert dans votre messagerie. Notre équipe reviendra vers vous sous 48h ouvrées.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 text-xs font-semibold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
