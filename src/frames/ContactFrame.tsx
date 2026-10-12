import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

interface ContactFrameProps {
  selectedOfferPreset?: string;
  diagnosticNote?: string;
  onOpenCgu: () => void;
  onOpenCookiePolicy: () => void;
}

export const ContactFrame: React.FC<ContactFrameProps> = ({
  selectedOfferPreset,
  diagnosticNote,
  onOpenCgu,
  onOpenCookiePolicy,
}) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [offer, setOffer] = useState('');
  const [message, setMessage] = useState('');
  const [requestVisibilitePremium, setRequestVisibilitePremium] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedOfferPreset) {
      setOffer(selectedOfferPreset);
      if (selectedOfferPreset.includes('Visibilité Premium')) {
        setRequestVisibilitePremium(true);
      }
    }
  }, [selectedOfferPreset]);

  useEffect(() => {
    if (diagnosticNote) {
      setMessage((prev) => (prev ? `${prev}\n\n${diagnosticNote}` : diagnosticNote));
    }
  }, [diagnosticNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const chosenOffer = requestVisibilitePremium
      ? 'Devis Pack Visibilité Premium (4 200 € HT)'
      : offer || 'Audit SEO Gratuit';

    const subject = encodeURIComponent(`[Contact NSC] ${name} - ${company || 'Projet'} - ${chosenOffer}`);
    const body = encodeURIComponent(
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      `Entreprise: ${company}\n` +
      `Numéro/SIRET: ${number}\n` +
      `Offre souhaitée: ${chosenOffer}\n\n` +
      `Message & Spécifications:\n${message}\n\n` +
      `---\nEnvoyé depuis cnetsure.com (traçabilité par email sous 24h ouvrées)`
    );

    setTimeout(() => {
      window.location.href = `mailto:contact@cnetsure.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const offerOptions = [
    'Audit SEO & Google Maps Gratuit',
    'Pack Visibilité (399 € HT / an)',
    'Pack SEO Premium (649 € HT / an)',
    'Pack Visibilité Premium (4 200 € HT - Devis)',
    'Pack Design Pro (890 € HT)',
    'Création Site Vitrine (499 € HT)',
    'Création Site E-Commerce (1 499 € HT)',
    'Formations Professionnelles (Partenariat AGENIUS)',
    'Conseil & Architecture SI (Assurance)',
    'Infrastructures & Infogérance Mainframe / Open',
    'Autre besoin spécifique',
  ];

  return (
    <section
      id="frame-11"
      className="section-hover-gold relative w-full pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#090A0B] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid & Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
            {t('contact.frameTitle')}
          </span>
          <span className="hidden sm:inline">Réponse Garantie sous 24h ouvrées</span>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
                {t('contact.headline')}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                {t('contact.intro')}
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#144A32] dark:text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono text-neutral-400 uppercase">
                    {t('contact.addressTitle')}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">
                    {t('contact.addressVal')}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#144A32] dark:text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono text-neutral-400 uppercase">
                    {t('contact.emailTitle')}
                  </span>
                  <a
                    href="mailto:contact@cnetsure.com"
                    className="text-sm sm:text-base font-mono font-semibold text-neutral-900 dark:text-white hover:underline"
                  >
                    {t('contact.emailVal')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#144A32] dark:text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono text-neutral-400 uppercase">
                    {t('contact.slaTitle')}
                  </span>
                  <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                    {t('contact.slaVal')}
                  </span>
                </div>
              </div>
            </div>

            <div className="hover-gold p-5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5 font-mono transition-all">
              <div>SIRET : 944 590 371 · RCS Paris</div>
              <div>Siège social : 40 rue Damrémont, 75018 Paris</div>
              <div>Filiale à 100 % du Groupe NET SURE (création 2014)</div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="hover-gold p-8 sm:p-10 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/20 space-y-5 shadow-sm transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-neutral-800 dark:text-neutral-200">
                      {t('contact.form.nameLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-neutral-800 dark:text-neutral-200">
                      {t('contact.form.emailLabel')}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-neutral-800 dark:text-neutral-200">
                      {t('contact.form.companyLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={t('contact.form.companyPlaceholder')}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5 text-neutral-800 dark:text-neutral-200">
                      {t('contact.form.numberLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder={t('contact.form.numberPlaceholder')}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-neutral-800 dark:text-neutral-200">
                    {t('contact.form.offerLabel')}
                  </label>
                  <select
                    value={offer}
                    onChange={(e) => {
                      setOffer(e.target.value);
                      if (e.target.value.includes('Visibilité Premium')) {
                        setRequestVisibilitePremium(true);
                      }
                    }}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none"
                  >
                    <option value="">{t('contact.form.offerSelectPlaceholder')}</option>
                    {offerOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-neutral-800 dark:text-neutral-200">
                    {t('contact.form.messageLabel')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#090A0B] focus:border-[#144A32] dark:focus:border-[#22C55E] outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="checkbox-devis-fluid"
                    checked={requestVisibilitePremium}
                    onChange={(e) => setRequestVisibilitePremium(e.target.checked)}
                    className="mt-1 rounded-none border-neutral-400 accent-[#144A32] dark:accent-[#22C55E]"
                  />
                  <label
                    htmlFor="checkbox-devis-fluid"
                    className="text-xs text-neutral-600 dark:text-neutral-400 cursor-pointer select-none"
                  >
                    {t('contact.form.checkboxDevisLabel')}
                  </label>
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold bg-[#144A32] hover:bg-[#0E3624] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white dark:text-neutral-950 flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-md"
                  >
                    <span>
                      {isSubmitting
                        ? t('contact.form.submitting')
                        : t('contact.form.submitBtn')}
                    </span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-10 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 text-center space-y-4 shadow-sm">
                <CheckCircle2 className="w-14 h-14 text-[#144A32] dark:text-[#22C55E] mx-auto" />
                <h3 className="font-display font-bold text-2xl text-neutral-950 dark:text-white">
                  {t('contact.form.successTitle')}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                  {t('contact.form.successDesc')}{' '}
                  <strong className="text-neutral-900 dark:text-white font-mono">{email}</strong>.
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  Un email pré-formaté a également été généré pour contact@cnetsure.com.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-6 py-2.5 text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950"
                >
                  Envoyer un autre message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Global Executive Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 pt-8 text-xs font-mono text-neutral-500 dark:text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <BrandLogo size="sm" showSubtitle={false} />
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                {t('contact.footer.legalNotice')}
              </span>
              <span>·</span>
              <span>{t('contact.footer.designBy')}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin.com/company/cnetsure"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/cnetsure"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              X (@cnetsure)
            </a>
            <button
              onClick={onOpenCgu}
              className="hover:text-neutral-900 dark:hover:text-white underline underline-offset-4"
            >
              {t('contact.footer.cgu')}
            </button>
            <button
              onClick={onOpenCookiePolicy}
              className="hover:text-neutral-900 dark:hover:text-white underline underline-offset-4"
            >
              {t('contact.footer.cookies')}
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
