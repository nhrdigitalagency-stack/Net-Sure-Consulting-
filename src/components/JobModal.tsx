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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="card-luxury relative w-full max-w-xl bg-white/95 dark:bg-[#0D0F13]/95 border border-amber-500/30 dark:border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-neutral-900 dark:text-neutral-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 bg-amber-500/10 border border-amber-400/30 font-bold mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Candidature Directe · Paris 18e</span>
            </div>
            <h2 className="text-xl font-display font-bold mt-1">
              {t('careers.jobTitle')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-amber-400 hover:border-amber-400 transition-colors cursor-pointer"
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
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
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
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
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
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
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
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                Synthèse de votre parcours et de vos motivations *
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Présentez votre expérience, vos points forts et les projets qui vous animent pour rejoindre l'équipe Net Sure Consulting..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-[#060709] focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none resize-none transition-all"
              />
            </div>

            <p className="text-[11px] text-neutral-500 font-mono">
              Destinataire : contact@cnetsure.com · Réponse sous 24 à 48h ouvrées.
            </p>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-amber-400 cursor-pointer"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn-gold px-6 py-2.5 rounded-full font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Transmettre ma candidature</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="pt-8 pb-4 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-amber-500 dark:text-amber-400 mx-auto" />
            <h3 className="text-lg font-display font-bold">Candidature Préparée</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
              Votre dossier a été préparé pour le pôle recrutement de Net Sure Consulting.
              L'email a été ouvert dans votre messagerie. Notre équipe reviendra vers vous sous 48h ouvrées.
            </p>
            <button
              onClick={onClose}
              className="btn-gold mt-4 px-7 py-2.5 text-xs font-bold rounded-full cursor-pointer shadow-md"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
