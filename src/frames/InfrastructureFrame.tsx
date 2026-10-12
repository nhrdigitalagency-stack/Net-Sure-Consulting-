import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { Server, Cpu, Network, Database, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface InfrastructureFrameProps {
  onNavigateToContact: () => void;
}

export const InfrastructureFrame: React.FC<InfrastructureFrameProps> = ({ onNavigateToContact }) => {
  const { t } = useTranslation();

  const icons = [Server, Cpu, Network, Database];
  const pillars: Array<{ title: string; desc: string }> = t('infrastructure.pillars') || [];

  return (
    <section
      id="frame-8"
      className="section-hover-gold relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0B0D0F] text-neutral-900 dark:text-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Architectural Grid & High-Tech Ambient Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[450px] bg-[#144A32]/8 dark:bg-[#22C55E]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
          <span className="text-xs font-mono uppercase text-[#144A32] dark:text-[#22C55E] tracking-widest font-bold">
            {t('infrastructure.frameTitle')}
          </span>
          <span className="hidden sm:inline">Mainframe & Open Systems</span>
        </div>

        {/* Narrative & High-Tech Data Center Visual Topology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible text-neutral-950 dark:text-white">
              {t('infrastructure.headline')}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              {t('infrastructure.intro')}
            </p>

            <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">Maintien en Condition Opérationnelle</span>
              <span className="text-[#144A32] dark:text-[#22C55E] font-bold">SLA Garanti 99.98%</span>
            </div>
          </div>

          {/* Visual Architecture Topology Card */}
          <div className="lg:col-span-6">
            <div className="hover-gold border border-neutral-200 dark:border-neutral-800 bg-[#0E1012] text-neutral-100 p-6 sm:p-8 shadow-2xl space-y-5 font-mono text-xs transition-all">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-[11px] text-neutral-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>NET SURE CLOUD & DATA CENTERS</span>
                </span>
                <span className="text-emerald-400">ONLINE · MCO 24/7</span>
              </div>

              {/* Server Nodes Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border border-neutral-800 bg-neutral-900/60 space-y-1">
                  <span className="text-neutral-400 text-[10px] block">NODE 01 · MAINFRAME</span>
                  <div className="text-white font-bold text-sm">IBM z/OS Enterprise</div>
                  <span className="text-[10px] text-emerald-400">COBOL / CICS / DB2</span>
                </div>

                <div className="p-3 border border-neutral-800 bg-neutral-900/60 space-y-1">
                  <span className="text-neutral-400 text-[10px] block">NODE 02 · OPEN RDBMS</span>
                  <div className="text-white font-bold text-sm">PostgreSQL Cluster</div>
                  <span className="text-[10px] text-emerald-400">High-Availability HA</span>
                </div>

                <div className="p-3 border border-neutral-800 bg-neutral-900/60 space-y-1">
                  <span className="text-neutral-400 text-[10px] block">NODE 03 · REVERSE PROXY</span>
                  <div className="text-white font-bold text-sm">LiteSpeed / Nginx Edge</div>
                  <span className="text-[10px] text-emerald-400">SSL A+ · Latence &lt; 15ms</span>
                </div>

                <div className="p-3 border border-neutral-800 bg-neutral-900/60 space-y-1">
                  <span className="text-neutral-400 text-[10px] block">NODE 04 · SÉCURITÉ RGPD</span>
                  <div className="text-white font-bold text-sm">Chiffrement AES-256</div>
                  <span className="text-[10px] text-emerald-400">Datacenter France (Paris)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Supervision continue & Astreintes</span>
                <span className="text-white font-semibold">Paris & Île-de-France</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {pillars.map((pil, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={pil.title}
                className="hover-gold p-8 sm:p-10 border border-neutral-200 dark:border-neutral-800 space-y-4 bg-white dark:bg-[#090A0B] transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-900">
                  <span className="text-xs font-mono text-[#144A32] dark:text-[#22C55E] font-bold">
                    PILIER 0{idx + 1}
                  </span>
                  <IconComp className="w-5 h-5 text-neutral-400" />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white leading-snug pb-1">
                  {pil.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#090A0B] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="text-xs sm:text-sm font-mono text-neutral-700 dark:text-neutral-300 max-w-2xl">
            Forfaits d'infogérance personnalisés avec SLA et astreintes 24/7 sur systèmes critiques.
          </div>
          <button
            onClick={onNavigateToContact}
            className="px-6 py-3 text-xs font-semibold bg-[#144A32] hover:bg-[#0E3624] dark:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white dark:text-neutral-950 flex items-center gap-2 shrink-0 self-start sm:self-auto transition-colors shadow"
          >
            <span>Demander un audit d'infrastructure</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
