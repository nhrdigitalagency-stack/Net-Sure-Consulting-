import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { X, CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTransferToContact: (diagnosticData: {
    activity: string;
    location: string;
    status: string;
    recommendation: string;
  }) => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onTransferToContact,
}) => {
  const { t, language } = useTranslation();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedActivity, setSelectedActivity] = useState<string>('liberal');
  const [selectedLocation, setSelectedLocation] = useState<string>('paris_18');
  const [selectedStatus, setSelectedStatus] = useState<string>('bad');

  if (!isOpen) return null;

  const activities = [
    { id: 'liberal', label: t('eligibility.businessTypes.liberal') },
    { id: 'craft', label: t('eligibility.businessTypes.craft') },
    { id: 'retail', label: t('eligibility.businessTypes.retail') },
    { id: 'service', label: t('eligibility.businessTypes.service') },
    { id: 'other', label: t('eligibility.businessTypes.other') },
  ];

  const locations = [
    { id: 'paris_18', label: 'Paris 18e (Damrémont, Montmartre, Clignancourt)' },
    { id: 'paris_centre', label: 'Paris Centre (1er, 2e, 3e, 4e, 8e, 9e, 10e)' },
    { id: 'paris_sud_ouest', label: 'Paris Ouest & Sud (15e, 16e, 17e, 14e, 7e)' },
    { id: 'paris_est', label: 'Paris Est (11e, 12e, 19e, 20e, 13e)' },
    { id: 'idf_petite_couronne', label: 'Petite Couronne Île-de-France (92, 93, 94)' },
    { id: 'idf_grande_couronne', label: 'Grande Couronne & Province (77, 78, 91, 95)' },
  ];

  const mapStatuses = [
    { id: 'none', label: t('eligibility.mapStatus.none') },
    { id: 'bad', label: t('eligibility.mapStatus.bad') },
    { id: 'unverified', label: t('eligibility.mapStatus.unverified') },
  ];

  const handleNext = () => {
    if (step < 4) setStep((prev) => (prev + 1) as any);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => (prev - 1) as any);
  };

  const handleTransfer = () => {
    const actObj = activities.find((a) => a.id === selectedActivity);
    const locObj = locations.find((l) => l.id === selectedLocation);
    const statObj = mapStatuses.find((s) => s.id === selectedStatus);

    onTransferToContact({
      activity: actObj ? actObj.label : selectedActivity,
      location: locObj ? locObj.label : selectedLocation,
      status: statObj ? statObj.label : selectedStatus,
      recommendation: t('eligibility.recommendation'),
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="card-luxury relative w-full max-w-2xl bg-white/95 dark:bg-[#0D0F13]/95 border border-amber-500/30 dark:border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-neutral-900 dark:text-neutral-100 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase font-mono tracking-wider text-amber-500 dark:text-amber-400 bg-amber-500/10 border border-amber-400/30 mb-2 font-bold">
              Diagnostic Immédiat · Étape {step}/4
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold">
              {step === 4 ? t('eligibility.resultTitle') : t('eligibility.title')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {t('eligibility.subtitle')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-amber-400 hover:border-amber-400 transition-colors cursor-pointer"
            aria-label={t('eligibility.close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar with Rounded Full Curves */}
        <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 my-6 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#C5A059] h-full rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Business Type */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-semibold font-display">
              {t('eligibility.step1Title')}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t('eligibility.step1Desc')}
            </p>
            <div className="space-y-2.5 pt-2">
              {activities.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedActivity(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-sm cursor-pointer ${
                    selectedActivity === item.id
                      ? 'border-amber-400 bg-amber-500/10 dark:bg-amber-400/10 font-bold text-amber-600 dark:text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {selectedActivity === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-base font-semibold font-display">
              {t('eligibility.step2Title')}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t('eligibility.step2Desc')}
            </p>
            <div className="space-y-2.5 pt-2">
              {locations.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedLocation(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-sm cursor-pointer ${
                    selectedLocation === item.id
                      ? 'border-amber-400 bg-amber-500/10 dark:bg-amber-400/10 font-bold text-amber-600 dark:text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item.label}</span>
                  </span>
                  {selectedLocation === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Current Map Status */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-semibold font-display">
              {t('eligibility.step3Title')}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t('eligibility.step3Desc')}
            </p>
            <div className="space-y-2.5 pt-2">
              {mapStatuses.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedStatus(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-sm cursor-pointer ${
                    selectedStatus === item.id
                      ? 'border-amber-400 bg-amber-500/10 dark:bg-amber-400/10 font-bold text-amber-600 dark:text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-amber-400/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {selectedStatus === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && (
          <div className="space-y-6 pt-2">
            <div className="p-5 sm:p-6 rounded-2xl border border-amber-400/60 bg-amber-500/10 dark:bg-amber-400/10 space-y-3 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-500 dark:text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>{t('eligibility.scoreLabel')}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950 dark:text-white">
                {t('eligibility.scoreVal')}
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t('eligibility.recommendation')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/50">
              <div>
                <span className="text-neutral-400 block font-mono">Délai estimé</span>
                <span className="font-bold text-sm text-neutral-950 dark:text-white">60 à 90 jours</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-mono">Formule conseillée</span>
                <span className="font-bold text-sm text-amber-500 dark:text-amber-400">Pack SEO Premium (649 € HT)</span>
              </div>
            </div>

            <button
              onClick={handleTransfer}
              className="btn-gold w-full py-4 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.35)]"
            >
              <span>{t('eligibility.ctaTransfer')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Footer controls for steps 1-3 */}
        {step < 4 && (
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
            {step > 1 ? (
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-full text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{t('eligibility.prev')}</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              className="btn-gold px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t('eligibility.next')}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
