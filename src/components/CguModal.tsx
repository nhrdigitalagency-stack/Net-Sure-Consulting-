import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface CguModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CguModal: React.FC<CguModalProps> = ({ isOpen, onClose }) => {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Mentions Légales & Conditions Contractuelles</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold mt-1">
              {language === 'fr'
                ? "Conditions Générales d'Utilisation et de Vente (CGU/CGV)"
                : 'Terms of Service & General Conditions (CGU)'}
            </h2>
            <p className="text-xs text-neutral-500 font-mono mt-1">
              Dernière révision : Juin 2025 · Mise à jour 2026 · Droit français
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
              Article 1 — Éditeur du service et mentions légales
            </h3>
            <p>
              Le site <strong>cnetsure.com</strong> est édité par la société <strong>NET SURE CONSULTING</strong>,
              Société par Actions Simplifiée Unipersonnelle (SASU) au capital social de 1 000 euros, immatriculée
              au Registre du Commerce et des Sociétés de Paris sous le numéro <strong>SIRET 944 590 371</strong>,
              ayant son siège social établi au <strong>40 rue Damrémont, 75018 Paris, France</strong>.
            </p>
            <p>
              Filiale à 100 % du Groupe NET SURE, créée en 2014. Contact électronique officiel :{' '}
              <a href="mailto:contact@cnetsure.com" className="underline font-mono text-neutral-950 dark:text-white">
                contact@cnetsure.com
              </a>.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              Article 2 — Objet et champ d'application
            </h3>
            <p>
              Les présentes Conditions Générales régissent l'accès, la consultation et la souscription aux
              prestations fournies par Net Sure Consulting : référencement naturel local (SEO Google Maps),
              conception et maintenance de sites vitrines et e-commerce, conseil en systèmes d'information,
              formation professionnelle (partenariat AGENIUS) et ingénierie d'infrastructures informatiques.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              Article 3 — Tarification, acomptes et commandes
            </h3>
            <p>
              Les tarifs sont stipulés en euros, Hors Taxes (HT) et Toutes Taxes Comprises (TTC) selon le taux
              de TVA en vigueur. Sauf convention expresse contraire, les packs annuels font l'objet d'un règlement
              intégral ou d'un acompte contractuel de 50 % à la commande, le solde étant exigible aux jalons de livraison.
            </p>
            <p>
              Les règlements sont acceptés par virement bancaire SEPA, carte bancaire via plateforme sécurisée
              (Stripe / PayPal) ou mandat administratif.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              Article 4 — Droit de rétractation (14 jours)
            </h3>
            <p>
              Conformément à la législation en vigueur (Code de la consommation pour les personnes physiques et
              petites entreprises éligibles), le client bénéficie d'un délai légal de quatorze (14) jours francs à
              compter de la conclusion du contrat pour exercer son droit de rétractation sans avoir à motiver sa décision.
              Pour les prestations débutées immédiatement sur demande expresse, les prestations déjà exécutées restent dues.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              Article 5 — Délais et livraison
            </h3>
            <p>
              Le traitement des commandes administratives s'effectue sous 2 à 5 jours ouvrés. Les plannings de livraison
              technique (audits, déploiements de sites, optimisations Google Maps) sont fixés par convention d'étape
              (ex. 90 jours pour le Top 3 Maps, 4 à 5 mois pour le Pack Visibilité Premium).
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              Article 6 — Protection des données personnelles (RGPD)
            </h3>
            <p>
              Net Sure Consulting applique strictement le Règlement Général sur la Protection des Données (RGPD 2016/679).
              Les données collectées (nom, email, numéro d'entreprise) sont strictement réservées à l'exécution de la relation
              commerciale et ne sont jamais cédées à des tiers non autorisés. Vous disposez d'un droit permanent d'accès, de
              rectification, d'effacement et de portabilité par simple email à <strong>contact@cnetsure.com</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display font-bold text-neutral-950 dark:text-white text-base">
              Article 7 — Responsabilité et juridiction compétente
            </h3>
            <p>
              La responsabilité de Net Sure Consulting est strictement plafonnée au montant des sommes effectivement encaissées
              au titre de la prestation commandée. Le présent contrat est soumis au droit français. Tout litige relève de la
              compétence exclusive des tribunaux du ressort de la <strong>Cour d'Appel de Paris</strong>.
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
