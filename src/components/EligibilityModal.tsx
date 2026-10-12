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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111315] border border-neutral-300 dark:border-neutral-800 p-6 sm:p-8 shadow-2xl text-neutral-900 dark:text-neutral-100 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-[#144A32] dark:text-[#22C55E] mb-1">
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
            className="p-1.5 border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            aria-label={t('eligibility.close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1 my-6">
          <div
            className="bg-[#144A32] dark:bg-[#22C55E] h-1 transition-all duration-300"
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
                  className={`w-full text-left p-3.5 border transition-all flex items-center justify-between text-sm ${
                    selectedActivity === item.id
                      ? 'border-[#144A32] dark:border-[#22C55E] bg-[#144A32]/5 dark:bg-[#22C55E]/10 font-semibold'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {selectedActivity === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-[#144A32] dark:text-[#22C55E]" />
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
                  className={`w-full text-left p-3.5 border transition-all flex items-center justify-between text-sm ${
                    selectedLocation === item.id
                      ? 'border-[#144A32] dark:border-[#22C55E] bg-[#144A32]/5 dark:bg-[#22C55E]/10 font-semibold'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{item.label}</span>
                  </span>
                  {selectedLocation === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-[#144A32] dark:text-[#22C55E]" />
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
                  className={`w-full text-left p-3.5 border transition-all flex items-center justify-between text-sm ${
                    selectedStatus === item.id
                      ? 'border-[#144A32] dark:border-[#22C55E] bg-[#144A32]/5 dark:bg-[#22C55E]/10 font-semibold'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {selectedStatus === item.id && (
                    <CheckCircle2 className="w-4 h-4 text-[#144A32] dark:text-[#22C55E]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && (
          <div className="space-y-6 pt-2">
            <div className="p-4 sm:p-5 border border-[#144A32]/30 dark:border-[#22C55E]/30 bg-[#144A32]/5 dark:bg-[#22C55E]/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#144A32] dark:text-[#22C55E]">
                <ShieldCheck className="w-4 h-4" />
                <span>{t('eligibility.scoreLabel')}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 dark:text-white">
                {t('eligibility.scoreVal')}
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t('eligibility.recommendation')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs border border-neutral-200 dark:border-neutral-800 p-4">
              <div>
                <span className="text-neutral-400 block font-mono">Délai estimé</span>
                <span className="font-semibold text-sm">60 à 90 jours</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-mono">Formule conseillée</span>
                <span className="font-semibold text-sm">Pack SEO Premium (649 € HT)</span>
              </div>
            </div>

            <button
              onClick={handleTransfer}
              className="w-full py-3.5 px-4 text-center text-sm font-semibold text-white bg-[#144A32] hover:bg-[#0E3624] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] dark:text-neutral-950 transition-colors flex items-center justify-center gap-2"
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
                className="px-4 py-2 text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{t('eligibility.prev')}</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white transition-colors flex items-center gap-1.5"
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
