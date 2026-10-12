import React from 'react';
import { X, Cookie } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isOpen, onClose }) => {
  const { language } = useTranslation();
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="card-luxury relative w-full max-w-3xl bg-white/95 dark:bg-[#0D0F13]/95 border border-amber-500/30 dark:border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-neutral-900 dark:text-neutral-100 max-h-[88vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-amber-500 dark:text-amber-400 bg-amber-500/10 border border-amber-400/30 font-bold mb-1">
              <Cookie className="w-3.5 h-3.5" />
              <span>Conformité Européenne RGPD & ePrivacy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold mt-1">
              {language === 'fr' ? 'Politique de Cookies (UE)' : 'Cookie Policy (EU)'}
            </h2>
            <p className="text-xs text-neutral-500 font-mono mt-1">
              Synchronisée avec cookiedatabase.org · Révision 2026
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-amber-400 hover:border-amber-400 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-6 space-y-6 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              1. Définition des traceurs et cookies
            </h3>
            <p>
              Un cookie est un petit fichier texte transmis à votre terminal (ordinateur, tablette ou smartphone)
              lors de la consultation d'un site web. Il permet de reconnaître le navigateur, de mémoriser vos
              préférences d'affichage (langue, contraste sombre/clair) et d'assurer la sécurité opérationnelle.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              2. Cookies strictement nécessaires (exemptés de consentement)
            </h3>
            <p>
              Ces cookies sont indispensables au fonctionnement technique du site :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>nsc_language</strong> : mémorisation de votre choix de langue (FR / EN). Durée : 12 mois.</li>
              <li><strong>nsc_theme</strong> : mémorisation du thème d'affichage (clair / sombre). Durée : 12 mois.</li>
              <li><strong>nsc_cookie_consent</strong> : stockage de vos préférences de consentement. Durée : 6 mois.</li>
              <li><strong>Sécurité et pare-feu d'infrastructure</strong> : prévention des requêtes frauduleuses. Durée : session.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              3. Services tiers intégrés et cartographie
            </h3>
            <p>
              Afin de délivrer nos prestations et situer nos bureaux à Paris 18e, certains composants externes
              peuvent émettre des traceurs :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Google Maps Platform</strong> : rendu cartographique de notre agence (40 rue Damrémont, 75018 Paris).</li>
              <li><strong>Hébergement d'infrastructure résilient</strong> : routage réseau et distribution de contenu (CDN).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              4. Exercice de vos droits RGPD
            </h3>
            <p>
              Vous pouvez à tout moment retirer votre consentement ou demander la suppression des données vous concernant.
              Pour toute question relative à la gestion des cookies, vous pouvez contacter directement le délégué à la protection
              des données à l'adresse officielle :{' '}
              <a href="mailto:contact@cnetsure.com" className="underline font-mono text-neutral-950 dark:text-white">
                contact@cnetsure.com
              </a>.
            </p>
          </section>
        </div>

        <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90"
          >
            Fermer le document
          </button>
        </div>
      </div>
    </div>
  );
};
